import {auth} from './firebase-authentication-config'
import { useState,} from 'react';
import {signInWithEmailAndPassword,   } from 'firebase/auth'
import { useHistory } from 'react-router-dom';

const Login = ({ setIsOpenLogin }) => {
   
    const [loginEmail, setLoginEmail]=useState('');
    const [loginPassword, setLoginPassword]=useState('');
    const history = useHistory();


    const login = async ()=> {
        try{
          const user=await signInWithEmailAndPassword(
            auth, 
            loginEmail, 
            loginPassword
            );
          console.log(user);
          alert(user)
          history.push("/")
        }
        catch(error){
          console.log(error.message);
          alert(error.message)
        }
    
      };

    return ( 
        <div id="id01" className="modal" style={{display:"block"}}>
    
        <form className="modal-content animate">
            <div class="imgcontainer">
                <span onClick={() => setIsOpenLogin(false)} className="close" title="Close Modal">X</span>
            </div>

        <div class="container">
        <label for="uname"><b>Unesi e-mail adresu</b></label>
        <input type="text" placeholder="Unesi e-mail adresu" name="uname" required onChange={(e) =>{setLoginEmail(e.target.value)}}/>

        <label for="psw"><b>Unesi lozinku</b></label>
        <input type="password" placeholder="Unesi lozinku" name="psw" required onChange={(e) =>{setLoginPassword(e.target.value)}}/>
            
        <button type="submit" className="loginbuttons" id="colsub1" onClick={login}>Prijavi se</button>
        
        </div>

        <div className="container"  style={{backgroundColor:"#f1f1f1"}}>
        <button type="button" onClick={() => setIsOpenLogin(false)} id="cancelbtn1" className="loginbuttons">Otkaži</button>
        {/*<!-- <span class="psw">Zaboravio <a href="#">password?</a></span> -->*/}
        </div>
    </form>
    </div>
     );
}
 
export default Login;