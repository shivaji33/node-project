const app = require('express')();
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// CORS Setup
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
   next();
});
app.post('/api/users',((req, res, next) => {
    const users = req.body;
    res.status(201).json({
        message: 'Users added successfully',
        users
    });
}));

app.get('/api/users',((req, res, next) => {
    const users = [{
        id: 1,
        name: 'shivaji'
    },{
        id: 2,
        name: 'naveen'
    }]
    res.status(200).json({
        message: 'Users fetched successfully',
        users
    });
}));


module.exports = app;
