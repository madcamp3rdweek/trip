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
                        <input value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                            {/* <div className="create-button" onClick={handleCreate}>
                                Add
                            </div> */}
                    </div>
                </section>
            </main>


            <MapContainer searchPlace={input} handleCreate={handleCreate}/>

            {/* <iframe title="gmap" src="http://map.naver.com/v5/directions/14130545.426978473,4516777.295707526,%EC%8B%A0%EC%B4%8C%EC%97%AD%202%ED%98%B8%EC%84%A0,240,SUBWAY_STATION/14142772.203249756,4510945.592839651,%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B0%95%EB%82%A8%EC%84%9C%EC%B4%88%EA%B5%90%EC%9C%A1%EC%A7%80%EC%9B%90%EC%B2%AD,11630860,PLACE_POI/-/transit?c=14132969.0971959,4514456.1464421,12,0,0,0,dh" width="600" height="450"></iframe> */}


        </>    
        )


    }
}

export default Trip
