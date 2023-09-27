import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../my-components/navbar2";
import Section1 from "../my-components/Intro-section";
import Tecnologies from "../my-components/Tecnologies";
import Aboutme from "../my-components/About-me";
import Testimonials from "../my-components/Testimonials";
import Portafolio from "../my-components/Portafolio";
import GetStarted from "../my-components/GetStarted";
import Footer from "../my-components/Footer";
import Faq from "../my-components/Preguntas";


function App() {
  return (
    <>
      <Home />
      <Section1 />
      <Aboutme />
      <Faq />
      <Tecnologies />
      <Portafolio />
      <Testimonials />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
