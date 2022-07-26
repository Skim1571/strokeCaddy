const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db');

const app = express()

// MiddleWare
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


//Controllers
const controller = require('./controllers/controller')



// Routes
app.get('/game/:id', controller.getSpecificCourse)
app.post('/newgame', controller.createCourseDetails)




// Connection
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})