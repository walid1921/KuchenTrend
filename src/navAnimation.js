import gsap from "gsap"; // npm install gsap
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const initNavAnimation = () => {
  const links = document.querySelectorAll(".nav-item a");
  const activeNav = document.querySelector(".active-nav");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      //! Turns nav Blue
      gsap.to(links, { color: "#f5f5f5" });

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
