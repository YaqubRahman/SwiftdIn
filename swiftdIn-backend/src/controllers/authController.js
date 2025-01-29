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

const hashPassword = (userInputPassword) => {
    bcrypt.genSalt(saltRounds, (err, salt) =>{
        if(err){
            console.error('Error generating salt:', err);
            return;
        }

        bycrypt.hash(userInputPassword, salt, (err, hash) => {
            if(err){
                console.error('Error hashing password:', err);
                return;
            }

            console.log('Hashed password:', hash);
        });
    });
};


bcrypt.compare(userInputPassword, storedHashedPassword, (err,result) => {
    if (err){
        console.error('Error comparing passwords:', err);
        return;
    }

    
if (result) {
    console.log('Passwords match! User authenticated.');
} else{
    console.log('Passwords do not match! Authentication failed');
}
});

// JWT SECTION

const generateAccessToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    };

    const secret = '123thesecretkey'
    const options = {expiresIn: '1h'};

    return jwt.sign(payload, secret, options);
}

const  verifyAccessToken = (token) => {
    const secret = '123thesecretkey';

    try {
        const decoded = jwt.verify(token, secret);
        return { success: true, data:decoded};
    } catch(error){
        return{ success: false, error:error.message};
    }
}


// CREATING A NEW USER DOCUMENT

const createUser = async (userEmail, hashedPassword, firstName, lastName) => {
    try{
        const newUser = await User.create({
            email: userEmail,
            password = hashedPassword,
            firstName = firstName,
            lastName = lastName
        });
        return newUser;

    } catch (error) {
        console.error('Error creating user:', error):
        throw error;
    }
}





module.exports = {
    checkExistingEmail,
    hashPassword,
    generateAccessToken,
    verifyAccessToken,
    createUser
}