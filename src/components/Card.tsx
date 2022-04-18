import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string,  //? сделает не обязательным
    height?: string,
    variant: CardVariant;
    onClick: (num: number) => void; //it can be number, string etc

}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         onClick,
     }) => {
    const [state, setState] = useState(0)
        return (
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.outlined ? 'lightgray' : ''
            }} onClick={() => onClick(state)}>
                {/*{children}*/}
            </div>
        );
    };

export default Card;