
import {pets} from "./constants/data.js"
import pet from "./model/pet-schema.js";


const DefaultData= async()=> {

    try{
         await  pet.insertMany(pets);
            console.log('Data imported Successfully');
    }
    catch(error)
    {
        console.log('Error while inserting default data', error.message);
    }

}

export default DefaultData;