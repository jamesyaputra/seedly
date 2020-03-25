import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Banner.module.css';

export class Banner extends Component {
  render() {
    return (
      <div className={styles.banner}>
        <div className={styles.title}>Personal Finance</div>
        <div className={styles.description}>All you need to know about managing your wealth</div>
        <Button
          circular
          color='blue'
          size='huge'>
          ASK A QUESTION
        </Button>
      </div>
    )
  }
}

export default Banner;