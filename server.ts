//Steg 1
//importera paket
//importera express
import express, {Request,Response,json} from 'express'
//importera router 'mina rutter'
import carRouter from './routes/carRoutes'
//Importera alla metoder från vår carController
import { getCars,createCar } from './db/carController'


//impotera mongoose och connect funktionen och anväder den med min mongoDB
import {connect} from 'mongoose'
//Skaper en anslutning till MongoDB och jag upprättat en databas
connect('mongodb://localhost:27017/shahad')


//Använder variable app för att arbeta med express
const app = express()
// const port  = 8000


//Steg 2
//Använda middleware
//använda json, detta middleware är till för att tolka inkommande förfrågningar
app.use(json())
//Använda router i vår server
app.use('/car',carRouter)


//Steg 3
//Handlers(GET,PUT,DELETE,POST,etc)
app.get('/', (req:Request , res:Response ) => {
    res.send('Ja detta fungerar')

})

//Get cars från '/car' rutten
app.get('/car', async (req:Request, res:Response) => {
    const cars = await getCars()
    res.json(cars)
})


/* Den här rutten kommer att lyssna efter POST förfrågningar på port 8000 vid /car endpoint och
använda createCar funktionen för att skapa en ny bil med hjälp av data som skickas i förfrågnings bodyn, dvs
req.body
Se till att definiera funktionen createCar och importera den till din serverfil */
app.post('/car', async (req:Request, res:Response) => {
    const newCar = req.body
    const createdCar = await createCar(newCar)
    res.json(createdCar)
})

//Steg 4
//Måste lyssna på porteen för att serven ska fungera och hantera nätverksförfrågaingar
app.listen(8000,()=>{
console.log('Server is running')
})
