import Logo from "../Logo";
import Navigation from "../Navigation";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__dash"></span>
      <Logo isInFooter={true} />
      <Navigation isInFooter={true} />
      <p className="footer__text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
      <SocialMedia isInFooter={true} />
    </footer>
  );
};

export default Footer;
