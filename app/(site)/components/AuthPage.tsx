"use client";

import Image from "next/image";
import { Heading } from "./Text";
import AuthForm from "../components/AuthForm";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { rajdhani } from "../fonts";
import image from "@/public/assets/jellyfish-background.jpg";

interface AuthPageProps {
  title: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ title }) => {
  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in", once: true, delay: 25 });
  }, []);

  const pathname = usePathname();

  let variant = "";

  if (pathname === "/register") {
    variant = "REGISTER";
  } else if (pathname === "/login") {
    variant = "LOGIN";
  }

  return (
    <div
      className="flex min-h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8 bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="max-w-xs sm:max-w-sm">
        <Image
          alt="logo"
          height={40}
          width={40}
          className="mx-auto w-auto"
          src={"/assets/logo.png"}
        />
        <Heading
          size="subheading"
          className={`text-center mt-6 tracking-tight bg-sky-950 text-background p-2 ${rajdhani.className} antialiased`}
          data-aos="fade-in"
        >
          {title}
        </Heading>
      </div>
      <AuthForm variant={variant} />
    </div>
  );
};

export default AuthPage;
