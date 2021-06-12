const materials = require('../models/materials');

async function price(){
    try{
        let price = await materials.findAll({
            
        })
        //console.log(price)
        return{
            status:200,
            prices: price
        }
    }catch(error){
        return{
            status:204
        }
    }
}
async function priceOfOne(element){
    try{
        if(!element){
            throw new Error;
        }
        let prices = await materials.findOne({
            attributes: ['materials', 'price'],
            where:{
                materials: element.material
            }
        })
        return{
            status:200,
            prices: prices
        }
    }catch(error){
        console.log(error);
        return{
            status:204
        }
    }
}
module.exports = {price, priceOfOne};