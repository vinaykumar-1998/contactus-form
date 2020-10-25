import React, { Component } from 'react'
import WebLogo from '../assets/down.jpg'
import moblielogo from '../assets/down.jpg'
import passwordLogo from '../assets/password.png'
import './LoginForm.css'


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
}

class LoginForm extends Component{
    state=initalstate
    onsubmitHandler = (e) =>{
     
        e.preventDefault()
        let isvalid=""
            this.state.resetclicked?isvalid=true:isvalid=this.validate()
        if(isvalid){
            this.setState(initalstate)
        }
        
    }
    onresetclickedHandler =() =>{
        this.setState({resetclicked:!this.state.resetclicked})
      
        
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
                                    <input  type="number" placeholder="18-100" className={this.state.ageerror?"errored":"WAge"} name="age" value={this.state.age} onChange={this.onchangeHandler} />
                                    <input  type="number" placeholder="Age" className={this.state.ageerror?"errored":"MAge"} name="age" value={this.state.age} onChange={this.onchangeHandler} />
                                </div>
                            </div>
                            <div className="middle-form">
                            <div className="inner-form">
                                <div className="label">Mobile number</div>
                                    <input  type="number" placeholder="xxxxx xxxxx" className={this.state.mobileerror?"errored":"Wmobile"} name="mobile" value={this.state.mobile} onChange={this.onchangeHandler} />
                                    <input  type="number" placeholder="Mobile number" className={this.state.mobileerror?"errored":"Mmobile"} name="mobile" value={this.state.mobile} onChange={this.onchangeHandler} />
                                </div>
                                <div className="inner-form">
                                <div className="label">email</div>
                                    <input type="text" placeholder="abc@xxx.zzz" className={this.state.emailerror?"errored":"WEmail"} name="email" value={this.state.email} onChange={this.onchangeHandler} />
                                    <input type="text" placeholder="Email" className={this.state.emailerror?"errored":"MEmail"} name="email"value={this.state.email} onChange={this.onchangeHandler} />
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
                                    <input  type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onchangeHandler} className={this.state.passworderror?"errored":null}/>
                                    <img src={passwordLogo} alt="password"width="5%" className="passwordlogo" />
                                </div>
                                <div className="inner-form">
                                <div className="label">confirm password</div>
                                    <input type="password" placeholder="confirm password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onchangeHandler} className={this.state.confirmpassworderror?"errored":null}/>
                                    <img src={passwordLogo} alt="password"width="5%" className="passwordlogo" />
                                </div>
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
                          
                    </div>
            </div>
        )
    }
}

export default LoginForm