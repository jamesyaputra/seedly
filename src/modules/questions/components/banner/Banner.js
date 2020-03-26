import React, { Component } from 'react';
import styles from './Banner.module.css';

export class Banner extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className={styles.banner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.button}>ASK A QUESTION</div>
      </div>
    )
  }
}

export default Banner;