import React, { Component } from 'react';
import TripListTemplate from '../Trip/TripList/TripListTemplate';
import Form from '../Trip/TripList/Form';
import TripItemList from '../Trip/TripList/TripItemList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


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
            <>  
                <DndProvider backend={HTML5Backend}>
                    <TripListTemplate form={(
                        <Form 
                            value={input}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange}
                            onCreate={handleCreate}
                        />
                    )}>
                        <TripItemList places={places} onRemove={handleRemove}/>
                    </TripListTemplate>
                </DndProvider>
                
            </>
        );
    }
}

export default Trip
