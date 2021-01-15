import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    text: 'Lorem Ipsum'
  }

  changeTextHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  removeCharacterHandler = (index) => {
    const charsArray = [...this.state.text];
    charsArray.splice(index, 1);
    this.setState({
      text: charsArray.join("")
    })
  }

  mountCharBoxes = () => {
    return ( 
    <div>
      {
        [...this.state.text].map((char, index) => {
          return <CharComponent letter={char} click={() => this.removeCharacterHandler(index)}/>
        })
      }
    </div>);
    
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler} value={this.state.text}/>
        <p>{this.state.text}</p>
        <ValidationComponent length={this.state.text.length}/>
        {this.mountCharBoxes()}
      </div>
    );
  }
}

export default App;
