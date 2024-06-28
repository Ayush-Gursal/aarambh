import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* First container */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>Address</h3>
          <p>S.no.22, flat no 101, Kamalacity, building B, </p>
          <p>wing B, near rajas societ, Katraj, </p>
          <p>Pune-411046, Maharashtra - INDIA</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Toll Free: 1-800-123-4567</p>
          <p>
            Website: <a href="https://example.com">example.com</a>
          </p>
        </div>
      </div>

      {/* Second container */}
      <div className="footer-section">
        <h3>Powered By</h3>
        <p>GDB Learning Solutions Pvt Ltd.</p>
        <img src="../public/images/logo.jpg" alt=" " className="logo-icon" />
      </div>

      {/* Third container */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>Follow us on Social Media</h3>
          <div className="social-icons">
            <a href="https://instagram.com">
              <img src="../public/images/insta.webp" alt="Instagram" />
            </a>
            <a href="https://twitter.com">
              <img src="../public/images/twitter.jpg" alt="Twitter" />
            </a>
            <a href="https://facebook.com">
              <img src="../public/images/fb.jpg" alt="Facebook" />
            </a>
            <a href="https://linkedin.com">
              <img src="../public/images/linkdin.jpg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
