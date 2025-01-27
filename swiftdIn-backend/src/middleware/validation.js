const checkEmailInput = (userInputEmail) => {
    if(!userInputEmail) {
        return{
            isValid: false,
            error: 'Email is required'
        };
    }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(userInputEmail)){
    return {
        isValid: false,
        error: 'Invalid email format'
    };
}

return{
    isValid: true,
    error: null
};
}