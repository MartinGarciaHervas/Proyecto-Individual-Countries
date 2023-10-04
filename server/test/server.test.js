const server = require('../src/server')
const session = require('supertest')

const agent = session(server)

describe('Test de rutas', ()=>{
    describe('GET /countries', ()=>{

        it('Debe traer todos los paises de la base de datos', async()=>{
            const response = await agent.get('/countries');
            expect(response.body.length).toEqual(250)
        })
    })

    describe('GET /countries/:idPais', ()=>{

        it('Responde con status: 200', async ()=>{
            await agent.get('/countries/ARG').expect(200)
        })

        it('Responde un objeto con las propiedades "activities" y "pais"', async ()=>{
            const {body} = await agent.get('/countries/ARG');
            expect(body).toHaveProperty("pais")
            expect(body).toHaveProperty("activities")
        })

        it('la propiedad "pais", a su vez, debe contener las propiedades: "area" "capital" "continent" "flag" "id" "name" "population" "subregion"', async ()=>{
            const response = await agent.get('/countries/ARG');
            expect(response.body.pais).toHaveProperty("area", "capital", "continent", "flag", "id", "name", "population", "subregion")
        })

        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/countries/ARGENTINA').expect(500);
        })
    })

    describe('POST /activities', ()=>{

        it('Responde con status: 200', async ()=>{
            await agent.post('/activities').send({
                name:'Hicking', 
                difficulty:4, 
                duration:10, 
                season:'Summer', 
                CountryId:['ARG']
            }).expect(200)
        })

        it('Una actividad debe poder ser relacionada a varios paises', async()=>{
            await agent.post('/activities').send({
                name:'Hicking', 
                difficulty:4, 
                duration:10, 
                season:'Summer', 
                CountryId:['ARG', 'KEN', 'RUS']
            }).expect(200)
        })

        it('Solo debe aceptar como season a "Summer", "Winter", "Autumn", "Spring"', async()=>{
            await agent.post('/activities').send({
                name:'Hicking', 
                difficulty:4, 
                duration:10, 
                season:'Friday', 
                CountryId:['ARG', 'KEN', 'RUS']
            }).expect(500)
        })
    })
})