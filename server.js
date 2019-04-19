var express = require('express'),
    app = express(),
    cors = require('cors')
port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Pedido = require('./src/models/pedidoModel'), //created model loading here
    Usuario = require('./src/models/usuarioModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/quick-deliver", { useNewUrlParser: true }).then(
    (res) => {
        console.log("Connected to Database Successfully.")
    }
).catch(() => {
    console.log("Conntection to database failed.");
});
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/pedidoRoutes'); //importing route
routes(app); //register the route

var routes = require('./src/routes/usuarioRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port, function () {
    console.log("Live at Port " + port);
});
