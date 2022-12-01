const express = require('express')
const InfoRoutes = require('./routes/InfoRoutes')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json());

app.use('/', InfoRoutes)



app.listen(process.env.PORT || 4000, ()=>console.log('Server rodando na porta 4000'))