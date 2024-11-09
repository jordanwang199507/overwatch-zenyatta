"use client";
import { useEffect, useRef } from "react";
import images from "@/public/images";
import Image from "next/image";
import { MouseParallax } from "react-just-parallax";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sliderRef = useRef(null);
  const orbeslider = useRef(null);
  const orbesRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.to(".model", {
        y: 200,
        scrollTrigger: {
          trigger: ".model",
          start: "30% 35%",
          end: "20% 20%",
          markers: true,
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      });
      const orbes = gsap.utils.toArray(orbesRef.current.children);
      orbes.forEach((orbe) => {
        gsap.to(orbe, {
          y: 30 * (orbes.indexOf(orbe) + 5),
          rotation: 360,
          scrollTrigger: {
            trigger: ".model",
            start: "center center",
            end: "40% 35%",
            markers: true,
            scrub: true,
            toggleActions: "restart pause reverse pause",
          },
        });
      });
    }
  }, []);

  return (
    <>
      <div className="w-full h-[120vh] relative overflow-hidden">
        <div className="max-w-[1420px] mx-auto h-full">
          <section className="h-full px-8 sm:px-16 relative text-center">
            {/* <Image
              src={images.arrowRight}
              height={200}
              width={100}
              alt="arrow decor"
              className="absolute top-0 left-0"
            />
            <Image
              src={images.arrowLeft}
              height={100}
              width={400}
              alt="arrow decor"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            /> */}
            {/* <Image
              src={images.orangeBlockLarge}
              width={350}
              height={160}
              alt="orange block decor"
              className="absolute top-40 left-40"
            />
            <Image
              src={images.orangeBlockSmall}
              width={322}
              height={95}
              alt="orange block decor"
              className="absolute bottom-40 lg:left-24 xl:left-32"
            />
            <Image
              src={images.greyBlockLarge}
              height={150}
              width={245}
              alt="grey block decor"
              className="right-10 xl:right-72 absolute top-20"
            /> */}
            <MouseParallax strength={0.07}>
              <div ref={orbesRef}>
                <Image
                  src={images.orbe}
                  height={100}
                  width={100}
                  alt="orbe"
                  className="absolute top-40 left-20 orbe z-[3]"
                />
                <Image
                  src={images.orbe}
                  height={50}
                  width={50}
                  alt="orbe"
                  className="absolute bottom-1/2 left-20 orbe z-[3]"
                />
                <Image
                  src={images.orbe}
                  height={75}
                  width={75}
                  alt="orbe"
                  className="absolute left-1/2 top-20 orbe z-[3]"
                />
                <Image
                  src={images.orbe}
                  height={100}
                  width={100}
                  alt="orbe"
                  className="absolute bottom-[500px] right-0 orbe z-[3]"
                />
                <Image
                  src={images.orbe}
                  height={150}
                  width={150}
                  alt="orbe"
                  className="absolute top-56 right-10 orbe z-[3]"
                />
              </div>
            </MouseParallax>
            <div
              className="orbeslider"
              ref={orbeslider}
              style={{ "--orbequantity": 10 }}
            >
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="orbe"
                  style={{ "--orbeposition": index + 1 }}
                >
                  <img
                    src="/images/orbe.png"
                    width={85}
                    height={85}
                    alt="orbe"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 h-max w-full flex flex-wrap justify-center items-center w-min-[(1400px, 100vw)]">
              <h1
                data-content="ZENYATTA"
                id="title"
                className="zenyatta uppercase text-[200px] font-nippo text-primary relative -top-[300px] leading-none font-bold"
              >
                ZENYATTA
              </h1>
              <div className="model"></div>
              <div
                ref={sliderRef}
                className="slider opacity-1 mt-10"
                style={{ "--quantity": 10 }}
              >
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="item"
                    style={{ "--position": index + 1 }}
                  >
                    <img src={`/images/card${index + 1}.png`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="py-60 w-full relative"></div>
        </div>
      </div>
    </>
  );
}
