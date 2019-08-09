import jwt from 'jsonwebtoken';

export default function (req,res,next){
    
    const token = req.header('token');
    
    if(!token) return res.status(401).json({
        status:401,
        error:'error no token provided'
    })
try{
const decoded = jwt.verify(token,process.env.JWTSECRET);
req.user = decoded;
next();
}
catch(ex){
    res.status(401).json({
        status:401,
        error: "token unAuthorized"
    });
}
}
