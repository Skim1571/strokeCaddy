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
app.use(express.urlencoded({extended: false}))


//Controllers
const controller = require('./controllers/controller')



// Routes
app.get('/games/:id', controller.getSpecificCourse)
app.post('/newcourse', controller.createCourseDetails)
app.get('/newgame', controller.getCourse)
app.post('/newgame', controller.createGame)




// Connection
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})