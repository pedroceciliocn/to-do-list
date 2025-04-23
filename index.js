//import express from 'express';
require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const routes = require("./routes/routes")
const connectToDb = require("./database/db")

connectToDb();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

