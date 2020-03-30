import React from 'react'

type DefaultProps = {
    pair: string
    price: number
    change: number
}

export const Row: React.FC<DefaultProps> = props => {
    const { pair, price, change } = props
    return (
        <tr data-test="row-component">
            <td data-test="row-pair">{pair}</td>
            <td data-test="row-last-price">{price}</td>
            <td data-test="row-change">{change}</td>
        </tr>
    )
}


