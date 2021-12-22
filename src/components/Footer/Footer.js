import React from "react";
import logo from "assets/icons/logo.svg";
import Facebook from "assets/icons/facebook.svg";
import Twitter from "assets/icons/twitter.svg";
import Instagram from "assets/icons/instagram.svg";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
import Message from "assets/icons/message.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-head">
          <div className="subscribe">
            <h1>Subscribe !</h1>
            <p className="para">
              Join our newsletter to never miss any latest news.
            </p>
          </div>

          <div className="newsletter-cta">
            <input placeholder="Enter your e-mail address here" />
            <button> Join Us</button>
          </div>
        </div>

        <div className="footer-border">
          <div className="footer-border__up"></div>
        </div>

        <div className="footer-body">
          <div className="footer-body_cta">
            <div className="try-pitch">
              <h1>Try for free!</h1>
              <p>Get limited 1 week free try our features!</p>
            </div>

            <div className="ctas">
              <button className="learn-btn">Learn more</button>
              <button className="req-btn">
                Request Demo
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="footer-body_bottom">
            <div className="first">
              <div className="logo-container">
                <img src={logo} alt="logo" />
                <h2 className="logo-name">Insignia</h2>
              </div>

              <address className="info-container">
                <p>
                  Insignia Society, 234 <br />
                  Bahagia Ave Street PRBW 29281
                </p>

                <p>
                  <a href="mailto:info@insignia.com">info@insignia.com</a>{" "}
                  <br />
                  1-232-3434 (Main)
                </p>
              </address>
            </div>

            <div className="second">
              <h3> About</h3>
              <li>Profile</li>
              <li>Features</li>
              <li>Careers </li>
              <li>DW News</li>
            </div>

            <div className="third">
              <h3> Help</h3>
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide </li>
              <li>Reports</li>
              <li>Q & A</li>
            </div>

            <div className="fourth">
              <h3>Social Media</h3>
              <div className="social-icons">
                <div className="social-logo">
                  <img src={Facebook} alt="facebook" />
                </div>
                <div className="social-logo">
                  <img src={Twitter} alt="twitter" />
                </div>
                <div className="social-logo">
                  <img src={Instagram} alt="instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-end">
          <p className="copyright">© Insignia™, 2020. All rights reserved.</p>
          <div className="msgIcon-container">
            <img src={Message} alt="message" />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
