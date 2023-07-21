import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TableBooking, { ItemProps } from '../components/TableBooking';


const URL_WEB_SOCKET = 'wss://stream.binance.com:9443/ws';
const request = {
  method: 'SUBSCRIBE',
  params: ['btcusdt@trade'],
  id: 1,
};

const BookingPage = () => {
  const [ws, setWs] = useState<any>(null);
  const [trades, setTrades] = useState<ItemProps[]>([]);

  useEffect(() => {
    console.log('on 1');
    const wsClient = new WebSocket(URL_WEB_SOCKET);
    wsClient.onopen = () => {
      console.log('wsClient', wsClient);
       setWs(wsClient);
      wsClient.send(JSON.stringify(request));
    };
    wsClient.onclose = () => console.log('ws closed');
    return () => {
      wsClient.close();
    };
  }, []);

  useEffect(() => {
    if (ws) {
      console.log('ws', ws);
      ws.onmessage = (evt: { data: string; }) => {
        const trade = JSON.parse(evt.data);
        const newTrades = [...trades];
        console.log('trade', trade);
        console.log('newTrades', newTrades);
        addTradeToList(trade, newTrades);
      };
    }
  }, [ws, trades]);

  const addTradeToList = (trade: ItemProps, newTrades: ItemProps[]) => {
    if (newTrades.length >= 20) {
      newTrades.shift();
      newTrades.push(trade);
      setTrades(newTrades);
    } else {
      newTrades.push(trade);
      setTrades(newTrades);
    }
  };

  return (
    <div>BookingPage
      <TableBooking list={trades} />
    </div>
  );
};

export default BookingPage;
