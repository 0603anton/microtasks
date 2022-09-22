import React from 'react';

type BodyPropsType = {
    titleForFooter: string
}

export const Footer = (props: BodyPropsType) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    );
};
