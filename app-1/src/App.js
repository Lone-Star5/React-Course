import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
    persons: [
      {name: 'Aman', age: 20},
      {name: 'Ankit', age: 19},
      {name: 'Ishita', age: 21}
    ]
  }

   
  switchNameHandler = (newName) => {
    // You cannot mutate state like this
    // this.state.persons[1].name = "hacked"
  
    this.setState( {
      persons:[ 
        {name: newName, age: 20},
        {name: 'Harsh', age: 19},
        {name: 'Ishita', age: 20}
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons:[ 
        {name: 'Aman', age: 20},
        {name: event.target.value, age: 19},
        {name: 'Ishita', age: 20}
      ],
      showPersons: false
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age} 
          />
          <Person 
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click = {this.switchNameHandler.bind(this, 'Kaps')} 
            changed = {this.nameChangeHandler} >
            My Hobbies: Gaming 
           </Person>
          <Person 
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age} > 
          </Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1> React App </h1>
        <button 
          style = {style}
          onClick = {this.togglePersonsHandler}> 
          Switch Name 
        </button>
      {persons}
      </div>
    );
  }
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
