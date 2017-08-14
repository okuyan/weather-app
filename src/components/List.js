import React from 'react';
import Item from './Item';
import './List.css';

const List = (props) => (
  <div className="List-container">
    <ul className="List-ul">
      {props.list.map((list, index) => <Item info={list} key={index} />)}
    </ul>
  </div>
)

export default List;
