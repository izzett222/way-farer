import trips from '../models/trips';


const trip = async(req,res)=>{
    res.status(200).json({
        status:200,
        message:"Trips available Are :",
        data: trips
    })
}
export default trip;