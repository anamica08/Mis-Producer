const channel = require("../services/messagePublisher");
const constant =  require("../constants/constants")
require('dotenv').config();
const amqp = require('amqplib');
const apiFunctions = {
    publishMessage: async function(req,res){

        //take request body and send it to rabbit
        const applicantData = req.body;
        console.log("Request Body:",req.body);
        const messageQueueConnectionString = process.env.CLOUDAMQP_URL;
         // connect to Rabbit MQ and create a channel
        let connection = await amqp.connect(messageQueueConnectionString);
        let ch = await connection.createConfirmChannel();
        await channel.publishToChannel(ch,{routingKey:constant.ROUTING_KEY,exchangeName:constant.EXCHANGE_NAME,data:applicantData})
        .then((message)=>{
            console.log(message);
            res.status(201).send();
        })
        .catch((message)=>{
            console.log("ERROR OCCURED:::::::::::",message);
        });
        
    }
}

module.exports = apiFunctions;