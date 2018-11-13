import React, { Component } from 'react';
import './Note.css'
import NotePanel from './NotePanel'
import InfoPanel from './InfoPanel'

class Note extends Component {
  state = {
    showPanel : false
  }
  setShowPanel = () => {
    console.log('xxx')
    let showPanel = !this.state.showPanel
    this.setState({showPanel})
  }
  render () {
    const {note} = this.props;
    return(
      <div className="note" style={note && {backgroundColor:note.backgroundColor}} onMouseOver={this.setShowPanel} onMouseOut={this.setShowPanel}>
        {/* <InfoPanel /> */}
        <NotePanel 
          showPanel={this.state.showPanel}
        />
      </div>
    )
  }
}

export default Note