import { AiFillHome,AiOutlineCaretDown } from "react-icons/ai";




const Navbar = () => {
    return ( 
   
        <nav>
    <div className="topnav">
        <a className="active" href="#"><AiFillHome/></a>
        <div className="dropdown">
            <button className="dropbtn">Gitare
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <a href="#">Klasične gitare</a>
              <a href="#">Akustične gitare</a>
              <a href="#">Električne gitare</a>
              <a href="#">Bas gitare</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Klavijature
              <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <a href="#">Synthesizeri</a>
              <a href="#">Digitalna pianina</a>
              <a href="#">Navlake i koferi</a>
              
            </div>
        </div>  
        <div className="dropdown">
            <button className="dropbtn">Bubnjevi
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <a href="#">Setovi</a>
              <a href="#">Činele</a>
              <a href="#">Palice</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Razglasi
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <a href="#">Pojačala</a>
              <a href="#">Mikseri</a>
              <a href="#">Zvučnici</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Ostalo
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <a href="#">Mikrofoni</a>
              <a href="#">Slušalice</a>
              <a href="#">Trzalice</a>
              <a href="#">Žice</a>
            </div>
        </div>
        <form className="search" >
            <input type="search" placeholder="Traži..." name="search2"/>
            <button type="submit" className="btnSearch">Traži...</button>
          </form>
     
      </div>
      
        
</nav>
     );
}
 
export default Navbar;