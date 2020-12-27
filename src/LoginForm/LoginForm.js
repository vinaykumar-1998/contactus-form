import React, { Component } from 'react'
import WebLogo from '../assets/down.jpg'
import moblielogo from '../assets/down.jpg'
import passwordLogo from '../assets/password.png'
import './LoginForm.css'
import axios from 'axios'
import * as actioncreators from '../store/actions/index'
import { connect } from 'react-redux'



const initalstate={
    firstname:"",
    lastname:"",
    age:"",
    email:"",
    mobile:"",
    password:"",
    Description:"",
    confirmpassword:"" ,
    firstnameerror:"",
    lastnameerror:"",
    ageerror:"",
    emailerror:"",
    mobileerror:"",
    passworderror:"",
    confirmpassworderror:"",
    resetclicked:false,
    signinclicked:false
}

class LoginForm extends Component{
    state=initalstate
    onsubmitHandler = (e) =>{
     
        e.preventDefault()
        let isvalid=""
            this.state.resetclicked?isvalid=true:isvalid=this.validate()
            const contactus={
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                age:this.state.age,
                mobilenumber:this.state.mobile,
                email:this.state.email,
                Description:this.state.Description,
                password:this.state.password,
                confirmpassword:this.state.confirmpassword
            }
            const signupdata = {
                email:this.state.email,
                password:this.state.password,
                returnSecureToken:true
            }
        if(isvalid){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1-UjX_SheblPwv00VmWggLOELZ2SnwAk',signupdata)
            axios.post('https://contactus-form-55541.firebaseio.com/contactus.json',contactus).then(this.setState(initalstate))
        if(!this.state.resetclicked){
            this.props.history.push('/signin')
        }
        }        
    }
    onresetclickedHandler =() =>{
        this.setState({resetclicked:!this.state.resetclicked})
    }
    signinclicked = () =>{
        this.setState({signinclicked:true})
        this.props.signinclicked()
    }
    validate = () =>{
    let firstnameerror=""
     let lastnameerror=""
      let ageerror=""
      let emailerror=""
      let mobileerror=""
       let passworderror=""
      let confirmpassworderror=""
      if(!this.state.lastname){
        lastnameerror="please enter a valid"
      }
      
      if(!this.state.firstname){
          firstnameerror="please enter a valid first name"
      }
     
     
      if(!this.state.age){
          ageerror="please enter a valid age"
      }
     
      if(!this.state.mobile){
          mobileerror="please enter a valid one"
      }
     
      if(!this.state.email){
          emailerror="please nter a valid one"
      }
     
      if(!this.state.password){
          passworderror="please enter a valid one"
      }
      
      if(!this.state.confirmpassword){
          confirmpassworderror="please enter a valid one"
      }
      if(this.state.password !== this.state.confirmpassword){
          passworderror = "password and confirm password didnt matched"
          confirmpassworderror = "password and confirm password didnt matched"
      }
      if(confirmpassworderror||passworderror||firstnameerror||lastnameerror||ageerror||emailerror||mobileerror){
          this.setState({confirmpassworderror,passworderror,firstnameerror,lastnameerror,ageerror,emailerror,mobileerror})
          return false
      }
      return true
    }
    onchangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
   
   
    render(){
        if(this.state.signinclicked){
            this.props.history.push('/signin')
           }
       
        return(
            <div className="mainDiv">
                <div className="imgDiv">
                <img src={WebLogo} alt="webLogo" className="web-image"/>
                    <img src={moblielogo} alt="mobileLogo" className="mobile-image"/>
                </div>
                    <div className="formDiv">
                          <div className="heading">
                              <h2>Create an account</h2>
                          </div>
                          <form onSubmit={this.onsubmitHandler}>
                          <div className="form">
                            <div className="top-form">
                                <div className="Mlabels">Personal Details</div>
                                <div className="inner-form">
                                    <div className="label">Firstname</div>
                                    <input type="text"  name="firstname" placeholder="Firstname"
                                    value={this.state.firstname} onChange={this.onchangeHandler} className={this.state.firstnameerror?"errored":null}/>
                                </div>
                                <div className="inner-form">
                                <div className="label">Lastname</div>
                                    <input type="text" placeholder="Lastname" name="lastname" value={this.state.lastname} onChange={this.onchangeHandler}
                                    className={this.state.lastnameerror?"errored":null}/>
                                </div>
                                <div className="inner-form">
                                <div className="label">age</div>
                                    <input  type="number" placeholder="18-100" className={this.state.ageerror?"erroredWAge":"WAge"} name="age" value={this.state.age} onChange={this.onchangeHandler} />
                                    <input  type="number" placeholder="Age" className={this.state.ageerror?"erroredMAge":"MAge"} name="age" value={this.state.age} onChange={this.onchangeHandler} />
                                </div>
                            </div>
                            <div className="middle-form">
                            <div className="inner-form">
                                <div className="label">Mobile number</div>
                                    <input  type="number" placeholder="xxxxx xxxxx" className={this.state.mobileerror?"erroredWmobile":"Wmobile"} name="mobile" value={this.state.mobile} onChange={this.onchangeHandler} />
                                    <input  type="number" placeholder="Mobile number" className={this.state.mobileerror?"erroredMmobile":"Mmobile"} name="mobile" value={this.state.mobile} onChange={this.onchangeHandler} />
                                </div>
                                <div className="inner-form">
                                <div className="label">email</div>
                                    <input type="text" placeholder="abc@xxx.zzz" className={this.state.emailerror?"erroredWEmail":"WEmail"} name="email" value={this.state.email} onChange={this.onchangeHandler} />
                                    <input type="text" placeholder="Email" className={this.state.emailerror?"erroredMEmail":"MEmail"} name="email"value={this.state.email} onChange={this.onchangeHandler} />
                                </div>
                            </div>
                            <div className="bottom-form">
                                <div className="inner-form">
                                <div className="label">Description</div>
                                <textarea className="txtarea" value={this.state.Description} onChange={this.onchangeHandler} name="Description" />
                                <div className="labels">Max. 150 characters</div>
                                </div>
                            </div>
                            <div className="last-form">
                            <div className="Mlabels">Password</div>
                            <div className="inner-form">
                                <div className="label">Password
                                </div>
                                
                                    <input  type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onchangeHandler} className={this.state.passworderror?"erroredpass":"pass"}/>
                                    <img src={passwordLogo} alt="password"width="5%" className="passwordlogo" />
                                    
                                </div>
                                
                                <div className="inner-form">
                                <div className="label">confirm password</div>
                                    <input type="password" placeholder="confirm password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onchangeHandler} className={this.state.confirmpassworderror?"erroredpass":"pass"}/>
                                    
                                    <img src={passwordLogo} alt="password"width="5%" className="passwordlogo" />
                                </div>
                                {this.state.passworderror?<span>{this.state.passworderror}</span>:null}
                            </div>
                            <div className="bottom-form1">
                                <div className="inner-form">
                                <div className="label">Description</div>
                                <textarea className="txtarea" value={this.state.Description} onChange={this.onchangeHandler} name="Description"/>
                                <div className="labels">Max. 150 characters</div>
                                </div>
                            </div>
                            <div className="button">
                                <button onClick={this.onresetclickedHandler}>Reset</button>
                                <button>Submit</button>
                            </div>
                          </div>
                          </form>
                          <div className="signinbutton">
                                <button onClick={this.signinclicked}>Already have an account?Signin</button>
                            </div>
                          
                    </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signinclicked : () => dispatch(actioncreators.signinclicked())
    }
}

export default connect(null,mapDispatchToProps)(LoginForm)