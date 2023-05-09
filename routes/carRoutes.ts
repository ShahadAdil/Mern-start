// Denna fil hantera alla våra rutter med våra bilar
//import express då vi kommer arbeta routes som ingår
import express, {Request,Response} from 'express'
//importera
import {createCar}  from '../db/carController';



//Router ska använda med Express
const router = express.Router()



//Skaper en handler för routers
router.get('/',(req:Request,res:Response)=>{
    res.send('Get Cars')
})


//Skapar en post till servern
router.post('/car', async (req:Request, res:Response) => {
    const createdCar = await createCar(req.body)
    res.status(201).json(createdCar)
})




export default router
