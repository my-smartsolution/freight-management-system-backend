const { subscriptions } = require("../model")
const successResponce = require("../responses/successResponce")

const findOneService = async (Model , filter)=>{
    try {
        const data = await Model.findOne({where : filter})
        console.log("findOneService data >>>>>>> , " , data );
        return data 
        ?  data
        :  false
    } catch (error) {
        console.log("findOneService error >>>>>>> , " , error );
    }

}

const findByPkService = async(Model , Id) =>{
    try {
        const data = await Model.findByPk(Id)
        console.log("findByPkService data >>>>>>> , " , data );
        return data 
        ?  data
        :  false
    } catch (error) {
        console.log("findByPkService error >>>>>>> , " , error );
    }
} 

const findAllService = async (Model , filter) =>{
    try {
        const data = await Model.findAll({where : filter})
        console.log("findAllService data >>>>>>> , " , data );
        return data.length > 0 
        ?  data
        :  false
    } catch (error) {
        console.log("findAllService error >>>>>>> , " , error );
    }
}

module.exports = {findOneService , findByPkService , findAllService}