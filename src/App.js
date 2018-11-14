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
        
          <Note 
            note={{backgroundColor:'#fff'}}



            
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

        
        {/* <Trash 
        icon={'trash.svg'}
        /> */}

        <Button 
          text={'Add note'}
          className={'green'}
        />
      </div>
    );
  }
}

export default App;
