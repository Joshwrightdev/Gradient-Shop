import React from "react";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear;
  return <div className="footer">{year} © gradient.store</div>;
};

export default Footer;
