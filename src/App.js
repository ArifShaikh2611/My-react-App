import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyle}>Age Showcase</h1>
        <HeaderInput/>
      </div>
    );
  }
}


class HeaderInput extends Component {
 
  state = {
    Uname : "",
    Uage : "",
    StickData : []
  }


  buttonClick = (e) => {
    const usrData = {
      Uname : this.state.Uname,
      Uage : this.state.Uage
    }
    this.state.StickData.push(usrData);
    this.setState({StickData:this.state.StickData});
    this.setState({Uname:""});
    this.setState({Uage:""});
    
  }

  setUname = (e) => {
    this.setState({Uname: e.target.value});
  }

  setUage = (e) => {
    this.setState({Uage: e.target.value});
  }
  
  //(this.setState(this.state.Uname,))
  render() {
    return(
      <div>
        <label className="marl10">Enter your name : </label>
        <input type="text" onChange={this.setUname} value={this.state.Uname}  name="UsrName"/>
        <label className="marl10">Enter your age : </label>
        <input type="number" onChange={this.setUage} value={this.state.Uage}/>
        <input type="button" value="ADD" className="marl10" onClick={this.buttonClick} />
        <div>
          {
            this.state.StickData.map((data , i) => <MyPerson key={`Person-${i}`} name={data.Uname} age={data.Uage} />)
          }
       
        
        </div>
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

// class MyPerson extends Component{
//     render(props){
//       return(
//         <div className="person">
//           <h1>{props.name}</h1>
//           <p>Your Age : {props.age}</p>
//         </div>
//       );
//   }
// }


var headerStyle = {
  textAlign :'center'
};

export default App;
