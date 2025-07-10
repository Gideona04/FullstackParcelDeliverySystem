const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const verifyToken = (req, res, next) => {

      const authHeader = req.headers.token;

      if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) return res.status(403).json("c'est token n'est pas valide");
            req.user = user;
            next();
        });

      }else{
        
        res.status(401).json("veuillez vous connecter d'abord");
      }

};
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if( req.user.role == "admin"){
            next();
        }else{
            res.status(403).json("vous n'êtes pas autorisé à faire cette action");
        }
    });
}
    
 
 module.exports = {verifyToken, verifyTokenAndAuthorization};

