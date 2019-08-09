import express from 'express';
import UserLogin from '../controllers/login';
import create from '../controllers/signup';
import loginValidation from '../middleware/login_validater';
import signupValidation from '../middleware/signup_Validater';

const route = express.Router();

route.post('/api/v1/user/signup',signupValidation,create);

route.post('/api/v1/auth/signin',loginValidation,UserLogin);

export default route;