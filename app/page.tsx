import { Hero } from "@/components/Hero";
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
        buttonLabel="Find"
      />
    </>
  );
};

export default Homepage;
