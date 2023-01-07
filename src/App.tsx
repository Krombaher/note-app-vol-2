import React from 'react';
import './App.css';
import {Note} from "./components/Note";

export type DataType = {
    id: string,
    date:string,
    title: string,
    body: string,
    tags: string[]
}

const data = [
    {
        id: '1',
        date:'',
        title: 'Shop',
        body: 'You go to #shop?',
        tags: ['#shop']
    },
    {
        id: '2',
        date:'',
        title: 'Work',
        body: 'You go to #work?',
        tags: ['#work']
    },
    {
        id: '3',
        date:'',
        title: 'Fishing',
        body: 'I go to #Fishing!',
        tags: ['#Fishing']
    }
]

function App() {
    return (
        <div className="App">
            <header className='App-header'>
                <h1>Start note app</h1>
                <Note data={data}/>
            </header>
        </div>
    );
}

export default App;
