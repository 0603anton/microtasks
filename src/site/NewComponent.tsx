import React from 'react';


type NewComponentPropsType = {
    cars: Array<CarType> //CarType[]
}

type CarType = {
    manufacturer: string,
    model: string
}


export const NewComponent = (props: NewComponentPropsType) => {
    let cars = props.cars.map((car, index) => {
        return (
            <li key={index}>{`manufacturer: ${car.manufacturer}, model: ${car.model}`}</li>
        )
    })

    return (
        <div>
            <ul>
                {cars}
            </ul>
        </div>
    );
};
