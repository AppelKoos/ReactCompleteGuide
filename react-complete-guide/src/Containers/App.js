import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  //constructor lifecycle
  constructor(props) {
    super(props);
    console.log('1.0[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asf1', name: 'Johan', age: 28 },
      { id: 'dd2', name: 'Elias', age: 29 },
      { id: 'was3', name: 'Sam', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  }

  //getDerivedStateFromProps lifecycle
  static getDerivedStateFromProps(state, props) {
    console.log('2.0[App.js] getDerivedStateFromProps')
    return state;
  }
  //componentDidMount lifecycle
  componentDidMount() {
    console.log('4.0[App.js] componentDidMount')
  }
  //shouldComponentUpdate lifecycle
  shouldComponentUpdate(nextProps, nextState) {
    console.log('2.1[App.js] shouldComponentUpdate');
    return true;
  }
  //componentDidUpdate lifecycle
  componentDidUpdate() {
    console.log('5.1[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const personCopy = { ...this.state.persons[personIndex] };
    personCopy.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = personCopy;

    this.setState((prevState, props) => {
      return {
        persons: personsCopy, changeCounter: prevState.changeCounter + 1
      };
    });
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }
  //renderlifecycle
  render() {
    console.log('3.0[App.js] render');

    //show persons
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      );
    }

    return (
      <Aux>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
        {React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello there 2'))}
      </Aux>

    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hello there 2'));
  }
}

export default withClass(App, classes.App);
