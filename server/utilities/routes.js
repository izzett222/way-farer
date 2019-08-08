import winston  from'winston';
import express from'express';
import bodyParser from'body-parser';
import morgan from 'morgan';
import debug  from 'debug';
import error  from'../server/middleware/error';
import allbookings  from'../server/routes/bookings';
import bootrip  from'../server/routes/bookings';
import createtrip  from'../server/routes/trips';
import deleteBookings  from'../server/routes/bookings';
import deleteTrip  from'../server/routes/trips';
import getAllTrips  from'../server/routes/trips';
import signup  from '../server/routes/user';
import specificTrip  from '../server/routes/Trips';

const app = express();


process.on('unhandledRejection',(ex)=>{
    winston.error(ex.message,ex);
    process.exit(1);
})

process.on('uncaughtException',(ex)=>{
    winston.error(ex.message,ex);
    process.exit(1);
}); 

winston.add(winston.transports.File,{filename:'logfile.log'});


if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('Morgan Enabled ......')
}




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',allbookings);
app.use('/',getAllTrips);
app.use('/',specificTrip);
app.use('/',signup);
app.use('/',deleteBookings);
app.use('/',deleteTrip);
app.use('/',bootrip);
app.use('/',createtrip);
app.use(error);

export default app;