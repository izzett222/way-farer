import dotenv from 'dotenv';
import http  from 'http';
import app from './utilities/routes';

dotenv.config();

const server = http.createServer(app); 

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`You are listening to port ${port}.....`);
})