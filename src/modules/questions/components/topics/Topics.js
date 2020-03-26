import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import { Menu } from 'semantic-ui-react';

// Styles
import styles from './Topics.module.css';

// Redux
import { fetchTopics }from '../../app/actions/topics';
import {
  getTopics,
  getTopicsError,
  getTopicsPending
} from '../../app/reducers/topics';

const mapStateToProps = state => ({
  error: getTopicsError(state),
  topics: getTopics(state),
  pending: getTopicsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchTopics}, dispatch)

class Topics extends Component {
  state = {}

  componentWillMount() {
    this.props.fetchTopics();
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.onSelectTopic(name);
  }

  render() {
    const { activeItem } = this.state;
    const { topics } = this.props;

    return (
      <Menu
        className={styles.sidebar}
        vertical
        borderless>
        
        {topics.map((topic) => {
          return (
            <Menu.Item
              name={topic.id}
              active={activeItem === topic.id}
              color='blue'
              onClick={this.handleItemClick}
            >
              topic.title
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
