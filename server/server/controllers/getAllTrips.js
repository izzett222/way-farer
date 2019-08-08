import trips from '../models/trips';


const trip = async(req,res)=>{
    res.status(200).json({
        status:"success",
        data: trips
    })
}
export default trip;