function foo() {
  const mainNav = document.querySelector(".main-nav");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  hamburgerMenu.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });

  gsap.fromTo(".hero-clipped", { scaleX: -2 }, { duration: 1, scaleX: 1 });

  gsap.fromTo(
    ".logo",
    { x: -202, opacity: 0 },
    { duration: -1, delay: 0.5, x: 0, opacity: 1 }
  );

  gsap.fromTo(
    ".hamburger-menu",
    { x: 198, opacity: 0 },
    { duration: -1, delay: 1, x: 0, opacity: 1 }
  );

  gsap.fromTo(
    ".hero-textbox",
    { yPercent: 38, opacity: 0 },
    { duration: 0, delay: 1.3, yPercent: -50, opacity: 1 }
  );
}
