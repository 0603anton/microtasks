import React, {MouseEvent} from 'react';

type ButtonNamePropsType = {
    name:string
    callBack:()=>void
}

export const Button = (props:ButtonNamePropsType) => {

    const onClickHandler = ()=>{
        props.callBack(

        )
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

