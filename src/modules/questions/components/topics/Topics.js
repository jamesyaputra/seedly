import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './Topics.module.css';

export class Topics extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu
        className={styles.sidebar}
        vertical
        borderless>
        <Menu.Item
          name='all'
          active={activeItem === 'all'}
          color='blue'
          onClick={this.handleItemClick}
        >
          All Questions
        </Menu.Item>
        
        <Menu.Item className={styles.topicsTitle}>
          Featured Topics
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
      </Menu>
    )
  }
}

export default Topics;