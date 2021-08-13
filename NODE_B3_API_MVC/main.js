const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const studentRoute = require("./route/studentRoute");
const indexRoute = require("./route/index");

app.use('/student',studentRoute);
app.use('/',indexRoute);



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))