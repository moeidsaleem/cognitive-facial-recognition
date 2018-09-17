let express = require('express');
let bodyParser= require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname +'/dist'));

app.listen(4200, ()=>{
    console.log(`running on 4200`)
})