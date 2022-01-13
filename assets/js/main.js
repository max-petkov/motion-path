gsap.registerPlugin(MotionPathPlugin);

gsap.set(".sphere", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%",
});

const timeline = gsap.timeline();
const spheres = document.querySelectorAll(".sphere");

spheres.forEach((sphere, i) => {
  timeline
    .to(sphere, {
      delay: () => {
        if (!i) return 0;
        else return 3;
      },
      ease: "none",
      duration: 30,
      repeat: -1,
      motionPath: {
        path: "#ovalPath",
        align: "#ovalPath",
      },
    })
    .to(
      sphere,
      {
        autoAlpha: 1,
        stagger: 1,
      },
      "<"
    );
});

//Js - Heading animation
const heroTitle = document.querySelector(".hero__title");

function splitWord(container, text) {
  const splitText = text.split(" ").map((word, i) => {
    return `<span class="o-hidden hero__word-container"><span class="hero__word">${word}&nbsp;</span></span>`;
  });

  container.innerHTML = splitText.join("");
}

splitWord(heroTitle, heroTitle.textContent);
gsap.to(".hero__word", {
  delay: 0.3,
  y: "-4px",
  ease: Power4.easeOut,
  duration: 0.5,
  stagger: 0.03,
});
gsap.to(".hero__word", {
  delay: 0.3,
  autoAlpha: 1,
  ease: Power4.easeOut,
  duration: 1,
  stagger: 0.03,
});
