import {auth} from './firebase-authentication-config'
import {
    createUserWithEmailAndPassword,
   } from 'firebase/auth'
  import { useState, } from 'react';
  import { useHistory } from 'react-router-dom';


const Register = ({setIsOpenRegister}) => {
  
  const [registerEmail, setRegisterEmail]=useState('');
  const [registerPassword, setRegisterPassword]=useState('');
  const history = useHistory();

    const register = async() => {
    
        try{
          const user=await createUserWithEmailAndPassword(
            auth, 
            registerEmail, 
            registerPassword
            );
          console.log(user);
          alert(user)
          history.push("/")
       
        }
        catch(error){
          console.log(error.message);
          alert(error.message)
        }

    }

    return ( 
        <div id="id02" className="modal" style={{display:"block"}}>
    
        <form className="modal-content animate"  >
        <div className="imgcontainer">
        <span onClick={() => setIsOpenRegister(false)} className="close" title="Close Modal">X</span>
        </div>

        <div className="container">
        <label for="uname"><b>E-mail adresa</b></label>
        <input type="text" placeholder="Unesi e-mail adresu" name="uname" required onChange={(e) =>{setRegisterEmail(e.target.value)}}/>

        <label for="psw"><b>Lozinka</b></label>
        <input type="password" placeholder="Unesi lozinku" name="psw" required onChange={(e) =>{setRegisterPassword(e.target.value)}}/>

      
            
        <button type="submit" className="loginbuttons" id="colsub2" onClick={register}>Registriraj se</button>
        <label>
            
        </label>
        </div>

        <div className="container" style={{backgroundColor:"#f1f1f1"}}>
        <button type="button" onClick={() => setIsOpenRegister(false)} id="cancelbtn2" className="loginbuttons">Otkaži</button>
        {/*<!-- <span class="psw">Zaboravio <a href="#">password?</a></span> -->*/}
        </div>
    </form>
    </div>
     );
}

 
export default Register;