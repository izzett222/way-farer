import users from '../models/Users';
import trips from '../models/trips';

const specifictrip = async(req,res)=>{
    const trip = trips.find(c=>c.trip_id === parseInt(req.params.id))
    if(!trip){
        return res.status(404).json({
            status:'error',
            error:"the trip id is invalid"
        })
    }
    res.status(200).json({
        status:"success",
        data: trip
    })
}
export default specifictrip;