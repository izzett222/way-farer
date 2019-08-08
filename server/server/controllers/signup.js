import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../models/Users';
import result from '../middleware/signup_Validater';

const app = express();

app.use(result);

const signup = async(req,res)=>{
    let user = users.find(c=> c.email === req.body.email)
        if (user){
            return res.status(409).json({
            status: "error",
            error:'email already taken'
                })
                }
                      const newUser = {
                        id: users.length + 1,
                        email : req.body.email,
                       first_name : req.body.first_name,
                       last_name :  req.body.last_name,
                       password: await bcrypt.hash(req.body.password,10),
                       is_admin: req.body.is_admin
                    };
                    const token = jwt.sign({
                        id:newUser.id,
                        is_admin:req.body.is_admin,
                        email:req.body.email
                    },process.env.JWTSECRET);
                    res.header('x-auth-token',token);
            users.push(newUser);
            res.status(201).json({
                status : 'success',
                data : {
                    token:token,
                    first_name:req.body.first_name,
                    last_name:req.body.last_name,
                    email:req.body.email
                }
            });
           
        };

        export default signup;