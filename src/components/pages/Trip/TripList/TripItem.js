import React, { Component } from 'react';
import './TripItem.css';

class TripItem extends Component {
  render() {
    const { text, id, onRemove, onDrop, onDragOver } = this.props;

    const dragStart = e => {
      const target = e.target;

      e.dataTransfer.setData('trip_id', target.id);

      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }

    const dragOver = e => {
      e.stopPropagation();
    }



    return (
      <div className="todo-item">
      
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(id)}
        }>&times;</div>

        <div className="todo-text" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
          <div>{text}</div>
        </div>

       </div>
    );
  }
}

export default TripItem;