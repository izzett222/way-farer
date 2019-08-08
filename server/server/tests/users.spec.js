import { describe, it } from 'mocha';
import chai,{expect} from 'chai';
import chaiHttp from 'chai-http';
import app from '../../utilities/routes';
import dotenv from 'dotenv';
dotenv.config();
chai.use(chaiHttp);
chai.should();


before((done) =>{
const newUser = {
email : 'kabundege@gmail.com',
first_name : 'kabundege',
last_name :'christophe',
password: 'efotec',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
 expect(res.statusCode).to.equal(201);
});
done();
});


describe('USER Test',()=>{
it('should return account created', (done) =>{
const newUser = {
email : 'kabundege@gmail.com',
first_name : 'kabundege',
last_name :'christophe',
password: 'efotec',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
 expect(res.statusCode).to.equal(201);
 done();
});
});
it('should return email already exist', (done) =>{
const newUser = {
email : 'kabundege@gmail.com',
first_name : 'kabundege',
last_name :'christophe',
password: 'efotec',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
 expect(res.statusCode).to.equal(409);
});
done();
});
it('the email entered is incorrect', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: 'kwizera',
email: 'kabundegegmail.com',
password: 'christophe'
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return the password is required', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: 'kwizera',
email: 'kabundege@gmail.com',
password: '',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return the password is too small', (done) =>{
 const newUser = {
 first_name: 'kabundege',
 last_name: 'kwizera',
 email: 'kabundege@gmail.com',
 password: 'ch',
 };
 chai.request(app)
 .post('/api/v1/user/signup')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });

it('should return the first name,the last name and the password are required', (done) =>{
const newUser = {
first_name: '',
last_name: '',
email: 'kabundege@gmail.com',
password: '',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
}); 

it('should return the first name,the email and the password are required', (done) =>{
const newUser = {
first_name: '',
last_name: 'kwizera',
email: '',
password: '',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
}); 
it('should return the first name ,the last name and the password is required', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: '',
email: '',
password: '',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return both email and password are required', (done) =>{
 const newUser = {
 first_name: 'kabundege',
 last_name: 'kwizera',
 email: '',
 password: '',
 };
 chai.request(app)
 .post('/api/v1/user/signup')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });
 it('should return the first name is required', (done) =>{
 const newUser = {
 first_name: '',
 last_name: 'kwizera',
 email: 'kwizera@me.com',
 password: 'christophe',
 };
 chai.request(app)
 .post('/api/v1/user/signup')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });
 it('should return the first name,the last name and the email are required', (done) =>{
const newUser = {
first_name: '',
last_name: '',
email: '',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return the fields are empty, enter some info', (done) =>{
const newUser = [];
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
}); 
it('should return both first name and last name are required', (done) =>{
const newUser = {
first_name: '',
last_name: '',
email: 'kwizera@me.com',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
}); 

it('should return the last name is required', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: '',
email: 'kwizera@me.com',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
}); 

it('should return the last name is required', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: '',
email: 'kwizera@me.com',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return email is required', (done) =>{
const newUser = {
first_name: 'kabundege',
last_name: 'kwizera',
email: '',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/user/signup')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return enter your email and password', (done) =>{
 const newUser = {
 email: '',
 password: '',
 };
 chai.request(app)
 .post('/api/v1/auth/signin')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });
 it('should return enter password', (done) =>{
 const newUser = {
 email: 'kabundege@gmail.com',
 password: '',
 };
 chai.request(app)
 .post('/api/v1/auth/signin')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });
 it('should return enter your email ', (done) =>{
const newUser = {
email: '',
password: 'fghhgj0987fgh',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});

 it('should return email with invalid format', (done) =>{
 const newUser = {
 email: 'kwizerame.com',
 password: 'christophe',
 };
 chai.request(app)
 .post('/api/v1/auth/signin')
 .send(newUser)
 .end((err, res) => {
 expect(res.statusCode).to.equal(400);
 });
 done();
 });
 it('should return email not recognized', (done) =>{
const newUser = {
email: 'kwiz@me.com',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(403);
});
done();
}) 
it('should return invalipassword', (done) =>{
const newUser = {
email: 'kabundege@gmail.com',
password: '267snjb78',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(403);
});
done();
});
it('should return invalid password', (done) =>{
const newUser = {
email: 'christophe@gma@il.com',
password: '1234567890',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return email and password not recognized', (done) =>{
const newUser = {
email: 'kwize@me.com',
password: 'nm26598bpqwshdaadwq0m',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(403);
});
done();
});
it('should return invalid password', (done) =>{
const newUser = {
email: 'kabundege@gmail.com',
password: '1gh',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(400);
});
done();
});
it('should return invalid password', (done) =>{
const newUser = {
email: 'kabundege@gmail.com',
password: '123678kjhtdsdhgmkgs90',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(403);
});
done();
});

('should return login sussesful', (done) =>{
const newUser = {
email: 'kabundege@gmail.com',
password: 'christophe',
};
chai.request(app)
.post('/api/v1/auth/signin')
.send(newUser)
.end((err, res) => {
expect(res.statusCode).to.equal(200);
});
done();
});
 
})