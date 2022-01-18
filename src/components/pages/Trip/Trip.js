import React, { Component } from 'react';
// import TripListTemplate from '../Trip/TripList/TripListTemplate';
// import Form from '../Trip/TripList/Form';
// import TripList from '../Trip/TripList/TripList';
import './Trip.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import MapContainer from './Map/MapContainer';
import LandingPage from './Map/LandingPage';
import TripInfo from './Map/TripInfo';

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   background: isDragging ? "lightgreen" : "grey",
//   ...draggableStyle
// });

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey"
// });


class Trip extends Component{

    id = 3

    state = {
        input: '',
        places: [
        ]
    }

    checkStorage = (e) => {
        if(this.state.input !== e.target.value){
            this.setState({input : e.target.value })
        }
    }

    componentDidMount(){
        window.addEventListener('storage', this.checkStorage)
    }

    componentWillUnmount(){
        window.removeEventListener('storage', this.checkStorage)
    }


    handleChange = (e) => {
        this.setState({
        input: e.target.value // input 의 다음 바뀔 값
        });
    }

    handleCreate = (loc, lat, long) => {
        const { places } = this.state;
        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            places: places.concat({
                id: this.id++,
                text: loc,
                latitude: lat,
                longitude: long,
                checked: false
            })
        });
    }


    handleRemove = (id) => {
        console.log("remove clicked");
        const { places } = this.state;
        // const foo = e.target.getAttribute('text');
        console.log({id});
        this.setState({
            places: places.filter(places => places.id !== id)
        });
    }


    handleOnDragEnd = (result) => {
        if(!result.destination ) return;
        const newPlaces = Array.from(this.state.places);
        const [reorderedPlaces] = newPlaces.splice(result.source.index, 1);
        newPlaces.splice(result.destination.index, 0, reorderedPlaces);
        this.setState({places: newPlaces});
    }

    render(){
        const { input, places } = this.state;
        const {
            handleChange,
            handleCreate,
            handleRemove,
            handleOnDragEnd,
        } = this;



        // return (
        //     <>  
        //         <TripListTemplate form={(
        //             <Form 
        //                 value={input}
        //                 onKeyPress={handleKeyPress}
        //                 onChange={handleChange}
        //                 onCreate={handleCreate}
        //             />
        //         )}> 
        //         <DragDropContext onDragEnd={this.onDragEnd}>
        //         <Droppable droppableId="droppable">
        //             <TripList places={places} onRemove={handleRemove}/>
        //         </Droppable>
        //         </DragDropContext>
        //         </TripListTemplate>                
        //     </>
        // );


        return (
            <>
            <div className="trip-page">
            <main className="trip-list-template">
                <div className="title">
                    여행 경로
                </div>

                <div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {places.map(({id, text}, index) => (
                                        <Draggable key={id} draggableId={id.toString()} index={index}>
                                            {(provided) => (
                                                <li className="characters-entry"{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <div className="todo-item">
                                                            <div className="remove" onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRemove(id)}}>&times;</div>
                                                            <div className="todo-text">
                                                            <div>{text}</div>
                                                            </div>
                                                    </div>
                                                </li>
                                            )}
                                        </Draggable>
                                        )
                                    )}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

                <section className="form-wrapper">
                    <div className="form">
                        <input value={input} onChange={handleChange}/>
                            {/* <div className="create-button" onClick={handleCreate}>
                                Add
                            </div> */}
                    </div>
                </section>
            <MapContainer searchPlace={input} handleCreate={handleCreate}/>
            </main>
        
            <TripInfo places={this.state.places}/>
            </div>
        </>    
        )


    }
}

export default Trip
