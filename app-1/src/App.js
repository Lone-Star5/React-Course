import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props =>  {
    const [ personsState, setPersonsState] = useState({
      persons: [
      {name: 'Aman', age: 20},
      {name: 'Ankit', age: 19},
      {name: 'Ishita', age: 21}
      ]
    })

    console.log(personsState);
    const switchNameHandler = () => {
    // You cannot mutate state like this
    // this.state.persons[1].name = "hacked"
  
    setPersonsState( {
      persons:[ 
      {name: 'Harsh', age: 20},
      {name: 'Ankit', age: 19},
      {name: 'Ishita', age: 30}
    ]})
  }

    return (
      <div className="App">
        <h1> React App </h1>
        <button onClick = {switchNameHandler}> Switch Name </button>
        <Person 
          name = {personsState.persons[0].name} 
          age = {personsState.persons[0].age} 
        />
        <Person 
          name = {personsState.persons[1].name} 
          age = {personsState.persons[1].age} >
          My Hobbies: Racing 
        </Person>
        <Person 
          name = {personsState.persons[2].name} 
          age = {personsState.persons[2].age} > 
        </Person>
       </div>
    );
}

export default App;


// state = {
//     persons: [
//       {name: 'Aman', age: 20},
//       {name: 'Ankit', age: 19},
//       {name: 'Ishita', age: 21}
//     ]
//   }

//   switchNameHandler = () => {
//     // You cannot mutate state like this
//     // this.state.persons[1].name = "hacked"
  
//     this.setState( {
//       persons:[ 
//       {name: 'Harsh', age: 20},
//       {name: 'Ankit', age: 19},
//       {name: 'Ishita', age: 30}
//     ]})
//   }
