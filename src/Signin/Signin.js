import React, { Component } from 'react'
import './Signin.css'
import * as actioncreators from '../store/actions/index'
import {connect} from 'react-redux'



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
        this.props.onAuth(this.state.email,this.state.password)
        
       
    }
    buttonClickedHandler = (e) =>{
        e.preventDefault();
    }
    signupClickedHandler = (e) =>{
        e.preventDefault();
        this.props.history.push('/')
    }
   
    
    
        render(){
          
            if(this.props.idtoken){
                this.props.history.push('/main')
            }
            
        return(
            
            <div className="signindiv">
               
                <div  className="upDiv">
                <h1 className="h1">Welcome To Magic World of Yours</h1>
                <h3 className="h3">signin to your account here</h3>
                </div>
                <div className="downDiv" >
                    
                <form className="forms" >
                {this.props.error?<span style={{position:"relative",left:"15px",color:"white"}}>{this.props.error}</span>:null}
                    <div className="inpDivs" >
                        
                        <label>Email:</label>
                        <input className="inps"  type="text" name="email" value={this.state.email} placeholder="Email address" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="inpDivs">
                        <div>Password:</div>
                        <input className="inps" type="password" name="password" value={this.state.password} placeholder="password" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="btn1Div"  >
                        <button className="btn1Divs" onClick={this.onSubmitHandler}>Signin</button>
                    </div>
                    <div className="btn2Div"  >
                        <button className="btn2Divs" onClick={this.signupClickedHandler}>Didn't had an account? Signup</button>
                    </div>
                </form>

                </div>
                </div>

           
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        idtoken:state.token,
        error:state.error
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onAuth : (email,password) =>dispatch(actioncreators.auth(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)