import React from "react";
import "./footer_grid.scss";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <div className="address_container">
            <h1 className="footer_logo">Furniro.</h1>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="link_container">
            <h3>Links</h3>
            <a href="/">Home</a>
            <a href="shop/">Shop</a>
            <a href="about/">About</a>
            <a href="contact/">Contact</a>
          </div>
          <div className="help_container">
            <h3>Help</h3>
            <a href="privacy/">Payment Options</a>
            <a href="terms/">Returns</a>
            <a href="policy/">Privacy Policies</a>
          </div>
          <div>
            <h3 className="newsletter_heading">Newsletter</h3>
            <div className="newsletter_form">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="email_input"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="footer_copyright">
        <hr />
        <span>2023 furino. All rights reverved</span>
      </div>
    </>
  );
};

export default Footer;
