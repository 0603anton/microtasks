import React from 'react';
import './App.css';
// import {Header} from './site/Header';
// import {Body} from './site/Body';
// import {Footer} from './site/Foooter';
// import {NewComponent} from './site/NewComponent';
// import {NewComponentTable} from './site/NewComponentTable';
// import {MouseEvent} from 'react';
import {Button} from "./components/Button";


// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'},
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]

function App() {
    //   const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //      console.log(`Hello, my name is Vasya`)
    //  }

    //   const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //    console.log(`Hello, my name is Ivan`)
    //  }

    // const onClickHandler = (name: string) => {
    //     return console.log(name)
    // }

    // const foo1 = () => {
    //     // ничего не передаём
    //     console.log(100200)
    // }
    // const foo2 = (number: number) => {
    //     return console.log(number)
    // }

    const Button1Foo = (subscriber:string,age:number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }
    const Button3Foo = () => {
        console.log("I`m stupid button")
    }
    return (
        <>

            <Button name={'MyYouTubeChannel-1'} callBack={()=>Button1Foo('I`m Vasya', 21)}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>Button2Foo('I`m Ivan',32 )}/>
            <Button name={'MyYouTubeChannel-3'} callBack={Button3Foo}/>


            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler(`Vasya`)}>MyYouTubeChannel-1*/}
            {/*</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler(`Ivan`)}>MyYouTubeChannel-2*/}
            {/*</button>*/}


            <>
                {/*<button onClick={() => {*/}
                {/*    console.log(`Hello`)*/}
                {/*}}>MyYouTubeChannel-1*/}
                {/*</button>*/}
                {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler(`Ivan`)}>MyYouTubeChannel-3*/}
                {/*</button>*/}

                {/*<button onClick={foo1}>1</button>*/}
                {/*<button onClick={() => foo2(100200)}>2</button>*/}

                {/*<br/>*/}
                {/*<Header title={'NEW HEADER'}/>*/}
                {/*<Body titleForBody={'NEW BODY'}/>*/}
                {/*<Footer titleForFooter={'NEW FOOTER'}/>*/}
                {/*<NewComponent cars={topCars}/>*/}
                {/*<NewComponentTable anotherCars={topCars}/>*/}
            </>
        </>
    );
}

export default App;
