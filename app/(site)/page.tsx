import { Hero } from "@/app/components/Hero";
import HowItWorks from "@/app/components/HowItWorks";
import image from "@/public/assets/divers.webp";

const Homepage: React.FC = () => {
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
      <HowItWorks />
    </>
  );
};

export default Homepage;
