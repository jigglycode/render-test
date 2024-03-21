const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Mongooooooose',
//   important: true,
// })

// note.save().then(() => {
//   console.log('note saved!')
// })

Note.find({important: true }).then(result => {
  result.forEach(note => console.log(note))
  mongoose.connection.close()
})
