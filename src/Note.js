import React, { Component } from 'react';
import './Note.css'
import NotePanel from './NotePanel'
import InfoPanel from './InfoPanel'

class Note extends Component {
  state = {
    showPanel : false
  }
  setShowPanel = (e) => {
    // console.log('xxx')
    let showPanel = !this.state.showPanel
    this.setState({showPanel})
    // e.target.addEventListener('mousedown', this.dragElement)
  }
  test = (e) => {
    e.target.addEventListener('mousedown', this.dragElement)

  }
  dragElement = (e) => {
    let clickX;
    let clickY ;
    let posX = e.clientX;
    let posY  = e.clientY;
    let notes = document.querySelectorAll('.note')
    console.log(e.target)
    // console.log(pos1,pos2,pos3, pos4)
    console.log('OLeftX: ' + e.layerX, 'OLeft: ' + e.target.offsetLeft, 'posX: ' + posX)
    
    // pos3 = e.clientX;
    // pos4 = e.clientY;
    // e.target.style.top = (posX ) + "px";
    clickX = (e.offsetX);
    console.log(clickX)
    console.log(e.target.style.left)
    e.target.addEventListener('mousemove', this.dragMove)
    e.target.addEventListener('mouseup', this.upDrag)
    
    // function dragMouseDown(e) {
    //   e = e || window.event;
    //   e.preventDefault();
    //   // get the mouse cursor position at startup:
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   document.onmouseup = closeDragElement;
    //   // call a function whenever the cursor moves:
    //   document.onmousemove = elementDrag;
    // }
    // e.target.onmousemove = dragMouseDown;


    // function elementDrag(e) {
    //   e = e || window.event;
    //   e.preventDefault();
    //   // calculate the new cursor position:
    //   pos1 = pos3 - e.clientX;
    //   pos2 = pos4 - e.clientY;
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   // set the element's new position:
    //   e.target.style.top = (e.target.offsetTop - pos2) + "px";
    //   e.target.style.left = (e.target.offsetLeft - pos1) + "px";
    // }
  
    // function closeDragElement() {
    //   // stop moving when mouse button is released:
    //   document.onmouseup = null;
    //   document.onmousemove = null;
    // }
      
  }

  
  dragMove = (e) => {
    let pos1 = e.offsetX;
    // let pos2 = 0;
    let pos3 = e.offsetX;
    // let pos4 = e.clientY;
      pos1 = pos1-pos3;
    //   pos2 = pos4 - e.clientY;
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;

    console.log(e.target.offsetLeft, e.clientX, e.offsetX, e.clientX - e.target.offsetLeft)
    e.target.style.left = (e.clientX - (e.clientX - e.target.offsetLeft-2)) + "px";
  }

  upDrag = (e) => {
    e.target.removeEventListener('mousemove', this.dragMove)
  }
  
  render () {
    const {note} = this.props;
    return(
      <div className="note" style={note && {backgroundColor:note.backgroundColor}} onMouseOver={this.setShowPanel} onMouseOut={this.setShowPanel} >
        {/* <InfoPanel /> */}
        <NotePanel 
          showPanel={this.state.showPanel}
        />
      </div>
    )
  }
}

export default Note