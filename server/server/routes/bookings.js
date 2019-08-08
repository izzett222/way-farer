import express from 'express';
import valid from '../middleware/booking_validation';
import auth from '../helpers/auth';
import get from '../controllers/allbookings';
import book from '../controllers/bookTrip';
import del from '../controllers/deleteBookings';
import validateBook from '../middleware/booking_validation'


const route = express.Router();

route.get('/api/v1/book',auth,get)

route.delete('/api/v1/book/:id',auth,del);

route.post('/api/v1/book',validateBook, auth,book);


export default route;