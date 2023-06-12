
import Pet from '../model/pet-schema.js';


export const getPets =async(request,response)=> {
    try{
        const pet= await Pet.find({});

        response.status (200).json(pet);

    }
    catch(error){
        response.status(500).json({message: error.message});

    }

}

export const getPetById =async(request, response)=>{
    try{
        const id=request.params.id;
      const pet =await  Pet.findOne({ 'id': id})

      response.status(200).json(pet);
    }
    catch(error)
    {
        response.status(500).json({message: error.message})

    }
}
