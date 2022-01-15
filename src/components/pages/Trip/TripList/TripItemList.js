import React, { Component } from 'react';
import TripItem from './TripItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.places !== nextProps.places;
    }

    render() {
    const { places, onToggle, onRemove } = this.props;

    const placeList = places.map(
        ({id, text}) => (
            <TripItem
                id={id}
                text={text}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        )
    )

    return (
      <div>
        {placeList}        
      </div>
    );
  }
}

export default TodoItemList;