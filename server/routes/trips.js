import express from 'express'
import auth from '../helpers/auth';
import tripsValidation from '../middleware/trips_validation';
import allTrips from '../controllers/getAllTrips';
import deleteTrip from '../controllers/deleteTrip';
import specificTrip from '../controllers/specificTrip';
import createTrip from '../controllers/createTrip';

const route = express.Router();

route.get('/api/v1/trips',auth,allTrips);


route.get('/api/v1/trips/:id',auth,specificTrip);


route.patch('/api/v1/trips/:id',auth,deleteTrip);


route.post('/api/v1/trips',tripsValidation,auth,createTrip);


export default route;