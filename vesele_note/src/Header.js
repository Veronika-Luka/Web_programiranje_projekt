
import { AiOutlineShoppingCart } from "react-icons/ai";

 

import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Header = () => {

   
    



    return ( 
        
<div className="header">

        <Link to="/favorites"><button style={{width:"auto"}}  className="loginbuttons" id="login">Favoriti</button></Link>
   

        <Link type="button"  id="carbtn" to="/cart"><AiOutlineShoppingCart/></Link>

        <div className="logo_container">
            <div id="logo"><img src={require('./HappyLogo.png')}  />
            </div>
        </div>
        

</div>
     );
}
 
export default Header;