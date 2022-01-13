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
