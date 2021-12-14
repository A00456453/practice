import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { AboutMe } from './AboutMe';
import { MyTown } from './MyTown';
import {React,Component} from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedMenu:'a'
    }
  }
  render(){
      return(
        <div className="container">
          <div className="navbar">
            <a className="" onClick={() => this.setState({ selectedMenu: 'a' })}>About Me</a>
            <a className="" onClick={() => this.setState({ selectedMenu: 't' })}>My Town</a>
          </div>
          {this.state.selectedMenu==='a' ?  
          <AboutMe/> 
          : 
          <MyTown/>}
        </div>
      )
    }
}


export default App;
