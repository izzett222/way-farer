import users from '../models/Users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const login =  async(req,res)=>{
    
        const user = users.find(c => c.email === req.body.email)
        if(!user){
            return res.status(403).json({
                status:'error',
                error: 'invalid email or password !!'
            });
        };
            const password = await bcrypt.compare(req.body.password,user.password);
            if(!password){
                return res.status(403).json({
                    status:'error',
                    error:'invalid email or password'
                });
            }
        const token =  jwt.sign({
            id:user.id,
            is_admin:user.is_admin,
            email:user.email
            },process.env.JWTSECRET) 
            res.header('x-auth-token',token)
            res.status(200);
    }
    export default login;