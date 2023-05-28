
// import express = require('express')
import express, { Application, Request, Response } from "express";
import cors from "cors";
const app : Application = express()
const port = 5000;

// Cors
app.use(cors())

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Working ')
})

export default app
