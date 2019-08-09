import bookings from '../models/bookings';

const deletebooking = async(req,res)=>{
    if (isNaN(req.params.id)){
        return res.status(400).json({
            status:400,
            error:"Please check the ID You enter it must be a valid"
        })
    }
    const mybookings = bookings.filter(booking=>booking.user_id === req.user.id)
    if(!mybookings){
        return res.status(404).json({
            status:404,
            error:'No booking found'
        });
    }else{
        const trip = mybookings.find(booking=>booking.booking_id === parseInt(req.params.id))
        if(!trip){
            return res.status(404).json({
                status: 404,
                error : 'Booking not found'
            })
        }
        const del = bookings.findIndex(c=>c.bookings_id === parseInt(req.params.id));
        bookings.splice(del,1);
        res.status(200).json({
            status:200,
            message:"bookings deleted succesfully",
            data:trip
        })
        
    };
}
export default deletebooking;