const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length === 4) {
  console.log('Error: name or number of the person is missing')
  process.exit(1)
}

if (process.argv.length > 5) {
  console.log('Error: too many arguments')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://sword:${password}@cluster0.nqa9p.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
  const nameInput = process.argv[3]
  const numberInput = process.argv[4]

  const person = new Person({
    name: nameInput,
    number: numberInput,
  })

  person.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}