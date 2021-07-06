import React, {useState} from 'react'
import Course from './components/Course'
import Note from './components/Note'




const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
 {/*  const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        excercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        excercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        excercises: 11,
        id: 4
      }
    ]
  },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing', 
          excercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          excercises: 7,
          id: 2
        }
      ]
    }
  ] */}

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input 
        value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
     {/* <Course course = {courses} /> */}
    </div>
  )

}


export default App