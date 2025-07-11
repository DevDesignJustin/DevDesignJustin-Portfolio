import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Button from "../components/Button";
import Nav from "./Nav";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  useGSAP(() => {
    let splitTitle = SplitText.create(".title", { type: "chars, words" });
    let splitGreeting = SplitText.create(".greeting", { type: "chars, words" });
    let splitIntro = SplitText.create(".introduction", {
      type: "chars, words",
    });
    let splitSubtitle = SplitText.create(".subtitle", { type: "chars, words" });
    let splitTech = SplitText.create(".tech-stack", { type: "chars, words" });
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
      .from(
        splitTitle.chars,
        {
          opacity: 0,
          x: 159,
          stagger: 0.05,
          ease: "power3",
        },
        0
      )
      .from(
        splitIntro.words,
        {
          opacity: 0,
          x: 159,
          stagger: 0.05,
          ease: "power3",
        },
        0
      )
      .from(
        ".button",
        {
          opacity: 0,
          y: 100,
          stagger: 0.05,
          ease: "power3",
        },
        0
      );

    tl.from(
      ".icon",
      {
        opacity: 0,
        x: 100,
        ease: "power3",
      },
      0
    )
      .from(
        splitSubtitle.chars,
        {
          opacity: 0,
          x: 100,
          stagger: 0.05,
          ease: "power3",
        },
        0
      )
      .from(
        ".main-project-img",
        {
          opacity: 0,
          x: 100,
          ease: "power3",
        },
        0
      )
      .from(
        splitTech.chars,
        {
          opacity: 0,
          x: 100,
          stagger: 0.05,
          ease: "power3",
        },
        0
      )
      .from(".line", {
        // opacity: 0,
        width: 0,
        ease: "power3",
      })
  });

  return (
    <header className="main-header h-dvh">
      <Nav />
      <div className="container h-full relative flex">
        <div className="flex-col header-content abs-center-y">
          <h6 className="greeting">Hi, I'm</h6>
          <h1 className="title name mt-4 mb-1">Justin Kim</h1>
          <h3 className="introduction text-2xl w-64">
            I make unique <span>experiences</span>, not plain websites
          </h3>
          <div className="buttons flex">
            <Button message="My Work" type="outline" arrow={true} />
            <Button message="Contact Me" type="transparent" arrow={true} />
          </div>
        </div>
        <div className="header-project w-[400px] h-[300px] flex-col right-12 abs-center-y ">
          <Subtitle
            message="GTA VI Landing  Page Clone"
            icon="/images/icons/folder.svg"
          />
          <img
            src="/images/GTA6.png"
            alt=""
            className="w-100 main-project-img border-2 border-white"
          />
          <div className="flex items-center">
            <p className="tech-stack mt-3 text-[14px]">
              React • TailwindCss • Gsap
            </p>
            <div className="line w-[220px] ml-[43px] mt-[11px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
