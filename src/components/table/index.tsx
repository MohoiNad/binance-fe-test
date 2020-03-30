import React from 'react'

import { Row } from './components/Row'
import { useWsConnection } from '../../hooks/useWsConnection'

type DataChunk = {
    s: string
    st: string
    b: string
    q: string
    ba: string
    qa: string
    i: number
    ts: number
    an: string
    qn: string
    o: number
    h: number
    l: number
    c: number
    v: number
    qv: number
    y: number
    as: number
    pm: string
    pn: string
    cs: number
}

type TableProps = {
    data: DataChunk[]
}

export const Table: React.FC<TableProps> = props => {
    useWsConnection()

    const rows = props.data.map(el => (
        <Row key={el.s}
             pair={`${el.b}/${el.q}`}
             price={el.v}
             change={el.i} />
    ))

    return <table>{rows}</table>
}


