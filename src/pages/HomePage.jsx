import Brands from "../components/Brands";
import Navbar from "../components/Navbar";
import Numbers from "../components/Numbers";
import Treffen from "../components/Treffen";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Projekte from "../sections/Projekte";
import Reviews from "../sections/Reviews";
import Services from "../sections/Services";
import Products from "../sections/UberUns";

function HomePage() {
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
}

export default HomePage;
