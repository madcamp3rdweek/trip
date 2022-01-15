import React from 'react';
import './TripListTemplate.css';

function TripListTemplate({form, children}) {
    return (
        <main className="trip-list-template">
            <div className="title">
                여행 경로
            </div>

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