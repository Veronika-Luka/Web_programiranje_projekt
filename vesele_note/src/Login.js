const Login = ({ setIsOpenLogin }) => {
    return ( 
        <div id="id01" className="modal" style={{display:"block"}}>
    
        <form className="modal-content animate"  method="post">
            <div class="imgcontainer">
                <span onClick={() => setIsOpenLogin(false)} className="close" title="Close Modal">X</span>
            </div>

        <div class="container">
        <label for="uname"><b>Unesi korisničko ime</b></label>
        <input type="text" placeholder="Unesi korisničko ime" name="uname" required/>

        <label for="psw"><b>Unesi lozinku</b></label>
        <input type="password" placeholder="Unesi lozinku" name="psw" required/>
            
        <button type="submit" className="loginbuttons" id="colsub1">Prijavi se</button>
        
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