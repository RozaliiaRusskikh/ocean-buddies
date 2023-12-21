import { Hero } from "@/components/Hero";
import image from "@/public/asests/heroHome.jpg";

const Homepage: React.FC = () => {
  const homeHero = {
    title: "Find Dive Buddies around the world",
    description:
      "Dive safely with Ocean Buddies. Explore the underwater world with like-minded professionals",
  };
  return (
    <>
      <Hero
        title={homeHero.title}
        description={homeHero.description}
        image={image}
      />
    </>
  );
};

export default Homepage;
