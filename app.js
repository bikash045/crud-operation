const express = require('express');
const app = express();
const port = process.env.port||8000;

app.listen(port);
const bodyParser = require('body-parser');
const userRoute = require("./routes/user.route");


//middleware routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api/crud",userRoute);