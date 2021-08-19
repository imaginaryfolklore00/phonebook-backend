require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const Person = require('./models/person')

morgan.token('body', req => JSON.stringify(req.body))

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(morgan('tiny'))
app.use(morgan(':body'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(result => {
    result.forEach(person => {
      res.json(person)
    })
    mongoose.connection.close()
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
    mongoose.connection.close()
  })
})

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>
         <p>${date}</p>`
              )
  })

// app.delete('/api/persons/:id', (req, res) => {
//   const id = Number(req.params.id)
//   persons = persons.filter(person => person.id !== id)

//   res.status(204).end()
// })


app.post('/api/persons', (req, res) => {
  const body = req.body

  if (body.content === undefined) {
    return res.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedperson => {
    res.json(savedperson)
    mongoose.connection.close()
  })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})