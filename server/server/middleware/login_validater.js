const Joi = require('@hapi/joi');
function validateUser(req,res,next){
const schema ={
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email({ minDomainSegments: 2 })
}
const {error} = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).json({
            status:'400',
            error:error.details[0].message
        });
    }
    next();
}
export default validateUser;