import users from '../models/Users';
import trips from '../models/trips';

const deletetrip =  async(req,res)=>{
    if(isNaN(req.params.id)){
        return res.status(400).json({
            ststua:400,
            error:"Please check the ID you entered it is incorrect"
        })
    }
    if(!req.user.is_admin){
        return res.status(403).json({
            status:403,
            error : "your are not an admin"
        })
    }
        const trip = trips.find(c=>c.trip_id === parseInt(req.params.id));
        if(!trip){
            return res.status(404).json({
                status:404,
                error : "the trips ID is Invalid"
            })
        }
        const index = trips.indexOf(trip)
        trips.splice(index,1);

        res.status(200).json({
            status:200,
            message:"Tthe trip was cancelled succesfully",
            data:trip
        })
    }

    export default deletetrip;