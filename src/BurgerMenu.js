import React, { Component } from 'react';
import './BurgerMenu.css'

class BurgerMenu extends Component {

  toggleClass = () => {
    // console.log(e.target)
    document.querySelector('.burger_menu').classList.toggle("change")
    this.props.changeVisible()
  }
  render () {
    return (
      <div className="burger_menu" onClick={this.toggleClass}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    )
  }
}

export default BurgerMenu