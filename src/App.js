import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import Signin from './Signin/Signin';
import {Route,Switch} from 'react-router-dom'
import Main from './Main/Main';

class App extends Component {
  state={
    idtoken:""
  }
  handler = (val) =>{
    this.setState({idtoken:val})
  }
   render(){
     console.log(this.state.idtoken)
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={Signin}  />
        <Route path="/main" component={Main} />
        <Route path="/" exact component={LoginForm} />
    <Signin />
    </Switch>
    </div>
  );
 }
}

export default App;
