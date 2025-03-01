const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    try{
        const tokenHeader = req.headers.authorization;

        if(!tokenHeader){
            return res.status(403).json({error: 'No token provided'});
        }

        const token = tokenHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err){
                return res.status(403).json({ error: 'Invalid token'});
            }

            req.user = user;
            next();

        });

    } catch(error) {
        res.status(403).json({error: 'Invalid token'});
    }
};

module.exports = authenticateToken;
