import bookings from'../models/bookings';

const allbookings = async(req,res)=>{
    
    if(req.user.is_admin){
        return res.status(200).json({
            status:200,
            message:'all the bookigs are : ',
            data:bookings
        }) 
    }else{
        const book = bookings.filter(booking=>booking.user_id === req.user.id)
        if(!book){
            return res.status(404).json({
                status:404,
                error:'No booking found'
            });
        }else{
            return res.status(200).json({
                status:200,
                message:'Your Bookings Are :',
                data:book
            });
        }
    }    
}
export default allbookings;