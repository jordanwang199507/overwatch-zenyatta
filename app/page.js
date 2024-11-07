"use client";
import { useEffect, useRef } from "react";
import images from "@/public/images";
import Image from "next/image";

export default function Home() {
  const orbeslider = useRef(null);
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="max-w-[1420px] mx-auto h-full">
          <section className="h-full px-8 sm:px-16 relative text-center">
            {/* <div
              // ref={sliderRef}
              className="slider"
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
            </div> */}
            <Image
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
            />
            {/* <div className="h-[70vh] min-h-[700px] w-full relative"> */}
            <Image
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
            />
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
              {/* <Image
                src={images.zenyatta}
                height={690}
                width={690}
                alt="zenyatta image"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-no-repeat bg-center bg-[auto_130%] z-[1] w-full max-w-[750px] h-[75vh] max-h-[750px] min-h-[600px]"
              /> */}
              <h1
                data-content="ZENYATTA"
                // className="zenyatta drop-shadow-[5px_5px_10px_#000000]"
                className="zenyatta uppercase text-[200px] font-nippo text-primary relative bottom-0 leading-none font-bold"
              >
                ZENYATTA
              </h1>
              <div className="model"></div>
              {/* </div> */}
            </div>
          </section>
          {/* <div className="py-60 w-full relative"></div> */}
        </div>
      </div>
    </>
  );
}
