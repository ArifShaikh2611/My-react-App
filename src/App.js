import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyle}>Age Showcase</h1>
      <MyPerson name="Arif" age="24" />
      <MyPerson name="Amol" age="25" />
      <MyPerson name="Shivam" age="25" />
      </div>
    );
  }
}


class HeaderInput extends Component {
  render() {
    return(
      <div>
        </div>
    );
  }
}

function MyPerson(props){
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age : {props.age}</p>
    </div>
  );
}


var headerStyle = {
  textAlign :'center'
};

export default App;
