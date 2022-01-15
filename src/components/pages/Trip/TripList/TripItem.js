import React, { Component } from 'react';
import './TripItem.css';

class TripItem extends Component {
  render() {
    const { text, id, onRemove } = this.props;

    return (
      <div className="todo-item">
      
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id)}
        }>&times;</div>

        <div className="todo-text">
          <div>{text}</div>
        </div>

       </div>
    );
  }
}

export default TripItem;