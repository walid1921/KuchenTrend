import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Products from "./sections/UberUns";
import Projekte from "./sections/Projekte";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import Numbers from "./components/Numbers";
import Treffen from "./components/Treffen";
import CopyRight from "./components/CopyRight";

const App = () => {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <Products />

      <Projekte />

      <Brands />

      <Services />

      <Reviews />

      <Numbers />

      <Treffen />

      <Footer />

      <CopyRight />
    </main>
  );
};

export default App;
