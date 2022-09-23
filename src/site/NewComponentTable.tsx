import React from 'react';

type AnotherCarsType = {
    anotherCars: AnotherCar[]
}

type AnotherCar = {
    manufacturer: string,
    model: string
}

export const NewComponentTable = (props: AnotherCarsType) => {

    return (


        <table>
            <tr>
                {props.anotherCars.map((car, index) => {
                    return (
                        <tr>
                            <th>{car.manufacturer}</th>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </tr>
        </table>
    );
};

