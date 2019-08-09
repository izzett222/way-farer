import app from '../../utilities/routes';
import chaiHttp from 'chai-http';
import chai,{expect} from'chai';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
chai.use(chaiHttp);
chai.should();
  
 describe('Bookings Test',()=>{
    it('should create a new trip',(done) =>{
const token =  jwt.sign({
  id:1,
  is_admin:true,
  email: "kabundege@gmail.com",
  },process.env.JWTSECRET);
const newTrip={
  seating_capacity : 50,
  bus_license_number : "RAE234A",
  origin : "kigali", 
  destination : "kibuye",
  trip_date : 10032019,
  fare : 5000,
  status : true
}
chai.request(app)
.post('/api/v1/trips')
.set('token',token)
.send(newTrip)
.end((err, res) => {
expect(res.statusCode).to.equal(201);
});
done();
}); 
    it('sohuld return trip booked',(done)=>{
       const token =  jwt.sign({
  id:1,
  is_admin:false,
  email: "kabundege@gmail.com",
  },process.env.JWTSECRET)
    const newbook = {
trip_id : 1,
date :  456789
    }
    chai.request(app)
    .post('/api/v1/book')
    .set('token',token)
    .send(newbook)
    .end((err, res) => {
    expect(res.statusCode).to.equal(201);
    });
    done();
    });
 it('sohuld return not allowed get a user account',(done)=>{
const token =  jwt.sign({
   id:1,
   is_admin:true,
   email: "kabundege@gmail.com",
   },process.env.JWTSECRET)
 const newbook = {
     trip_id : 1,
     date :  456789
 }
 chai.request(app)
 .post('/api/v1/book')
 .set('token',token)
 .send(newbook)
 .end((err, res) => {
 expect(res.statusCode).to.equal(406);
 });
 done();
 });

 it('sohuld return trip not found',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:false,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)
 const newbook = {
     trip_id : 4,
     date :  456789
 }
 chai.request(app)
 .post('/api/v1/book')
 .set('token',token)
 .send(newbook)
 .end((err, res) => {
 expect(res.statusCode).to.equal(404);
 });
 done();
 }); 

 it('sohuld return his/her trips',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:false,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)

       const bookings = {
        trip_id : 1,
        date :  456789
    }
 chai.request(app)
 .get('/api/v1/book')
 .set('token',token)
 .send(bookings)
 .end((err, res) => {
 expect(res.statusCode).to.equal(200);
 });
 done();
 });

 it('sohuld return his/her trips',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:true,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)

       const bookings = {
        trip_id : 1,
        date :  456789
    }
 chai.request(app)
 .get('/api/v1/book')
 .set('token',token)
 .send(bookings)
 .end((err, res) => {
 expect(res.statusCode).to.equal(200);
 });
 done();
 });


 it('sohuld return his/her trips',(done)=>{
   const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)

      const bookings = {
       trip_id : 1,
       date :  456789
   }
chai.request(app)
.get('/api/v1/book')
.set('token',token)
.send(bookings)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
});
it('sohuld return his/her trips',(done)=>{
   const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)

      const bookings = {
       trip_id : 1,
       date :  456789
   }
chai.request(app)
.get('/api/v1/book')
.set('token',token)
.send(bookings)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
});
it('sohuld return his/her trips',(done)=>{
   const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)

      const bookings = {
       trip_id : 1,
       date :  456789
   }
chai.request(app)
.get('/api/v1/book')
.set('token',token)
.send(bookings)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
});
it('sohuld return his/her trips',(done)=>{
   const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)

      const bookings = {
       trip_id : 1,
       date :  456789
   }
chai.request(app)
.get('/api/v1/book')
.set('token',token)
.send(bookings)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
}); 
 it('sohuld return his/her trips',(done)=>{
   const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)

   
chai.request(app)
.get('/api/v1/book')
.set('token',token)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
}); 

 it('sohuld return trip booked',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:false,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)
 chai.request(app)
 .delete('/api/v1/book/sdfgh')
 .set('token',token)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });  
   
 it('sohuld return trip booked',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:false,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)
 const newbook = {
     trip_id : 1,
     date :  456789
 }
 chai.request(app)
 .delete('/api/v1/book/567')
 .set('token',token)
 .send(newbook)
 .end((err, res) => {
 expect(res.statusCode).to.equal(404);
 });
 done();
 });  

  
 it('sohuld return trip booked',(done)=>{
    const token =  jwt.sign({
       id:1,
       is_admin:false,
       email: "kabundege@gmail.com",
       },process.env.JWTSECRET)
 chai.request(app)
 .delete('/api/v1/book/1')
 .set('token',token)
 .end((err, res) => {
 expect(res.statusCode).to.equal(200);
 });
 done();
 });
  
 it('sohuld return not authorized',(done)=>{
    const token =  '';
 chai.request(app)
 .delete('/api/v1/book/1')
 .set('token',token)
 .end((err, res) => {
 expect(res.statusCode).to.equal(401);
 });
 done();
 });  


 })