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

const checkPasswordInput = (userInputPassword) => {
    if(!userInputPassword){
        return{
            isValid: false,
            error: 'Password is required'
        };
    }

    if(userInputPassword.length < 10){
        return{
            isValid: false,
            error: 'Password must be at least 10 characters long'
        };
    }

    return{
        isValid: true,
        error: null
    };
}

const checkFirstNameInput = (userInputFirstName) => {
    if(!userInputName){
        return{
            isValid: false,
            error: 'First name is required'
        };
    }
}

const checkLastNameInput = (userInputLastName) => {
    if(!userInputLastName){
        return{
            isValid: false,
            error: 'Last name is required'
        };
    }
}