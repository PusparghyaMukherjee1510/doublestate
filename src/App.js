import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      messege:"",
    }
  }
  increMent=()=>{
    this.setState({count:this.state.count+1});
  };
  displayMessege=()=>{
    this.setState({messege:this.state.messege="hello world"});
  };
  render(){
    return(<div>
      <p>Count:{this.state.count}</p>
      <p>Messege:{this.state.messege}</p>
      <button onClick={this.increMent}>Click</button>
      <button onClick={this.displayMessege}>Click</button>
    </div>)
  }
}

export default App;
