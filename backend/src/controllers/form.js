const { beforeDestroy } = require('../models/form');
const form = require('../models/form');

async function sendForm (data){
    try{
        if(!data){
            throw new Error;
        }
        let checkEmail = /[a-zA-Z0-9_\.]+[_\.]*@[a-z]*\.[a-z]{2,5}/.test(data.email);
        if(checkEmail == false){
            return{
                status: 204,
                message: "it isn't a valid email"
            }
        }
        form.create({
            name: data.name,
            email:data.email,
            address:data.address,
            description:data.description,
            glass: data.glass || false,
            iron: data.iron || false,
            paper: data.paper || false,
            plastic: data.plastic || false,
        })
        return{
            status:200,
            message:"information send"
        }
    }catch(error){
        console.log(error);
        return{
            status:204
        }
    }

}
module.exports = sendForm;