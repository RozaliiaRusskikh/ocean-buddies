import { LayoutX } from "./LayoutX";
import { Heading, Text } from "./Text";

export function Hero({ data }) {
  const { title, description, image } = data;
  return (
    <LayoutX
      className="min-h-[504px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${urlForImage(image).url()})` }}
    >
      <Heading
        as="h1"
        data-aos="fade-up"
        data-aos-delay="100"
        className="mb-8 relative after:w-10 after:h-[6px] after:bg-primary after:absolute after:-bottom-2 after:left-0"
      >
        {title}
      </Heading>
      <div data-aos="fade-up" data-aos-delay="200" className="max-w-[480px]">
        {description.split("\n").map((line, i) => (
          <Text key={i}>{line}</Text>
        ))}
      </div>
    </LayoutX>
  );
}
