import { Component } from 'react';
import styles from './CardList.module.scss';

import Card from './Card';
import { STSpacecraft } from '../types/types';

interface CardListProps {
  items: STSpacecraft[];
}

class CardList extends Component<CardListProps, object> {
  render() {
    return (
      <div className={styles.cardList_container}>
        <h2>RESULTS</h2>
        <div className={styles.cardList}>
          {this.props.items.map((item) => (
            <Card key={item.uid} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
