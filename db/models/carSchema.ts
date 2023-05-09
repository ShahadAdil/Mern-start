//Importerar Schema och models funktionaliteten från mongoose
import {Schema, model} from 'mongoose'

//Pga av Typescript så behöver vi arbeta med interface, detta bestämmer
//datatypen
//Vi exporterar denna
//Obs små bosktäver krävs vid datatyps definition i Typescript, däremot stor bokstav när
//bestämmer typer i Native JS (String, Boolean osv)
export interface carType {
    model:string,
    brand:string
}

//Skapar Schema (motsvarande table i SQL) dennan del har med mongoose att göra
//vi arbetar med typescript därav <cartype> nedan
const schema = new Schema<carType>({
model: {type: String, required:true},
brand: {type: String, required:true}
})

//Förklara att detta är en mongoose model
const CarModel = model<carType>('Car', schema)

export default CarModel
