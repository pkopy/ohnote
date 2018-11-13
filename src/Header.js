import React, { Component } from 'react';
import Menu from './Menu'
import BurgerMenu from './BurgerMenu'
import logo from './logo.svg';
import './Header.css'

class Header extends Component {
  state ={
    menuIsVisible : false
  }

  changeVisible = () => {
    let state = this.state.menuIsVisible
    this.setState({menuIsVisible: !state})
  }
  render() {
    return (
      <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />    */}

          <h1 className="header-text">OH NOTE!</h1> 
          <BurgerMenu 
            
            changeVisible={this.changeVisible}
          />
          <Menu 
            menuIsVisible={this.state.menuIsVisible}
          />
      </header>
    )
  }
}
export default Header