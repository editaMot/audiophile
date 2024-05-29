import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./ui/Loader";
import ScrollToTop from "./ui/ScrollToTop";
import RoutesConfig from "./utils/RoutesConfig";
import ToasterConfig from "./utils/ToasterConfig";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <ScrollToTop />
          <RoutesConfig />
        </BrowserRouter>
      </Suspense>
      <ToasterConfig />
    </>
  );
}

export default App;
