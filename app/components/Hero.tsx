"use client";

import { Button } from "./Button";
import Image from "next/image";
import { LayoutX } from "./LayoutX";
import { Heading, Text } from "./Text";
import type { StaticImageData } from "next/image";
import arrow from "@/public/assets/down-arrow.svg";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { rajdhani } from "../fonts";

interface HeroProps {
  title: string;
  description: string;
  image: StaticImageData;
  buttonLabel: string;
  link: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image,
  buttonLabel,
  link,
}) => {
  const [animateArrow, setAnimateArrow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateArrow(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 300, easing: "ease-in", once: true, delay: 25 });
  }, []);

  return (
    <LayoutX
      className="min-h-[95vh] bg-no-repeat bg-cover bg-right md:bg-center relative"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="pt-10 md:pt-32">
        <Heading
          as="h1"
          className={`mb-3 md:mb-5 text-slate-100 drop-shadow-md ${rajdhani.className} antialiased`}
          data-aos="fade-in"
        >
          {title}
        </Heading>
        <Text
          size="super"
          as="h2"
          className="max-w-[360px] mb-4 md:mb-5 drop-shadow-sm text-gray-900"
          data-aos="fade-in"
        >
          {description}
        </Text>
        <Button type="button" link={link} color="dark">
          {buttonLabel}
        </Button>
      </div>
      <div
        className={`absolute bottom-0 left-1/2 mb-12 z-10 ${
          animateArrow ? "animate-bounce" : ""
        }`}
      >
        <Image src={arrow} alt="Down Arrow" />
      </div>
    </LayoutX>
  );
};
