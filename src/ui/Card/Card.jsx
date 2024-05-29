import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/desktop/icon-arrow-right.svg";
import Button from "../Button";
import "./Card.scss";

const Card = ({ image, heading, to }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={image} alt="product" className="card__image" />
      <h6 className="card__heading">{heading}</h6>
      <Button kind="text" onClick={() => navigate(to)}>
        Shop{" "}
        <span>
          <img src={ArrowIcon} alt="arrow right icon" />
        </span>
      </Button>
    </div>
  );
};

export default Card;
