import React, { Component } from 'react'
import axios from 'axios'
import './Signin.css'
const initalstate={
    email:"",
    password:"",
    errors:"",
    idtoken:"",
    localid:""
}
class Signin extends Component{
    state=initalstate
    onChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        const signindata = {
            email:this.state.email,
            password:this.state.password,
            returnSecureToken:true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1-UjX_SheblPwv00VmWggLOELZ2SnwAk",signindata)
        .then(res =>{this.setState({idtoken:res.data.idToken,localid:res.data.localId})},this.props.history.push('/main'))
        .catch(res =>this.setState({errors:res.response.data.error.message}))
        
    }
        render(){
        return(
            <div className="signin">
                <form className="forms" onSubmit={this.onSubmitHandler}>
                    {this.state.errors}
                <input type="text" name="email" value={this.state.email} placeholder="Email address" onChange={this.onChangeHandler}/>
                <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.onChangeHandler}/>
                <button>Signin</button>
                </form>
            </div>
        )
    }
}

export default Signin