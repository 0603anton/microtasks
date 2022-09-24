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
            <tbody>
            {props.anotherCars.map((car, index) => {
                return (
                    <tr key={index + `b`}>
                        <th>{car.manufacturer}</th>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

