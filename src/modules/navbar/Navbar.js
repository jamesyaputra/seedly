import React, { Component } from 'react';
import { Button, Menu, Responsive, Search } from 'semantic-ui-react';
import styles from './Navbar.module.css';

export class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        className={styles.navbar}
        borderless
        size='large'>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          color='blue'
          onClick={this.handleItemClick}
        >
          <img className={styles.logo} src='https://f.seedly.sg/logo/seedly-logo-blue.png' />
        </Menu.Item>
        
        <Menu.Item
          name='banking'
          active={activeItem === 'banking'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Banking
        </Menu.Item>

        <Menu.Item
          name='cards'
          active={activeItem === 'cards'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Cards
        </Menu.Item>

        <Menu.Item
          name='investments'
          active={activeItem === 'investments'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Investments
        </Menu.Item>

        <Menu.Item
          name='utilitiesAndBills'
          active={activeItem === 'utilitiesAndBills'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Utilities & Bills
        </Menu.Item>

        <Menu.Item
          name='insurance'
          active={activeItem === 'insurance'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Insurance
        </Menu.Item>

        <Menu.Item
          name='community'
          active={activeItem === 'community'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Community
        </Menu.Item>

        <Menu.Item
          name='content'
          active={activeItem === 'content'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Content
        </Menu.Item>

        <Menu.Menu position='right'>
          <Search
            className={styles.search}
            size='small'
            placeholder='Search for anything'
          />

          <Menu.Item>
            <Button
              className={styles.joinButton}
              basic
              primary
              circular
              color='blue'
            >
              Join
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;