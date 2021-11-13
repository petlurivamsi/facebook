import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './register.css';

export default function Register() {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()

    const handleClick =  async (e)=>{  
        e.preventDefault()
        if(passwordAgain.current.value!==password.current.value){
            password.current.setCustomValidity("Passwords didn't match!!")
        }else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try{
                
                await axios.post("/auth/register",user)
                history.push("/login");
            }catch(err){
                    console.log(err)
            }
        }
    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">VamsiSocial</h3>
                    <span className="loginDesc">Connect with world around you on VamsiSocial</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input 
                        placeholder="Username"
                        ref={username}
                        required className="loginInput"
                     />
                        <input 
                        placeholder="Email"
                         ref={email}
                          required 
                          type="email"
                          className="loginInput"
                         />
                        <input 
                        placeholder="Password"
                         ref={password}
                          required 
                          type="password"
                          className="loginInput"
                          minLength="6"
                     />
                        <input 
                        placeholder="Confirm Password"
                         ref={passwordAgain}
                          required
                          type="password"
                          className="loginInput"
                          minLength="6"
                     />
                        <button className="loginButton" type="submit">Sign Up</button>
                        
                        <button className="loginRegisterButton">Log into your account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
