import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../my-components/navbar2";
import Section1 from "../my-components/Intro-section";
import Tecnologies from "../my-components/Tecnologies";
import Aboutme from "../my-components/About-me";
import MyProyects from "../my-components/MyProyects";
import Testimonials from "../my-components/Testimonials";
import Faq from "../my-components/Faq";
import Portafolio from "../my-components/Portafolio";
import GetStarted from "../my-components/GetStarted";
import Footer from "../my-components/Footer";

function App() {
  return (
    <>
      <Home />
      <Section1 />
      <Tecnologies />
      <Aboutme />
      <MyProyects />
      <Testimonials />
      <Faq />
      <Portafolio />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
