const express = require("express");
const connectdb = require("./db/dbConnection");
const router  = require("./routes/V1");

const app = express();

app.listen(8080, () => {
    console.log("Hy nodemon....!!!");
});

app.use(express.json());

app.use("/V1" , router);

connectdb();
