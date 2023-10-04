import About from "../About";
import Banner from "../Banner";
import Services from "../Services/Services";
import Products from "../Products/Products";
import Contact from "../Contact";
import Choose from "../Choose";
import Team from "../Team";
import Testimonials from "../Testimonials";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Car Doctor | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
      <Choose></Choose>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
