import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Button from "../components/Button";
import Nav from "./Nav";

const Hero = () => {
  useGSAP(() => {
    let splitTitle = SplitText.create(".title", { type: "chars" });
    let splitGreeting = SplitText.create(".greeting", { type: "chars" });
    let splitIntro = SplitText.create(".introduction", { type: "chars" });
    // gsap.set(".greeting", {
    //   opacity: 0,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-header",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    tl.from(splitGreeting.chars, {
      opacity: 0,
      x: 159,
      stagger: 0.05,
      ease: "power3",
    })
      .from(splitTitle.chars, {
        opacity: 0,
        x: 159,
        stagger: 0.05,
        ease: "power3",
      })
      .from(splitIntro.chars, {
        opacity: 0,
        x: 159,
        stagger: 0.05,
        ease: "power3",
      })
      .from(".button", {
        opacity: 0,
        y: 100,
        // stagger: 0.05,
        ease: "power3",
      });
  });

  return (
    <header className="main-header h-dvh">
      <Nav />
      <div className="container h-full gfv">
        <div className="flex-col header-content abs-center-y">
          <h6 className="greeting">Hi, I'm</h6>
          <h1 className="title name mt-4 mb-1">Justin Kim</h1>
          <h3 className="introduction text-2xl w-64">
            I make unique <span>experiences</span>, not plain websites
          </h3>
          <Button message="My Work" type="outline" arrow={true} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
