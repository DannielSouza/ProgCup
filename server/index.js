//IMPORTS
  const express = require('express')
  const InfoRoutes = require('./routes/InfoRoutes')
  const cors = require('cors')

//CONFIGS
  const app = express()
  app.use(cors());
  app.use(express.json());

//ROUTES
  app.use('/', InfoRoutes)


app.listen(4000, ()=>console.log('Servidor ligado!'))