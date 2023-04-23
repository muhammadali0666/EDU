import { Lessons } from 'components';
import React from 'react'
import { statistcs } from './constants';
import { Card, CardName, CardNum, Cards } from './index.style';

export default function Home() {
  return (
    <div>
      <Cards>
        {statistcs.map((item, i) => (
          <Card key={i} to={item.link}>
            <item.Icon style={{ color: item.color, backgroundColor: item.bgColor }} />
            <CardNum>{item.num}</CardNum>
            <CardName>{item.name}</CardName>
          </Card>
        ))}
      </Cards>
      <Lessons />
    </div>
  )
}
