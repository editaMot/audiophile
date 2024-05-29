import { useNavigate } from "react-router-dom";
import LogoSvg from "../../assets/desktop/logo.svg";
import "./Logo.scss";

const Logo = ({ isInFooter }) => {
  const navigate = useNavigate();
  return (
    <img
      src={LogoSvg}
      alt="logo"
      className={`logo ${isInFooter && `logo--footer`}`}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
