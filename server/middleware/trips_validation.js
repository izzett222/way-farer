import Joi from '@hapi/joi';
const today = new Date();
const year = today.getFullYear();



function validateUser(req,res,next){
const schema ={
    bus_license_number: Joi.string().alphanum().min(7).max(7).required(),
    origin: Joi.string().alphanum().min(4).max(30).required(),
    destination: Joi.string().alphanum().min(4).max(30).required(),
    seating_capacity: Joi.number().integer().max(100).required(),
    trip_date: Joi.number().integer().min(year).required(),
    fare: Joi.number().required(),
    status: Joi.boolean()
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