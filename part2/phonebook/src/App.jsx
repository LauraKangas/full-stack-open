import { useState } from 'react'

/*----- alla Filter, PersonForm ja Persons komponentit, erillään App komponentista ------*/

const Filter = (props) => {
    return (
      <div>
        filter shown with <input value={props.search} onChange={props.handleSearchChange} />
      </div>
    )
  }

  const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }
  
  const Persons = (props) => {
    return (
      <ul>
        {props.filteredPersons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    )
  }

/* -------------------------------------- */

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value) 
  }

   /* ------------------------------------- */
 
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  /* -------------------------------------- */

  const addPerson = (event) => {
    event.preventDefault()
    const doesNameExist = persons.some(person => person.name === newName)
    if (doesNameExist) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  /* -------------------------------------- */

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        search={search}
        handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}/>
      <h3>Numbers</h3>
      <Persons 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App