import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Login from "./Login";
import Register from "./Register";


const Header = () => {

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    return ( 
        
<div className="header">
        <button  onClick={() => setIsOpenLogin(true)}  style={{width:"auto"}}  className="loginbuttons" id="login">Prijava</button>
        {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} />}

       

    <button onClick={() => setIsOpenRegister(true)} style={{width:"auto"}}className="loginbuttons" id="register">Registracija</button>
    {isOpenRegister && <Register setIsOpenRegister={setIsOpenRegister} />}
   

    <button type="button"  id="carbtn"><AiOutlineShoppingCart/></button>

        <div className="logo_container">
            <div id="logo"><img src={require('./HappyLogo.png')}  />
            </div>
        </div>

</div>
     );
}
 
export default Header;