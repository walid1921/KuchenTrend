import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Offers from "./sections/Offers";
import Products from "./sections/UberUns";
import Quality from "./sections/Quality";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Subscribe from "./sections/Subscribe";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative">
        <Navbar />

        <Hero />
      

      <Products />

      <Quality />

      <Services />

      <Offers />

      <Reviews />

      <Subscribe />

      <Footer />
    </main>
  );
};

export default App;
