import gsap from "gsap"; // npm install gsap
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const initNavAnimation = () => {
  const links = document.querySelectorAll(".nav-item a");
  const activeNav = document.querySelector(".active-nav");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      //! Turns nav orange when clicked
      gsap.to(link, { color: "#DCA14D" });

      //! Turns nav white when not clicked
      links.forEach((item) => {
        if (item !== link) {
          gsap.to(item, { color: "#fff" });
        }
      });

      if (document.activeElement === link) {
        gsap.to(link, {
          color: "#DCA14D",
        });
      }

      //! to move the line
      const state = Flip.getState(activeNav);
      link.appendChild(activeNav);
      Flip.from(state, {
        duration: 1,
        absolute: true,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
};

export default initNavAnimation;
