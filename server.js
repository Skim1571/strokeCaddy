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
app.use(express.static(`${__dirname}/client/build`))


//Controllers
const controller = require('./controllers/controller')


// Routes
app.post('/newcourse', controller.createCourseDetails)
app.get('/allcourses', controller.getAllCourses)
app.get('/course/details/:courseId', controller.getCourseDetails)
app.delete('/course/details/:courseId', controller.deleteCourse)
app.put('/course/details/:courseId', controller.updateCourseDetails)

// Connection
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})