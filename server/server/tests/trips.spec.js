import app from '../../utilities/routes';
import chaiHttp from 'chai-http';
import chai,{expect} from'chai';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
chai.use(chaiHttp);
chai.should();

const trips = [{
    seating_capacity : 50,
bus_license_number : "RAE234A",
origin : "kigali", 
destination : "kibuye",
trip_date : "10032019",
fare : 5000,
status : true
}]
describe('trips test', ()=>{
  it('should return all trips for the admin',(done) =>{
const token =  jwt.sign({
  id:1,
  is_admin:true,
  email: "kabundege@gmail.com",
  },process.env.JWTSECRET)
chai.request(app)
.get('/api/v1/trips')
.set('x-auth-token',token)
.send(trips)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
});
it('should return all trips for the admin',(done) =>{
    const token =  jwt.sign({
      id:1,
      is_admin:false,
      email: "kabundege@gmail.com",
      },process.env.JWTSECRET)
    chai.request(app)
    .get('/api/v1/trips')
    .set('x-auth-token',token)
    .send(trips)
    .end((err, res) => {
    expect(res.statusCode).to.equal(200);
    });
    done();
    });
});  