import {MouseEvent, useState} from 'react';
import React from 'react';
import './App.css';
import {Button} from './components/Button';


function App() {

    // let a = 1
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler1 = () => {
        setA(a = 0)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            {/*<button onClick={onClickHandler}>number</button>*/}
            {/*<button onClick={onClickHandler1}>0</button>*/}
            <Button name={'+1'} callBack={onClickHandler}/>
            <Button name={`0`} callBack={onClickHandler1}/>
        </div>
    );
}

export default App;
