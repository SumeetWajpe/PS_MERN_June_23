// var express = require('express');
import express from "express";
import path from "path";

import productsRouter from "./routes/products.route";


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/products", productsRouter);

module.exports = app;
