require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

morgan.token('body', req => JSON.stringify(req.body))

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(morgan('tiny'))
app.use(morgan(':body'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(person => {
    res.json(person)
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (body.name === undefined || body.number === undefined) {
    return res.status(400).json({ error: 'name or number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})