import trips from '../models/trips';

const specifictrip = async(req,res)=>{
    if (isNaN(req.params.id)){
        return res.status(400).json({
            status:400,
            error:"Please check the ID You enter it must be a valid"
        })
    }
    const trip = trips.find(c=>c.trip_id === parseInt(req.params.id))
    if(!trip){
        return res.status(404).json({
            status:404,
            error:"The trip id you are looking for is not found"
        })
    }
    res.status(200).json({
        status:200,
        message:"the trip you specified is :",
        data: trip
    })
}
export default specifictrip;