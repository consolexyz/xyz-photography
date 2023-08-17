import React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "../../helpers/useIsomorphicEffect";


export default function Hero(){

    const herotext = useRef();

useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context( ()=>{

        gsap.from(".heading" , {
            autoAlpha: 0,
            y: 100 ,
            ease:"power4.out",
            delay:2,
            skewY:7,
            stagger: {
                amount: 0.5
            }
        })
    }, herotext)
    return () => ctx.revert();
}, [])

    
    return (
        <div className="hero-section" >
        <div className="hero-text" ref={herotext}>
        <h1 className="heading">Xyz </h1>
        <h1 className="heading ph-text">Photography</h1>
        </div>
       <img src="https://res.cloudinary.com/mosesjayz/image/upload/v1692219352/xyz-%20photography/xyzbg_mzowkn_1_iiufwf.jpg" alt= "kids playing " className="hero-img
        " /> 
        </div>
    )
}