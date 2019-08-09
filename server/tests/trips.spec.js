import app from '../../utilities/routes';
import chaiHttp from 'chai-http';
import chai,{expect} from'chai';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
chai.use(chaiHttp);
chai.should();


const trips = [{
  id:1,
    seating_capacity : 50,
bus_license_number : "RAE234A",
origin : "kigali", 
destination : "kibuye",
trip_date : "10032019",
fare : 5000,
status : true
}]

describe('trips test', ()=>{
  
  it('should create a new trip',(done) =>{
    const token =  jwt.sign({
      id:1,
      is_admin:true,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET);
    const newTrip={
      seating_capacity : 50,
      bus_license_number : "RAE234A",
      origin : "kigli", 
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
    
    it('should create a trip alreday exist',(done) =>{
      const token =  jwt.sign({
        id:1,
        is_admin:true,
        email: "kabundege@gmail.com",
        },process.env.JWTSECRET);
      const newTrip={
        seating_capacity : 50,
        bus_license_number : "RAE234A",
        origin : "kigli", 
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
      expect(res.statusCode).to.equal(409);
      });
      done();
      });

      it('should create a user is not allowed to create a trip',(done) =>{
        const token =  jwt.sign({
          id:1,
          is_admin:false,
          email: "kabundege@gmail.com",
          },process.env.JWTSECRET);
        const newTrip={
          seating_capacity : 50,
          bus_license_number : "RAE234A",
          origin : "kigli", 
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
        expect(res.statusCode).to.equal(403);
        });
        done();
        });

        it('should create a new trip',(done) =>{
          const token =  '';
          const newTrip={
            seating_capacity : 50,
            bus_license_number : "RAE234A",
            origin : "kigli", 
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
          expect(res.statusCode).to.equal(401);
          });
          done();
          });

          it('should create a new trip',(done) =>{
            const token =  jwt.sign({
              id:1,
              is_admin:true,
              email: "kabundege@gmail.com",
              },process.env.JWTSECRET);
            const newTrip={
              seating_capacity : 50,
              bus_license_number : "RAE234A",
              origin : "", 
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
            expect(res.statusCode).to.equal(400);
            });
            done();
            });
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
                destination : "",
                trip_date : 10032019,
                fare : 5000,
                status : true
              }
              chai.request(app)
              .post('/api/v1/trips')
              .set('token',token)
              .send(newTrip)
              .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              });
              done();
            });
            it('should return params must be a number ',(done) =>{
              const token =  jwt.sign({
                id:1,
                is_admin:true,
                email: "kabundege@gmail.com",
                },process.env.JWTSECRET);
              chai.request(app)
              .patch('/api/v1/trips/sdfgh')
              .set('token',token)
              .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              });
              done();
              });
              it('should return a specific trips for the admin',(done) =>{
                const token =  jwt.sign({
                  id:1,
                  is_admin:true,
                  email: "kabundege@gmail.com",
                  },process.env.JWTSECRET)
                chai.request(app)
                .get('/api/v1/trips/1')
                .set('token',token)
                .send(trips)
                .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                });
                done();
                });
              it('should return not an admin to delete a trip',(done) =>{
                const token =  jwt.sign({
                  id:1,
                  is_admin:false,
                  email: "kabundege@gmail.com",
                  },process.env.JWTSECRET);
                chai.request(app)
                .patch('/api/v1/trips/1')
                .set('token',token)
                .end((err, res) => {
                expect(res.statusCode).to.equal(403);
                });
                done();
                });

                it('should return params must be a number ',(done) =>{
                  const token =  jwt.sign({
                    id:1,
                    is_admin:true,
                    email: "kabundege@gmail.com",
                    },process.env.JWTSECRET);
                  chai.request(app)
                  .patch('/api/v1/trips/578')
                  .set('token',token)
                  .end((err, res) => {
                  expect(res.statusCode).to.equal(404);
                  });
                  done();
                  });
                  it('should return params must be a number ',(done) =>{
                    const token =  jwt.sign({
                      id:1,
                      is_admin:true,
                      email: "kabundege@gmail.com",
                      },process.env.JWTSECRET);
                    chai.request(app)
                    .patch('/api/v1/trips/1')
                    .set('token',token)
                    .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    });
                    done();
                    });
                    it('should return all trips for the admin',(done) =>{
                      const token =  jwt.sign({
                        id:1,
                        is_admin:true,
                        email: "kabundege@gmail.com",
                        },process.env.JWTSECRET)
                      chai.request(app)
                      .get('/api/v1/trips')
                      .set('token',token)
                      .send(trips)
                      .end((err, res) => {
                      expect(res.statusCode).to.equal(200);
                      });
                      done();
                      });

                      it('should return all trips for the user',(done) =>{
                        const token =  jwt.sign({
                          id:1,
                          is_admin:false,
                          email: "kabundege@gmail.com",
                          },process.env.JWTSECRET)
                        chai.request(app)
                        .get('/api/v1/trips')
                        .set('token',token)
                        .send(trips)
                        .end((err, res) => {
                        expect(res.statusCode).to.equal(200);
                        });
                        done();
                        });

                        it('should return token error',(done) =>{
                        const token = '' ;
                        chai.request(app)
                        .get('/api/v1/trips')
                        .set('token',token)
                        .send(trips)
                        .end((err, res) => {
                        expect(res.statusCode).to.equal(401);
                        });
                        done();
                        });

                        it('should return params must be a number',(done) =>{
                          const token = '' ;
                          chai.request(app)
                          .get('/api/v1/trips/sdfghj')
                          .set('token',token)
                          .send(trips)
                          .end((err, res) => {
                          expect(res.statusCode).to.equal(401);
                          });
                          done();
                          });   
           it('should return invalid params',(done) =>{
                            const token =  jwt.sign({
                              id:1,
                              is_admin:false,
                              email: "kabundege@gmail.com",
                              },process.env.JWTSECRET)
                            chai.request(app)
                            .get('/api/v1/trips/1456')
                            .set('token',token)
                            .send(trips)
                            .end((err, res) => {
                            expect(res.statusCode).to.equal(404);
                            });
                            done();
                            });
         

          });