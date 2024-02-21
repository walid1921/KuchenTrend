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

const App = () => {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <Products />

      <Projekte />

      <div className="section flex flex-col gap-8 ">
        <Brands />
        <Brands direction="right" paddingTop={"20px"} />
      </div>

      <Services />

      <Reviews />

      <Numbers />

      <Treffen />

      <Footer />
    </main>
  );
};

export default App;
