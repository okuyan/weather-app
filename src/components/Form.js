import React from 'react';
import './Form.css';

const Form = (props) => (
  <form className="Form" onSubmit={props.submitHandler}>
    <input type="text" placeholder="Zipcode" onChange={props.changeHandler} />
  </form>
);

export default Form;
