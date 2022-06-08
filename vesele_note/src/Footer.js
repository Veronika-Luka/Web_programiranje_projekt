import React from "react";
import { Link } from 'react-router-dom';
import { BsInstagram,BsFacebook,BsTwitter,BsYoutube } from "react-icons/bs";
import {RiVisaFill} from "react-icons/ri"
import {FaCcMastercard, FaCcDinersClub} from "react-icons/fa"
import {SiAmericanexpress} from "react-icons/si"
import {GiMoneyStack} from "react-icons/gi"

const Footer = () => {
    return (  
        <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h5><b>Kontaktirajte nas</b></h5>
              <h10 className="list-unstyled">
                <li>OIB: 49596778940304</li>
                <li>Adresa: Ulica Stjepana Radića 1c, Nova Gradiška</li>
                <li><b>Korisnička podrška</b></li>
                <li>Tel: 035 246 355 </li>
                <li>E-mail: info@veselenote.hr </li>
                <li>Radno vrijeme korisničke podrške:</li>
                <li>08:00 - 16:00</li>
              </h10>
            </div>
            {/* Column2 */}
            <div className="col">
              <h5><b>Naše trgovine</b></h5>
              <h10 className="list-unstyled">
                <li>Nova gradiška 035/246 355</li>
                <li>Požega 034/246 355</li>
                <li>Radno vrijeme:</li>
                <li>08:00 - 16:00</li>
              </h10>
            </div>
            
            {/* Column3 */}
            {/* <div className="col">
              <h5><b>Društvene mreže</b></h5>
              <h10 className="list-unstyled">
                <li><a href="https://instagram.com/" target="_blank"><BsInstagram className="instagram"/></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook className="facebook"/></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter className="twitter"/></a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><BsYoutube className="youtube"/></a></li>
              </h10>
            </div> */}
            <div className="col">
              <h5><b>Društvene mreže</b></h5>
              <ul className="list-unstyled">
                <li><a href="https://instagram.com/" target="_blank"><BsInstagram className="instagram"/></a>
                    <a href="https://www.facebook.com/" target="_blank" alt="Facebook"><BsFacebook className="facebook"/></a>
                </li>
                <li><a href="https://twitter.com/" target="_blank"><BsTwitter className="twitter"/></a>
                <a href="https://www.youtube.com/" target="_blank"><BsYoutube className="youtube"/></a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5><b>Načini plaćanja</b></h5>
              <ul className="list-unstyled">
                <li><a href="https://www.visa.com.hr/" target="_blank"><RiVisaFill className="visa"/></a>
                  <a href="https://www.mastercard.hr/hr-hr.html" target="_blank"><FaCcMastercard className="mastercard"/></a>
                </li>
                <li><a href="https://www.americanexpress.com/hr/network/" target="_blank"><SiAmericanexpress className="american"/></a>
                    <a href="https://www.diners.hr/hr" target="_blank"><FaCcDinersClub className="diners"/></a>
                </li>
                <li><a><GiMoneyStack className="money"/></a></li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
};
 
export default Footer;