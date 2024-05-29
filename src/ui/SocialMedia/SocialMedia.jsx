import FacebookIcon from "../../assets/desktop/icon-facebook.svg";
import InstagramIcon from "../../assets/desktop/icon-instagram.svg";
import TwitterIcon from "../../assets/desktop/icon-twitter.svg";
import "./SocialMedia.scss";

const SocialMedia = ({ isInFooter }) => {
  return (
    <div className={`social-media ${isInFooter && "social-media--footer"}`}>
      <a href="http://facebook.com" target="_blank" rel="noreferrer">
        <img
          src={FacebookIcon}
          alt="facebook icon"
          className="social-media__link"
        />
      </a>
      <a href="http://twitter.com" target="_blank" rel="noreferrer">
        <img
          src={TwitterIcon}
          alt="twitter icon"
          className="social-media__link"
        />
      </a>
      <a href="http://instagram.com" target="_blank" rel="noreferrer">
        <img
          src={InstagramIcon}
          alt="instagram icon"
          className="social-media__link"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
