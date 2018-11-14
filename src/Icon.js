import React, { Component } from 'react';
import './Icon.css';
// import trash from './trash.svg'

class Trash extends Component {
  click = (e) => {
    // e.target.parentNode.style.height = 150 + "px"
    // e.target.parentNode.style.bottom = 0+"px";
    // e.target.style.top = 152+"px";
    
    // // e.target.style.bottom = 0
    console.log(e.target)
  }
  render () {
    return(
      
      <div className="icon" onClick={this.click} >
        <img src={this.props.icon} alt={this.props.icon} style={{left:0}}/> 
      </div>
      
    )
  }
}

export default Trash