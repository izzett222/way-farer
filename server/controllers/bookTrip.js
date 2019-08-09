import bookings from '../models/bookings';
import users from '../models/Users';
import trips from '../models/trips';

const bookAtrip  = async(req,res)=>{
    if(req.user.is_admin){
        return res.status(406).json({
            status:406,
            error : "You are an admin and not allowed to book a trip"
        })
    }
    const trip= trips.find(tripof=>tripof.trip_id === req.body.trip_id)
    if(!trip){
        return res.status(404).json({
            status:404,
            error:'the trip_id is Invalid'
        })
    }
    const newBook = {
        booking_id : bookings.length + 1,
        trip_id : req.body.trip_id,
        user_id: req.user.id,
        date : req.body.date 
    }
    res.status(201).json({
        status:201,
        message:"the account was created succesfuly",
        data:  {
            booking_id : bookings.length + 1,
            bus_license:trip.bus_license,
            trip_date:trip.date,
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            trip_id : req.body.trip_id,
            user_email: req.user.email
        }
    })
    bookings.push(newBook);
}
export default bookAtrip;