import React from 'react'
import '../layout/layout.css'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <section className='footer_section'>
        <div className='footer container'>
          <div className="footer_wrapper">
            <div className="footer_top_logo">
                <div className='logo'>
                  <img src="images/logo01.jpg" alt="logo" />
                </div>
                <div className='comInfo'>
                    <p className='pera'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
            </div>
            <div className="footer_top_text">
                <div className="features">
                    <p className='pera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi sint et debitis odit vel dolorum. Maiores minima numquam nesciunt!</p>
                </div>
                <div className="features">
                    <p className='pera'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nihil nesciunt atque?</p>
                </div>
            </div>   
          </div>
           
          <div className='footerCopy'>
            <div>
              <p className='footer-text'><span>Copyright &copy; </span> The Little Taco Shop</p>
            </div>
            <div className='icon'>
              <Link className='react-icon' to="https://www.facebook.com"><CiFacebook /></Link>
              <Link className='react-icon' to="https //www.whatsapp.com"><FaWhatsapp /></Link>
              <Link className='react-icon' to="https //www.youtube.com"><CiYoutube /></Link>
            </div>
            <div className='policy'>
              <p>Privacy policy</p>
              <p>Terms & condition</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
   
  )
}

export default Footer