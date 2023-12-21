import { LayoutX } from "./LayoutX";
import { Heading } from "./Text";
import type { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <LayoutX
      className="min-h-[504px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <Heading as="h1" className="mb-8">
        {title}
      </Heading>
      <div className="max-w-[480px]">{description}</div>
    </LayoutX>
  );
};
