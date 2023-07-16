import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_info-first">
          <div className="logo">
           
          </div>
          <p className="text">
            Receta is a global sharing platform that you can create recipes and view other users recipes: <br />
          Your Guide to Culinary Exploration: Unleashing the Chef Within
          </p>
        </div>
        <div className="footer_info-second">
<h3>Recipes</h3>
<ul>
  <li>Create Recipes</li>
  <li>All Recipes</li>
  <li>Main Dishes</li>
  <li>Soups</li>
  <li>Desserts</li>
  <li>Beverages</li>
</ul>
        </div>
        <div className="footer_info-third">
        <h3>Receta</h3>
<ul>
  <li>About Us</li>
  <li>Press</li>
  <li>Contact Us</li>
  <li>Help Center</li>
  <li>How it Works</li>
  <li>Privacy</li>
  <li>Terms</li>
</ul>
        </div>
        <div className="footer_info-forth">
          <h3>Stay in the loop</h3>
          <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <span className="button">
            <input type="email" placeholder="Enter your email address"/>
            <button>Subscibe Now</button>
          </span>
        </div>
      </div>
      <div className="copyright"></div>
    </>
  );
}

export default Footer;