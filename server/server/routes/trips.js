import express from 'express'
import auth from '../helpers/auth';
import result from '../middleware/trips_validation';
import trip from '../controllers/getAllTrips';
import del from '../controllers/deleteTrip';
import specific from '../controllers/specificTrip';
import creat from '../controllers/createTrip';

const route = express.Router();

const app = express();

app.use(result);


route.get('/api/v1/trips',auth,trip);


route.get('/api/v1/trips/:id',auth,specific);


route.patch('/api/v1/trips/:id',auth,del);


route.post('/api/v1/trips',auth,creat);

export default route;