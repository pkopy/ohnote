import React, { Component } from 'react';
import './NotePanel.css';
import Icon from './Icon'
import InfoPanel from './InfoPanel'

class NotePanel extends Component {
  render () {
    const {showPanel} = this.props;
    const opacity = "0.5";
    return(
      <div className="note_panel" style={showPanel ? {opacity:"0.5"}:{opacity:"0"}}>
        
        <Icon 
          icon={'trash.svg'}
          left={0 + "px"} 
        />
        <Icon 
          icon={'color.svg'}
          left={26+"px"}
        />
        <Icon 
          icon={'share.svg'}
          left={50+"px"}
        />
      </div>
    )
  }
}

export default NotePanel