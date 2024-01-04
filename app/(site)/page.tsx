"use client";

import { Hero } from "@/app/(site)/components/Hero";
import Search from "@/app/(site)/components/Search";
import image from "@/public/assets/divers.webp";
import { useState } from "react";

const Homepage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const homeHero = {
    title: "Find Dive Buddies",
    description:
      "Dive safely. Explore the underwater world with like-minded professionals",
  };
  return (
    <>
      <Hero
        title={homeHero.title}
        description={homeHero.description}
        image={image}
        buttonLabel="Join"
        link="/register"
      />
      {isLoggedIn && <Search />}
    </>
  );
};

export default Homepage;
