import React, {ChangeEvent} from 'react';

type InoutPropsType ={
    setTitle2local:(title:string)=>void
    title2local:string
}

export const Input = (props:InoutPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle2local(event.currentTarget.value)
    }

    return (
        <input value={props.title2local} onChange={onChangeInputHandler}/>
    );
};

export default Input;