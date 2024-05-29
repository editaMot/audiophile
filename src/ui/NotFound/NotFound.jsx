import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-not-found">
      <span className="page-not-found__404">404</span>
      <span className="page-not-found__text">Page not found</span>
      <Button onClick={() => navigate("/")}>Return to homepage</Button>
    </div>
  );
};

export default NotFound;
