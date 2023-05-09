
//impoterar vår Carmodel som ni exporterade från carSchema.ts filen för
//att "arbeta" med vår collection, dvs sätta in data eller liknade
import CarModel, { carType } from "./models/carSchema";


//Skapa olika funktioner som hanterar alla meoder som vi använder
//GET,POST osv
//Const newCar = Skapar en ny instans av carModel med det angivna car-objektet
//await newCar.save = Sparar den ny bilen i databasen med hjälp av save--metoden på newCar
//return newCar = retunerar den ny bilen
//Denna funktion kan använda för att lägga till nya bilar i min database genom att skicka in ett car-object
//Önskade egenskapa
export const createCar = async (car:carType)=>{
    const  newCar = new CarModel(car);
    await newCar.save()
    return newCar
}


//skapar en funktionalitet för att hämta bilar i vår controller
export const getCars = async () => {
    const Cars = await CarModel.find()
    return Cars;
}


//Delete

//Find på en annan adress tex /cars/1
