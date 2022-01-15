import React, { Component } from 'react';
import TripItem from './TripItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.places !== nextProps.places;
    }

    


    render() {
    const { places, onRemove } = this.props;

    const drop = e => {
      e.preventDefault();
      const trip_id = e.dataTransfer.getData('trip_id');
      const trip = document.getElementById(trip_id);
      trip.style.display = 'block';
      e.target.appendChild(trip);
    }

    const dragOver = e => {
      e.preventDefault();
    }


    const placeList = places.map(
        ({id, text}) => (
            <TripItem
                id={id}
                text={text}
                onRemove={onRemove}
                onDrop={drop}
                onDragOver={dragOver}
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