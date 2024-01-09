import rocks from "@/public/assets/rocks.png";
import Image from "next/image";
import underwater from "@/public/assets/underwater.jpeg";
import { Text, Heading } from "./Text";
import { rajdhani } from "../fonts";
import { LayoutX } from "./LayoutX";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Register",
      description:
        "Begin your journey by creating an account and joining our vibrant community",
    },
    {
      title: "Search",
      description:
        "Explore the diverse dive community by searching for a buddy using various criteria",
    },
    {
      title: "Connect",
      description:
        "Initiate contact with your newfound dive partner through our integrated messaging feature",
    },
    {
      title: "Explore",
      description:
        "Embark on exciting underwater adventures as you meet and dive together",
    },
  ];
  return (
    <section
      className="min-h-72 h-full text-background relative bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(${underwater.src})` }}
    >
      <Image
        src={rocks}
        alt="rocks"
        priority={true}
        className="absolute bottom-[50%] lg:right-[40%]"
      />
      <LayoutX className="absolute bottom-[45%]">
        <Heading
          size="subheading"
          className={` text-slate-100 drop-shadow-md ${rajdhani.className} antialiased`}
          data-aos="fade-in"
        >
          How It Works
        </Heading>
        {steps.map((step, index) => {
          return <Step key={index} step={step} />;
        })}
      </LayoutX>
    </section>
  );
};

interface StepProps {
  step: {
    title: string;
    description: string;
  };
}

const Step: React.FC<StepProps> = ({ step }) => {
  return (
    <article>
      <Text
        size="super"
        as="h2"
        className="max-w-[360px] mb-4 md:mb-5 drop-shadow-sm text-gray-900"
        data-aos="fade-in"
      >
        {step.title}
      </Text>
      <Text
        size="super"
        as="h2"
        className="max-w-[360px] mb-4 md:mb-5 drop-shadow-sm text-gray-900"
        data-aos="fade-in"
      >
        {step.description}
      </Text>
    </article>
  );
};
export default HowItWorks;
