const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db');
const { Game } = require('./models');

const app = express()

// MiddleWare
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


// Routes

app.get('/Game', async (req, res) => {
  const viewGame = await Game.findById({})
  res.json(viewGame)
})

app.get('/Game/:id', async (req, res) => {
  try {
    const { id } = req.params
    const viewgame = await Game.findById(id)
    if (!viewgame) throw Error('Game not found')
    res.json(viewgame)
  } catch (e) {
    console.log(e)
    res.send('Game not found!')
  }
})

app.post('/Game', async (req, res) => {
  const createGame = await Game.create(req.body)
  res.json(createGame)
})


// Connection
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})