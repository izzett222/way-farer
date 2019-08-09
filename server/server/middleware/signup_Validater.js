import Joi from '@hapi/joi';
function validateUser(req,res,next){
const schema ={
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email({ minDomainSegments: 2 }),
    is_admin: Joi.boolean().strict()
}
const {error} = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).json({
            status:400,
            error:error.details[0].message
        });
    }
next();
}

export default validateUser;