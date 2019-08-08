import users from '../models/Users';
import trips from '../models/trips';

const deletetrip =  async(req,res)=>{
    const user = await users.find(c=>c.id ===req.user.id)
    if(!user){
        return res.sendStatus(400);
    }
    if(!req.user.is_admin){
        return res.json({
            status:'error',
            error : "your are not an admin"
        })
    }
        const trip = trips.find(c=>c.trips_id === parseInt(req.params.id));
        if(!trip){
            return res.json({
                status:'error',
                error : "the trips ID is Invalid"
            })
        }
        const index = trips.indexOf(trip)
        trips.splice(index,1);

        res.status(200).json({
            status:'success ',
            data:{
                message:'Trip cancelled succesfully'
            }
        })
    }

    export default deletetrip;