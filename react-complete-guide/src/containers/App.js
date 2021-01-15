import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import AuthContext from '../context/auth-context';

class App extends Component {

  state = {
    persons: [
      {
        id: '1', name: 'Felipe', age: 32
      },
      {
        id: '2', name: 'Chayanne', age: 30
      }
    ],
    showPersons: false,
    authenticated: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  showPersonsList = () => {
    if (this.state.showPersons) {
      return (<Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}/>);
    }
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    return (
        <div className={classes.App}>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
            <Cockpit 
              title={this.props.appTitle}
              persons={this.state.persons} 
              toggle={this.togglePersonsHandler}
              showPersons={this.state.showPersons}/>
            {this.showPersonsList()}
          </AuthContext.Provider>
        </div>
    );
  }
}



export default App;
