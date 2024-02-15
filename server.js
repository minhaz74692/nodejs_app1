// console.log('I am in express');

const express = require("express");
const { errorHandler } = require("./errorHandler/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`this is running in port : ${port}`);
})