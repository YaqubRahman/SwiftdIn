const User = require('../models/User')

const checkExistingEmail = async (email) => {
    try{
        const existingUser = await User.findOne({ email: email});

        return existingUser != null;

    } catch (error) {
        console.error('Error checking email:', error);
        throw error;
    }
}