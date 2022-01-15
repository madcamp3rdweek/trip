import React from 'react';
import './TripListTemplate.css';

function TripListTemplate({form, children}) {

    // const drop = e => {
    //   e.preventDefault();
    //   const trip_id = e.dataTransfer.getData('trip_id');
    //   const trip = document.getElementById(trip_id);
    //   trip.style.display = 'block';
    //   e.target.appendChild(trip);
    // }

    // const dragOver = e => {
    //   e.preventDefault();
    // }


    return (
        <main className="trip-list-template">
            <div className="title">
                여행 경로
            </div>

            {/* <section className="todos-wrapper" onDrop={drop} onDragOver={dragOver}> */}
            <section className="todos-wrapper">
                { children }
            </section>

            <section className="form-wrapper">
                {form}
            </section>
        </main>
    )
}

export default TripListTemplate;