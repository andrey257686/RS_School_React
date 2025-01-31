import { Component } from 'react';

import Card from './Card';
import { STSpacecraft } from '../types/types';

interface CardListProps {
  items: STSpacecraft[];
}

class CardList extends Component<CardListProps, object> {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <Card key={item.uid} item={item} />
        ))}
      </div>
    );
  }
}

export default CardList;
