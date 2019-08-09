import express from 'express';
import auth from '../helpers/auth';
import getAllBookings from '../controllers/allbookings';
import deleteBooking from '../controllers/deleteBookings';
import validateBook from '../middleware/booking_validation'
import bookAtrip from '../controllers/bookTrip';


const route = express.Router();

route.get('/api/v1/book',auth,getAllBookings)

route.delete('/api/v1/book/:id',auth,deleteBooking);

route.post('/api/v1/book',validateBook,auth,bookAtrip);


export default route;