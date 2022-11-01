const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../src/app')
const models = require('../src/models')

const api = supertest.agent(app)

describe('api', () => {

    beforeEach(async () => {
        await models.Session.deleteMany({username: 'bobalooba'})
    })

    test('make a  day', async () => {

        let program
        let token

        await api.post('/auth/register')
            .send({username: 'bobalooba'})
            .expect(200)
            .expect((response) => {
                expect(response.body.status).toBe('success')
                expect(response.body.username).toBe('bobalooba')
                expect(response.body.token).not.toBeNull()
                token = response.body.token
            })

        await api.post('/api/programs')
            .set('Authorization', `Basic ${token}`)
            .send({title: "A test program"})
            .expect(200)
            .then(response => {
                program = response.body
            })

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "A test day"})
            .expect(200)
            .expect(response => {
                const val = response.body
                if (!val.status == 'success') throw new Error(`Expected status "success" but got ${val.status}`)
            })
    })

    /* 
    test('make a day - not authorised', async () => {

        await api.post('/api/programs')
            .send({title: "A test day"})
            .expect(401)
    })
    */
   
    test('get list of days', async () => {

        let program
        let token 

        await api.post('/auth/register')
            .send({username: 'bobalooba'})
            .expect(200)
            .expect((response) => {
                expect(response.body.status).toBe('success')
                expect(response.body.username).toBe('bobalooba')
                expect(response.body.token).not.toBeNull()
                token = response.body.token
            })

        await api.post('/api/programs')
            .set('Authorization', `Basic ${token}`)
            .send({title: "A test program"})
            .expect(200)
            .then(response => {
                program = response.body
            })

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "1 A test day"})
            .expect(200)

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "2 Another test day"})
            .expect(200)

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "3 and another"})
            .expect(200)
            
        await api.get(`/api/programs/${program.id}`) 
            .set('Authorization', `Basic ${token}`)
            .expect(200)
            .expect(response => {
                const val = response.body 
                if (!val.days) throw new Error('expected programs in response')
            }) 
            
    })


   
    test('get a day', async () => {

        let program
        let day
        let token 

        await api.post('/auth/register')
            .send({username: 'bobalooba'})
            .expect(200)
            .expect((response) => {
                expect(response.body.status).toBe('success')
                expect(response.body.username).toBe('bobalooba')
                expect(response.body.token).not.toBeNull()
                token = response.body.token
            })

        await api.post('/api/programs')
            .set('Authorization', `Basic ${token}`)
            .send({title: "A test program"})
            .expect(200)
            .then(response => {
                program = response.body
            })

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "1 A test day"})
            .expect(200)
            .then(response => {
                day = response.body
            })

        await api.get(`/api/programs/${program.id}/${day.id}`) 
            .set('Authorization', `Basic ${token}`)
            .expect(200)
            .expect(response => {
                const val = response.body 
                if (!val.text) throw new Error('expected text in response')
            }) 
            
    })


    /*
    test('get list of days - not authorised', async () => {

        await api.get('/api/days')
            .expect(401)
    })

    */

    test('delete a  day', async () => {

        let program
        let day
        let token 

        await api.post('/auth/register')
            .send({username: 'bobalooba'})
            .expect(200)
            .expect((response) => {
                expect(response.body.status).toBe('success')
                expect(response.body.username).toBe('bobalooba')
                expect(response.body.token).not.toBeNull()
                token = response.body.token
            })

        await api.post('/api/programs')
            .set('Authorization', `Basic ${token}`)
            .send({title: "A test program"})
            .expect(200)
            .then(response => {
                program = response.body
            })

        await api.post(`/api/programs/${program.id}`)
            .set('Authorization', `Basic ${token}`)
            .send({text: "A test day"})
            .expect(200)
            .expect(response => {
                day = response.body
                if (!day.status == 'success') throw new Error(`Expected status "success" but got ${day.status}`)
            })

        /* now try to delete it */
        await api.delete(`/api/programs/${program.id}/${day.id}`)
            .set('Authorization', `Basic ${token}`)
            .expect(200)
            .expect({'status': 'success'})

    })

    afterAll(() => {
        mongoose.connection.close()
    })

})