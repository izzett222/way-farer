import Joi from '@hapi/joi';
const today = new Date();
const year = today.getFullYear();

function validateBook(req, res, next){
    

    const schema ={
        trip_id: Joi.number().min(1).max(30).required(),
        date: Joi.number().min(year).required()
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
export default validateBook;   