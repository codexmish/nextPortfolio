import About from "./Components/About";
import Banner from "./Components/Banner";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

const page = () => {
  return (
    <>
      <Banner />
      <Services/>
      <About/>
      <Portfolio/>
    </>
  );
};

export default page;
