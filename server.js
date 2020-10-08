const express = require('express')

const applicationRoute = require('./routes/application')
const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
})



app.use('/', express.static(__dirname + '/front-end'));

app.use(express.json());
app.use('/application', applicationRoute);


var port = process.env.PORT || 3232;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}...`)});


module.exports = app;