const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try{

        if(req.headers.authorization){
            let token = req.headers.authorization.split(" ")[1];
            if(token){
                jwt.verify(token, process.env.JWT_SECURITY);
                next();
            }else{
                res.sendStatus(401);
            }
        }else{
            res.sendStatus(401);
        }
    }catch(error){
        res.sendStatus(401);
    }
}