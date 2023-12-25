import { Button } from "./Button";
import { LayoutX } from "./LayoutX";
import { Heading, Text } from "./Text";
import type { StaticImageData } from "next/image";

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
  return (
    <LayoutX
      className="min-h-[50vh] sm:min-h-[95vh] bg-no-repeat bg-cover bg-right md:bg-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="pt-10 md:pt-32">
        <Heading as="h1" className="mb-3 md:mb-5 text-slate-100 drop-shadow-md">
          {title}
        </Heading>
        <Text
          size="super"
          as="h2"
          className="max-w-[360px] mb-4 md:mb-5 drop-shadow-sm text-gray-900"
        >
          {description}
        </Text>
        <Button link={link} color="dark">
          {buttonLabel}
        </Button>
      </div>
    </LayoutX>
  );
};
