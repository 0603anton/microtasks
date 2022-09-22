import React from 'react';


type NewComponentPoprsType = {
    cars: Array<CarType> //CarType[]
}

type CarType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentPoprsType) => {
    debugger
    return (
        <div>

        </div>
    );
};
