import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render () {
    const { menuIsVisible } = this.props
    
    return (

      <div className={menuIsVisible? "menu":"menu_hide"}>
        <ol>
            <li>HOME</li>
            <li>NOTES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li></li>
          </ol>
      </div>      
    )
  }
}

export default Menu