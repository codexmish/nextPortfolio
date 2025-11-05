import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

const page = () => {
  return (
    <>
      <Banner />
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
    </>
  );
};

export default page;
