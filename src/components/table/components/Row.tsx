import React from 'react'

type DefaultProps = {
    pair: string,
    price: number,
    change: number,
}

export const Row:React.FC<DefaultProps> = (props) => {
    const {pair, price, change} = props;
    return (
        <div  data-test="row-component" >
            <p data-test="row-pair">{pair}</p>
            <p data-test="row-last-price">{price}</p>
            <p data-test="row-change">{change}</p>
        </div>
    )
}


