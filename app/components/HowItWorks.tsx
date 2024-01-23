"use client";

import rocks from "@/public/assets/rocks.png";
import Image from "next/image";
import underwater from "@/public/assets/underwater.jpeg";
import { Text, Heading } from "./Text";
import { rajdhani } from "../fonts";
import { LayoutX } from "./LayoutX";
import Link from "next/link";
import "@/styles/step.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface StepProps {
  step: {
    title: string;
    description: string;
    link: string;
  };
  index: number;
}

const HowItWorks: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in", once: true, delay: 25 });
  }, []);

  const steps = [
    {
      title: "Register",
      description:
        "Begin your journey by creating an account and joining our vibrant community",
      link: "/register",
    },
    {
      title: "Search",
      description:
        "Explore the diverse dive community by searching for a buddy using various criteria and save your favorite diving buddies",
      link: "/search",
    },
    {
      title: "Connect",
      description:
        "Contact your newfound buddy through our integrated messaging feature and dive together",
      link: "/messenger",
    },
  ];
  return (
    <section
      className="min-h-full relative bg-cover bg-no-repeat bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${underwater.src})` }}
    >
      <Image
        src={rocks}
        alt="rocks"
        priority={true}
        className="absolute left-[5%] bottom-[95%] md:bottom-[87%] animate-fadein"
      />
      <LayoutX>
        <div className="text-primary md:text-background md:max-w-[70%] text-center md:text-left md:mx-auto pt-20 md:pt-52 lg:pt-36 pb-14">
          <Text
            size="super"
            as="p"
            className="pb-7 md:indent-6"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Introducing{" "}
            <span className="text-secondary font-extrabold text-2xl">
              Ocean Buddies
            </span>
            , a groundbreaking platform designed to seamlessly connect diving
            enthusiasts, making the process of finding dive buddies and planning
            ocean explorations easier than ever before.
          </Text>
          <Text
            size="super"
            as="p"
            className="md:indent-6"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            It is not just about finding dive partners; it's about creating a
            supportive community that fosters a love for scuba diving, making it
            easy for users to connect with like-minded individuals and embark on
            underwater adventures with confidence.
          </Text>
        </div>
        <Heading
          size="subheading"
          className={`text-primary md:text-secondary drop-shadow-md py-10  ${rajdhani.className} antialiased`}
          data-aos="fade-in"
        >
          How It Works
        </Heading>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="flex flex-col md:flex-row items-center justify-center gap-12 flex-wrap pb-20"
        >
          {steps.map((step, index) => {
            return <Step key={index} index={index} step={step} />;
          })}
        </div>
      </LayoutX>
    </section>
  );
};

const Step: React.FC<StepProps> = ({ step, index }) => {
  return (
    <Link href={step.link} className="group">
      <article className="drop max-w-[350px] max-h-[350px] relative flex flex-col justify-center items-center flex-wrap p-5 transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
        <div className="content flex justify-center items-center flex-col text-center">
          <Text
            size="super"
            as="p"
            className="transition-all duration-300 ease-in-out group-hover:scale-50"
          >
            {index + 1}
          </Text>
          <Text size="super" as="h2" className="text-background uppercase">
            {step.title}
          </Text>
          <Text size="nav" as="h2" className="text-background">
            {step.description}
          </Text>
        </div>
      </article>
    </Link>
  );
};
export default HowItWorks;
