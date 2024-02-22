import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
      <li>
            
            <a href="" class="fa fa-facebook"></a>

          </li>

          
          
          <li>
          <a  href="https://www.linkedin.com/in/mohamed-ennaem-000597227" class="fa fa-linkedin"></a>
          </li>
          
          <li>
          <a href="https://github.com/mohamedennaema" class="fa fa-github"></a>
          </li>
          <li>
          <a href="https://wa.me/+212650766195" class="fa fa-whatsapp"></a>
         
          </li>
      </ul>

      <p>© 2023 Ennaem Mohamed. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
