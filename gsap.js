import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}




export * from "gsap/dist/gsap";
export * from "gsap/dist/ScrollTrigger";