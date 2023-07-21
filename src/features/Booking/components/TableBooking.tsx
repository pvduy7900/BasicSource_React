import React from 'react';
import { Col, Row } from 'antd';
import { ColBooking } from './ColBooking';

export interface ItemProps {
  e: string;
  E: number;
  s: string;
  t: number;
  p: string;
  q: string;
  b: number;
  a: number;
  T: number;
  m: boolean;
  M: boolean;
}

function financial(x: string) {
  return Number.parseFloat(x).toFixed(2);
}
const numberToDate = (numberTime: number) => {
  const date = new Date(numberTime * 1000);
  return date.toTimeString();
};

const TableBooking = ({ list }: { list: ItemProps[] }) => {
  console.log('list', list);

  const renderList = () => {
    if (!list || !list.length || !list[0]) return 'Loading...';
    return list.map((trade, index) => (
      <Row gutter={[16, 16]} key={trade.T}>
        <Col span={1}>{index + 1}</Col>
        <Col span={3}>{trade && trade.t}</Col>
        <Col span={4}>${trade && financial(trade.p)}</Col>
        <Col span={3}>{trade && trade.q}</Col>
        <Col span={4}>{trade && trade.b}</Col>
        <Col span={3}>{trade && trade.a}</Col>
        <Col span={6}>{trade && numberToDate(trade.T)}</Col>
      </Row>
    ));
  };

  return (
    <div style={{ padding: '24px', border: '1px solid black', borderRadius: '10px'}} >
      <Row gutter={[16, 16]}>
        <Col span={1}>STT</Col>
        <Col span={3}>Trade ID</Col>
        <Col span={4}>Price</Col>
        <Col span={3}>Quantity</Col>
        <Col span={4}>Buyer ID</Col>
        <Col span={3}>Seller ID</Col>
        <Col span={6}>Trade time</Col>
      </Row>
      {renderList()}
    </div>
  );
};

export default TableBooking;
