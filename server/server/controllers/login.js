import users from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const login =  async(req,res)=>{
    
        const user = users.find(userof => userof.email === req.body.email)
        
        if(!user){
            return res.status(403).json({
                status:403,
                error: 'invalid email or password !!'
            });
        };
            const password = await bcrypt.compare(req.body.password,user.password);
            if(!password){
                return res.status(403).json({
                    status:403,
                    error:'invalid email or password'
                });
            }
        const token =  jwt.sign({
            id:user.id,
            is_admin:user.is_admin,
            email:user.email
            },process.env.JWTSECRET)
            res.status(200).header('token',token).json({
                status:200,
                message:'login succesfull the token is in the header'
            });
    }
    export default login;