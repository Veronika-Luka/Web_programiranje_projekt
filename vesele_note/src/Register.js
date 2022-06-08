

const Register = ({setIsOpenRegister}) => {
    return ( 
        <div id="id02" className="modal" style={{display:"block"}}>
    
        <form className="modal-content animate"  method="post">
        <div className="imgcontainer">
        <span onClick={() => setIsOpenRegister(false)} className="close" title="Close Modal">X</span>
        </div>

        <div className="container">
        <label for="uname"><b>Korisničko ime</b></label>
        <input type="text" placeholder="Unesi korisničko ime" name="uname" required/>

        <label for="psw"><b>Lozinka</b></label>
        <input type="password" placeholder="Unesi lozinku" name="psw" required/>

        <label for="psw"><b>Ponovite lozinku</b></label>
        <input type="password" placeholder="Ponovno unesite lozinku" name="psw" required/>
            
        <button type="submit" className="loginbuttons" id="colsub2">Registriraj se</button>
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