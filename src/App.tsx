import React, {useState} from 'react';
import './App.css';

type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>(`all`)

    let currentMoney = money;

    if (filter === `RUBLS`) {
        currentMoney = money.filter((filteredMoney) => {
            return filteredMoney.banknots === `RUBLS`
        })
    }
    if (filter === `Dollars`) {
        currentMoney = money.filter((filteredMoney) => {
            return filteredMoney.banknots === `Dollars`
        })
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((obj, index) => {
                    return (

                        <li key={index}>
                            <span> {obj.banknots}</span>
                            <span> {obj.value}</span>
                            <span> {obj.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: `35px`}}>
                <button onClick={() => onClickFilterHandler(`all`)}>all</button>
                <button onClick={() => onClickFilterHandler(`RUBLS`)}>rubles</button>
                <button onClick={() => onClickFilterHandler(`Dollars`)}>dollars</button>
            </div>
        </>
    );
}

export default App;
