import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person'
//import styled from 'styled-components';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red':'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;

//       &:hover {
//         background-color: ${props => props.alt ? 'salmon':'lightgreen'};
//         color: black;
//       }
//   `

class App extends Component {
    state = {
    persons: [
      {id: '1', name: 'Aman', age: 20},
      {id: '2', name: 'Harsh', age: 19},
      {id: '3', name: 'Ishita', age: 21}
    ],
    showPersons: false
  }

   
  deletePersonHandler = (personIndex) => {

    // old approach
    // const persons = this.state.persons.slice();

    // new javascript es6 feature
    const persons = [...this.state.persons]; 
    persons.splice(personIndex,1)
    this.setState({persons:persons})
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id ;
    });

    // new approach
    const person = {
      ...this.state.persons[personIndex]
    };

    // old approach
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState( {persons:persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render(){

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor :'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = "";


    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name ={person.name} 
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;

      // style.backgroundColor = "red";
      // style[':hover'] =  {
      //   backgroundColor :'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red); // classes will be ['red']
    }

    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }



    return (

        <div className={classes.App}>
          <h1> React App </h1>
          <p className = {assignedClasses.join(' ')}> This is really working </p>
          <button className = {btnClass}
            onClick = {this.togglePersonsHandler}> 
            Toggle Name 
          </button>
        {persons}
        </div>
    );
  }
}

export default App;
