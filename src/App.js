import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import Signin from './Signin/Signin';
import {Route,Switch,Redirect} from 'react-router-dom'
import Main from './Main/Main';
import { connect } from 'react-redux';


class App extends Component {
 
 
   render(){ 
     let routes = (
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Redirect to="/" />
    </Switch>
     )
     if(this.props.idtoken ||this.props.signupclicked || this.props.signinclicked){
       routes = (
        <Switch>
        <Route path="/signin" component={Signin}  />
        <Route path="/main" component={Main} />
        <Route path="/" exact component={LoginForm} />
        <Redirect to="/" />
    </Switch>
       )
     }
  return (
    <div className="App">
      {routes}
    </div>
  );
 }
}

const mapStateToProps = (state) =>{
  return{
    idtoken:state.token,
    signinclicked:state.signinclicked,
    signupclicked:state.signupclicked
  }
}


export default connect(mapStateToProps,null)(App);
