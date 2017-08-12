import React from 'react';

const Form = (props) => (
  <form onSubmit={props.submitHandler}>
    <input type="text" placeholder="Please enter zipcode" onChange={props.changeHandler} />
  </form>
);

export default Form;
