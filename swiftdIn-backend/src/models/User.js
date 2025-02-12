const mongoose = require('mongoose'); // First we need mongoose to create our model

// Schema defines the structure of the data
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type:String,
        required: false
    },
    headline: String,           // This is a shorter way to define optional fields
    location: String        
}, {
    timestamps: true        // automatically add createdAt and updatedAt dates 
                            // where createdAt: field records the date and time when the document was first created in the db
                            // where updatedAt: field records the data and time when the document was last updated
});


// Turn our schema into a model we can use
module.exports = mongoose.model('User', userSchema)