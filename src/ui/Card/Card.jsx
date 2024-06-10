import { useLocation, useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/desktop/icon-arrow-right.svg";
import Button from "../Button";
import "./Card.scss";

const Card = ({ image, heading, to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname === to) window.location.reload();
    else navigate(to);
  };

  return (
    <div className="card">
      <img src={image} alt="product" className="card__image" />
      <h6 className="card__heading">{heading}</h6>
      <Button kind="text" onClick={() => handleNavigation()}>
        Shop{" "}
        <span>
          <img src={ArrowIcon} alt="arrow right icon" />
        </span>
      </Button>
    </div>
  );
};

export default Card;
