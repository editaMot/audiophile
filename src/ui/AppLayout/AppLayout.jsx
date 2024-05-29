import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppLayout;
