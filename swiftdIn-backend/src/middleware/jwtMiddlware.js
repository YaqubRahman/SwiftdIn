const authenticateToken = (req, res, next) => {
    try{
        const { token } = req.headers.authorisation

        if(!token){
            return res.status(403).json({error: 'Invalid token'});
        }

    } catch(error) {
        res.status(403).json({error: 'Invalid token'});
    }
    
    
    return{
        isValid: true,
        error: null
    };

};

module.exports  = authenticateToken;
