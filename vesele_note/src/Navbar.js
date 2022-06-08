import { useState } from "react";
import { AiFillHome,AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";




const Navbar = () => {

  const [searchTerm, setSearchTerm]= useState("")
    return ( 
   
        <nav>
    <div className="topnav">
        <Link to="/" className="active"><AiFillHome className="homebutton"/></Link>
        <Link to="/cards/gitara" className="dropdown" >
            <button className="dropbtn">Gitare
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <Link className="links" to="/cards/klasicna">Klasične gitare</Link>
              <Link className="links" to="/cards/akusticna">Akustične gitare</Link>
              <Link className="links" to="/cards/elektricna">Električne gitare</Link>
              <Link className="links" to="/cards/bas">Bas gitare</Link>
            </div>
        </Link>
        <Link to="/cards/klavijatura" className="dropdown">
            <button className="dropbtn">Klavijature
              <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <Link className="links" to="/cards/synthesizer">Synthesizeri</Link>
              <Link className="links" to="/cards/pianino">Digitalna pianina</Link>
              <Link className="links" to="/cards/navlaka">Navlake i koferi</Link>
              
            </div>
         </Link>
        <Link to="/cards/bubnjevi" className="dropdown">
            <button className="dropbtn">Bubnjevi
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
              <Link className="links" to="/cards/set">Setovi</Link>
              <Link className="links" to="/cards/cinela">Činele</Link>
              <Link className="links" to="/cards/palica">Palice</Link>
            </div>
        </Link>
        <Link to="/cards/razglas" className="dropdown">
            <button className="dropbtn">Razglasi
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
            <Link className="links" to="/cards/pojacalo">Pojačala</Link>
            <Link className="links" to="/cards/mikser">Mikseri</Link>
            <Link className="links" to="/cards/zvucnik">Zvučnici</Link>
            </div>
        </Link>
        <Link to="/cards/ostalo" className="dropdown">
            <button className="dropbtn">Ostalo
            <AiOutlineCaretDown/>
            </button>
            <div className="dropdown-content">
            <Link className="links" to="/cards/mikrofon">Mikrofoni</Link>
            <Link className="links" to="/cards/slusalica">Slušalice</Link>
            <Link className="links" to="/cards/trzalica">Trzalice</Link>
            <Link className="links" to="/cards/zica">Žice</Link>
            </div>
        </Link>
        <form className="search" >
            <input type="search" 
            placeholder="Traži..." name="search2" 
            onChange={(e) => {setSearchTerm(e.target.value)}} 
            value={searchTerm} 
            />
            <Link to={`/search/${searchTerm}`}  className="btnSearch" type="submit"></Link>
          </form>
     
      </div>
      
        
</nav>
     );
}
 
export default Navbar;