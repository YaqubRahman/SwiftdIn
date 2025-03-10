const User = require('../models/User');
const jwt = require('jsonwebtoken');


// CHECKING EMAIL SECTION

const bcrypt = require('bcrypt');
const saltRounds = 10; // Typically a value between 10 and 12

const checkExistingEmail = async (email) => {
    try{
        const existingUser = await User.findOne({ email: email});
        return existingUser != null;

    } catch (error) {
        console.error('Error checking email:', error);
        throw error;
    }
}

// HASING PASSWORD SECTION

const hashPassword =  async (userInputPassword) => {
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(userInputPassword, salt);
        return hash;
    } catch (error) {
        console.error('Error hashing passwords', error);
        throw error;
    }
};

const comparePassword = async (userInputPassword, storedHashedPassword) => {
    try{
        isMatch = await bcrypt.compare(userInputPassword, storedHashedPassword);
        return {isValid: isMatch};
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error;
    }
};


// CREATING A NEW USER DOCUMENT

const createUser = async (userEmail, hashedPassword, firstName, lastName) => {
    try{
        const newUser = await User.create({
            email: userEmail,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        return newUser;

    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}


// JWT SECTION

const generateAccessToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    };

    const options = {expiresIn: '1h'};

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

const  verifyAccessToken = (token) => {

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { success: true, data:decoded};
    } catch(error){
        return{ success: false, error:error.message};
    }
}



module.exports = {
    checkExistingEmail,
    hashPassword,
    comparePassword,
    generateAccessToken,
    verifyAccessToken,
    createUser
}