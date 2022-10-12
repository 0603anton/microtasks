import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import Input from "./components/Input";
import {Button} from "./components/Button";

type MessageType = {
    message: string
}

function App() {
    const [message, setMessage] = useState<Array<MessageType>>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title2local, setTitle2local] = useState('')

    const addMassage = (title:string) => {
        let newMassage = {message:title}
        setMessage([newMassage,...message])
    }

    const callBackButtonHandler = () => {
        addMassage(title2local)
        setTitle2local('')
    }
    return (
        <div className="App">
            {/*<FullInput addMassage={addMassage}/>*/}
            <Input title2local={title2local} setTitle2local={setTitle2local}/>
            <Button name={'addSmth'} callBack={callBackButtonHandler}/>
            {message.map((el: MessageType, index: number) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
