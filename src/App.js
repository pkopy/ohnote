import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu'
import './App.css';
import Note from './Note'
import Button from './Button'
import Trash from './Icon'

class App extends Component {
  state = {
    notes : []
  }

  addNote = (note) => {
    let notes = this.state(notes);
    notes.push(note);
    this.setState({notes})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="notes_container">
          <Note 
            note={{backgroundColor:'red'}}
          />
          <Note />
          <Note 
            note={{backgroundColor:'red'}}
          />
          <Note />
          <Note 
            note={{backgroundColor:'red'}}
          />
          <Note />

        </div>
        

        <Button 
          text={'Add note'}
          className={'green'}
        />
      </div>
    );
  }
}

export default App;
