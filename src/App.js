import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import getWeatherInfo from './functions/getWeatherInfo';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zip: '',
      city: '',
      list: [],
    };
  }
  changeHandler = (evt) => {
    this.setState({
      zip: evt.target.value,
    });
  }

  submitHandler = async (evt) => {
    evt.preventDefault();
    const info = await getWeatherInfo(this.state.zip);
    console.log(info);
    this.setState({
      city: info.city.name,
      list: info.list,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Form submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
        <div>
          { this.state.city ? <span>{this.state.city} 5 Day Weather</span> : '' }
        </div>
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
