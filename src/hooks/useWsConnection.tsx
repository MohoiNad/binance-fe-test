import { useState, useEffect } from 'react'

export const useWsConnection = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const ws = new WebSocket(
            'wss://stream.binance.com/stream?streams=!miniTicker@arr'
        )
        ws.onmessage = event => {
            const response = JSON.parse(event.data)
            console.log(response) //FIXME
            setOrders(response.data)
        }
        ws.onclose = () => {
            ws.close()
        }
    }, [])
    return orders
}