import React from "react";
import { useRef } from "react";
import { gsap } from "../../gsap";
import { useIsomorphicLayoutEffect } from "../../helpers/useIsomorphicEffect";

export default function Hero() {
  const herotext = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".heading", 1, {
        autoAlpha: 0,
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 0.5,
        },
      });
    }, herotext);

    const slideInText = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-intro-statment",
        start: "top  center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });

    slideInText.from(".hero-text-2", {
      y: 100,
      opacity: 0,
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-text" ref={herotext}>
        <h1 className="heading">Xyz </h1>
        <h1 className="heading ph-text">Photography</h1>
      </div>
      <div className="page-intro-image">
        <img
          src="https://res.cloudinary.com/mosesjayz/image/upload/v1692219352/xyz-%20photography/xyzbg_mzowkn_1_iiufwf.jpg"
          alt="kids playing "
          className="hero-img
        "
        />
      </div>
      <div className="page-intro-statement">
        <p className="hero-text-2">
          This is where we caputre the rare momemts{" "}
        </p>
      </div>
    </div>
  );
}
