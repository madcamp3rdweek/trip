import React, { Component } from 'react';
// import TripListTemplate from '../Trip/TripList/TripListTemplate';
// import Form from '../Trip/TripList/Form';
// import TripList from '../Trip/TripList/TripList';
import './Trip.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import MapContainer from './Map/MapContainer';
import LandingPage from './Map/LandingPage';

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
            { id: 0, text: ' 리액트 소개 1'},
            { id: 1, text: ' 리액트 소개 2'},
            { id: 2, text: ' 리액트 소개 3'},
        ]
    }

    // onDragEnd(result) {
    //     // dropped outside the list
    //     if (!result.destination) {
    //     return;
    //     }

    //     const newPlace = reorder(
    //     this.state.places,
    //     result.source.index,
    //     result.destination.index
    //     );

    //     this.setState({
    //         places: newPlace
    //     });
    // }

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

    handleCreate = (loc) => {
        const { places } = this.state;
        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            places: places.concat({
                id: this.id++,
                text: loc,
                checked: false
            })
        });
    }

    handleKeyPress = (e) => { 
    // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
            this.handleCreate();    
        }
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
            handleKeyPress,
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
            <main className="trip-list-template">
                <div className="title">
                    여행 경로
                </div>

                {/* <section className="todos-wrapper" onDrop={drop} onDragOver={dragOver}> */}
                {/* <section className="todos-wrapper">
                    부제
                </section> */}


                <div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {places.map(({id, text}, index) => (
                                        <Draggable key={id} draggableId={id.toString()} index = {id}>
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
                        <input value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                            {/* <div className="create-button" onClick={handleCreate}>
                                Add
                            </div> */}
                    </div>
                </section>
            </main>


            <MapContainer searchPlace={input} handleCreate={handleCreate}/>
        </>    
        )


    }
}

export default Trip
