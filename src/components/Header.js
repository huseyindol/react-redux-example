import React, { Component } from 'react';
import logo from '../logo.svg';
import { NavLink, Link } from "react-router-dom";
import { Container, Image, Menu } from 'semantic-ui-react';


class Header extends Component {
  render(){
    return(
      <header className="App-header">
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={Link} to={'/'} header>
              <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} className="App-logo" />
              Project Name
            </Menu.Item>
            <Menu.Item as={NavLink} to={'/'} exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to={'/todo'} exact>Todo</Menu.Item>
            <Menu.Item as={NavLink} to={'/typicode/users'} exact>typicode.com | users</Menu.Item>
          </Container>
        </Menu>
      </header>
    )
  }
}

export default Header;