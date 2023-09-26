import About from '../About';
import Banner from '../Banner';
import Services from '../Services/Services';
import Products from '../Products/Products';
import Contact from '../Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
        </div>
    );
};

export default Home;