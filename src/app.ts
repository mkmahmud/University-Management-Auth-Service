
// import express = require('express')
import express from "express";
const app  = express()
const port =   5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
