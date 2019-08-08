import express from 'express';
const app = express();
import bookings from '../models/bookings';
import users from '../models/Users';
import valid from '../middleware/booking_validation';
import trips from '../models/trips';
import auth from '../helpers/auth';

const bookAtrip  = async(req,res)=>{
    const user = await users.find(c=>c.id ===req.user.id)
    if(!user){
        return res.status(409).json({
            status:'error',
            error:'Token not valid'
        });
    }
    if(req.user.is_admin){
        return res.status(405).json({
            status:'405',
            error : "You are an admin and not allowed to book a trip"
        })
    }
    const trip= trips.find(c=>c.trip_id === req.body.trip_id)
    if(!trip){
        return res.status(404).json({
            status:'error',
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
        status:'success',
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