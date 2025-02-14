const User = require('../models/User');
const express = require('express');
const router = express.Router();
const { checkExistingEmail, hashPassword, comparePassword, generateAccessToken, createUser } = require('../controllers/authController');
const { checkEmailInput, checkPasswordInput, checkFirstNameInput, checkLastNameInput } = require('../middleware/validation');



router.post("/register", async (req, res) => {
    try{
        const {email, password, firstName, lastName} = req.body;

        const emailValidation = checkEmailInput(email);
        const passwordValidation = checkPasswordInput(password);
        const firstNameValidation = checkFirstNameInput(firstName);
        const lastNameValidation = checkLastNameInput(lastName);

        // Checking for any validation failure
        if (!emailValidation.isValid){
            return res.status(400).json({ error: emailValidation.error });
        }
        if (!passwordValidation.isValid){
            return res.status(400).json({ error: passwordValidation.error });
        }
        if (!firstNameValidation.isValid){
            return res.status(400).json({ error: firstNameValidation.error });
        }
        if (!lastNameValidation.isValid){
            return res.status(400).json({ error: lastNameValidation.error });
        }

        // Checking if email exists
        const emailExists = await checkExistingEmail(email);
        if (emailExists){
            return res.status(400).json({ error: 'Email already registered' });
        }

        //Hashing password
        const hashedPassword = await hashPassword(password);
        
        //Create new user
        const newUser = await createUser(email, hashedPassword, firstName, lastName);

        //Generate JWT token
        const token = generateAccessToken(newUser);

        
        //Send success response
        res.status(201).json({
            message: 'User registered successfully', token, user:
            {   id: newUser._id,
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            } 
        });
    }

    catch (error){
            console.error('Registration Error:', error);
            res.status(500).json({error: 'Internal server error'})
    }
});

router.post("/login", async (req, res) =>{
    try{
        const{email, password} = req.body;
        const emailValidation = checkEmailInput(email);
        const passwordValidation = checkPasswordInput(password);

        // Checking for any validation failure
        if(!emailValidation.isValid){
            return res.status(400).json({ error: emailValidation.error });
        }
        if(!passwordValidation.isValid){
            return res.status(400).json({ error: passwordValidation.error });
        }
        
        // Checking if the user email exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({error: 'Invalid email or password'});

        }

        
        // Checking if the password is the same has the hash password
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid.isValid){
            return res.status(401).json({error: ' Invalid email of password'})
        }

        const token = generateAccessToken(user);

        res.status(201).json({
            message: 'User logged in successfully',
            token,
            user: {
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




router.put("/country", authenticateToken, async(req, res) =>{
    try{
        const{country} = req.body;

        if(!country){
            return res.status(400).json({ error: 'Country selection is required'})
        }

        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({ error: 'User not found'});
        }

        user.country = country;
        await user.save();


        res.status(200).json({
            message: 'User Country registered successfully', country,
            user:{
                id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                country: user.country
            }
        });
    }
    catch (error){
        console.error('Country Error:', error)
        res.status(500).json({error: 'Internal server error'})
    }
}); 



module.exports = router;
