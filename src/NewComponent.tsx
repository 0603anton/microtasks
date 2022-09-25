import React from 'react';
import {FilterType} from "./App";

type CurrencyType ={
    money:Array<MoneyPropsType>
    callBack:(nameButton:FilterType)=>void
}

type MoneyPropsType={
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props:CurrencyType) => {

    const onClickHandler = (nameButton:FilterType) => {
      props.callBack(nameButton)
    }

    return (
        <div>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>onClickHandler(`all`)}>All</button>
                <button onClick={()=>onClickHandler(`Dollars`)}>Dollars</button>
                <button onClick={()=>onClickHandler(`RUBLS`)}>Rubles</button>
            </div>
        </div>
    );
};

