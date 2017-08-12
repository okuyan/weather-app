import React from 'react';
import Item from './Item';

const List = (props) => (
  <div>
    <ul>
      {props.list.map((list, index) => <Item info={list} key={index} />)}
    </ul>
  </div>
)

export default List;
