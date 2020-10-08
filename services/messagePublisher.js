// function to send data to rabbit 

exports.publishToChannel = function(channel, {routingKey,exchangeName,data}){
    return new Promise((resolve,reject)=>{
        channel.publish(exchangeName,routingKey,Buffer.from(JSON.stringify(data),'utf-8'),
        {persistent : true},function(err,ok){
            if(err){
                return reject(err);
            }
            resolve("Succesfully Sent");
        })
    });
}