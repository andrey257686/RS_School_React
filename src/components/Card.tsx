import { Component } from 'react';
import styles from './Card.module.scss';

import { STSpacecraft } from '../types/types';

interface CardProps {
  item: STSpacecraft;
}

class Card extends Component<CardProps, object> {
  render() {
    return (
      <div className={styles.card}>
        <h2 className={styles.card_title}>{this.props.item.name}</h2>
        <p>Registry: {this.props.item.registry || 'N/A'}</p>
        <p>Status: {this.props.item.status || 'N/A'}</p>
        <p>Date Status: {this.props.item.dateStatus || 'N/A'}</p>
      </div>
    );
  }
}

export default Card;
