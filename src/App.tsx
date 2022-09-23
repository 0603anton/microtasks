import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Foooter';
import {NewComponent} from './site/NewComponent';
import {NewComponentTable} from './site/NewComponentTable';

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'},
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    return (
        <>
            <Header title={'NEW THEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <NewComponent cars={topCars}/>
            <NewComponentTable anotherCars={topCars}/>
        </>
    );
}

export default App;
