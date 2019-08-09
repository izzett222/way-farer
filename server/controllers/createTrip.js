import trips from '../models/trips';

const createTrip =  async(req,res)=>{
    if(!req.user.is_admin){
        return res.status(403).json({
            status:403,
            error : "your are not an admin"
        })
    }
        const org = trips.find(tripof => tripof.origin === req.body.origin)  
        const dst = trips.find(tripof => tripof.destination === req.body.destination)   
        if(dst&&org){
            return res.status(409).json({
                status:409,
                error:'trip already exists'
            })
        }
        
        const newTrip = {
            trip_id : trips.length + 1,
            seating_capacity : req.body.seating_capacity,
            bus_license_number : req.body.bus_license_number,
            origin : req.body.origin, 
            destination : req.body.destination,
            trip_date : req.body.date,
            fare : req.body.fare,
            status : req.body.status
        }
        trips.push(newTrip);
        res.status(201).json({
            status : 201,
            message:"the was trip created succesfuly",
            data: newTrip
        })
    }
    export default createTrip;