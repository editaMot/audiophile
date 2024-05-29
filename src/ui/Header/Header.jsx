import { useLocation } from "react-router-dom";
import Cart from "../Cart";
import Logo from "../Logo";
import Navigation from "../Navigation";
import PageHeader from "../PageHeader";
import "./Header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const pathnames = ["/headphones", "/speakers", "/earphones"];

  return (
    <>
      <header className="header">
        <Logo />
        <Navigation />
        <Cart />
      </header>
      {pathnames.includes(pathname) && <PageHeader title={pathname} />}
    </>
  );
};

export default Header;
