const express = require('express');
const router = express.Router();
const { checkExistingEmail, hashPassword, comparePassword, generateAccessToken, createUser } = require('../controllers/authController');
const { checkEmailInput, checkPasswordInput, checkFirstNameInput, checkLastNameInput } = require('../middleware/validation');


router.get("/register", (req, res) => {
    try{
        const {email, password, firstName, lastName} = req.body;

        const emailValidation = checkEmailInput(email);
        const passwordValidation = checkPasswordInput(password);
        const firstNameValidation = checkFirstNameInput(firstName);
        const lastNameValidation = checkLastNameInput(lastName);

        // Checking for any validation failure
        if (!emailValidation){
            return res.status(400).json({ error: emailValidation.error });
        }
        if (!passwordValidation){
            return res.status(400).json({ error: passwordValidation.error });
        }
        if (!firstNameValidation){
            return res.status(400).json({ error: firstNameValidation.error });
        }
        if (!lastNameValidation){
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
            res.status.json({error: 'Internal server error'})
    }

    

    


    

});

router.post("/login", (req, res) =>{
    const {email, password} = req.body;
    
})




module.exports = router;
