import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './FooterStyles.css'
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.Linkedin.com">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://github.com/RaafatMarzuq/Book-store">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </li>
       
      </ul>
    </footer>
  );
};

export default Footer;
