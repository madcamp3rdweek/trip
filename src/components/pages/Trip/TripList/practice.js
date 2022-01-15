return (
    <main className="trip-list-template">
        <div className="title">
            여행 경로
        </div>

        {/* <section className="todos-wrapper" onDrop={drop} onDragOver={dragOver}> */}
        <section className="todos-wrapper">
            부제
        </section>


        <div>
            places.map(
                ({id, text}) => (
                    <div className="todo-item">
    
                        <div className="remove" onClick={(e) => {
                            e.stopPropagation();
                            onRemove({id})}
                        }>&times;</div>

                        <div className="todo-text" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
                        <div>{text}</div>
                        </div>
                    </div>
                )
            )
        </div>

        <section className="form-wrapper">
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                    <div className="create-button" onClick={onCreate}>
                        Add
                    </div>
            </div>
        </section>
    </main>
)











import React, { Component } from 'react';
import TripListTemplate from '../Trip/TripList/TripListTemplate';
import Form from '../Trip/TripList/Form';
import TripList from '../Trip/TripList/TripList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    handleChange = (e) => {
        this.setState({
        input: e.target.value // input 의 다음 바뀔 값
        });
    }

    handleCreate = () => {
        const { input, places } = this.state;
        this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            places: places.concat({
                id: this.id++,
                text: input,
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
        const { places } = this.state;
        this.setState({
            places: places.filter(todo => todo.id !== id)
        });
    }

    render(){
        const { input, places } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleRemove
        } = this;

    return (
    <main className="trip-list-template">
        <div className="title">
            여행 경로
        </div>

        {/* <section className="todos-wrapper" onDrop={drop} onDragOver={dragOver}> */}
        <section className="todos-wrapper">
            부제
        </section>


        <div>
            places.map(
                ({id, text}) => (
                    <div className="todo-item">
    
                        <div className="remove" onClick={(e) => {
                            e.stopPropagation();
                            onRemove({id})}
                        }>&times;</div>

                        <div className="todo-text" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
                        <div>{text}</div>
                        </div>
                    </div>
                )
            )
        </div>

        <section className="form-wrapper">
            <div className="form">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
                    <div className="create-button" onClick={onCreate}>
                        Add
                    </div>
            </div>
        </section>
    </main>
)

    


    }
}

export default Trip