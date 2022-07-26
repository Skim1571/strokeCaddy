const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db');
const { Game, Course, Stroke, Users } = require('./models');

const app = express()

// MiddleWare
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


//Controllers
const controller = require('./controllers/controller')



// Routes

app.get('/games/:id', controller.getCourse)

app.post('/newgame', controller.createCourseDetails)

// app.get('/games/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const viewgame = await Game.findById(id)
//     if (!viewgame) throw Error('Game not found')
//     res.json(viewgame)
//   } catch (e) {
//     console.log(e)
//     res.send('Game not found!')
//   }
// })

// app.post('/games', async (req, res) => {
//   const createGame = await Game.create(req.body)
//   res.json(createGame)
// })


// Connection
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})