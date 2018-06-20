const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const should = chai.should();

const baseUrl = 'http://localhost:3000/v1/users/';

const emptyArray = [];
const emptyUser = {};
const invalidUser = {
    "name": "Wagner",
    "surname": "de Andrade Perin"
};
const validUser = {
    "name": "Wagner",
    "surname": "de Andrade Perin",
    "username": "wagnerperin",
    "email": "wagnerperin@gmail.com",
    "password": "1234"
};

describe('### USER API TEST (/v1/users) ###', () => {
    it('##ERROR: Post request with empty body request', (done) => {
        chai.request(baseUrl)
            .post('')
            .end((error, response) => {
                expect(response).to.have.status(400);
                expect(response).to.be.json;
                expect(response.body.errorCode).to.be.equal('users-1');
                done();
            });
    });
    it('##ERROR: Post request with empty array in body request', (done) => {
        chai.request(baseUrl)
            .post('')
            .send(emptyArray)
            .end((error, response) => {
                expect(response).to.have.status(400);
                expect(response).to.be.json;
                expect(response.body.errorCode).to.be.equal('users-1');
                done();
            });
    });
    it('##ERROR: Post request with empty user object in body request', (done) => {
        chai.request(baseUrl)
            .post('')
            .send(emptyUser)
            .end((error, response) => {
                expect(response).to.have.status(400);
                expect(response).to.be.json;
                expect(response.body.errorCode).to.be.equal('users-1');
                done();
            });
    });
    it('##ERROR: Post request with invalid user object in body request', (done) => {
        chai.request(baseUrl)
            .post('')
            .send(invalidUser)
            .end((error, response) => {
                expect(response).to.have.status(400);
                expect(response).to.be.json;
                expect(response.body.errorCode).to.be.equal('users-2');
                done();
            });
    });
    it('##SUCCESS: Post request with valid user object in body request', (done) => {
        chai.request(baseUrl)
            .post('')
            .send(validUser)
            .end((error, response) => {
                expect(response).to.have.status(201);
                expect(response).to.be.json;
                expect(response.body.user).to.have.property('link');
                expect(response.body.user).to.not.have.property('password');
                done();
            });
    });
});