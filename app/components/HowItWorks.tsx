import rocks from "@/public/assets/rocks.png";
import Image from "next/image";
import underwater from "@/public/assets/underwater.jpeg";
import { Text, Heading } from "./Text";
import { rajdhani } from "../fonts";
import { LayoutX } from "./LayoutX";
import "@/styles/step.css";

interface StepProps {
  step: {
    title: string;
    description: string;
  };
  index: number;
}

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
      className="min-h-full relative bg-cover bg-no-repeat bg-center bg-fixed"
      style={{ backgroundImage: `url(${underwater.src})` }}
    >
      <Image
        src={rocks}
        alt="rocks"
        priority={true}
        className="absolute bottom-[90%]"
      />
      <LayoutX>
        <Heading
          size="subheading"
          className={` text-secondary drop-shadow-md py-10  ${rajdhani.className} antialiased`}
          data-aos="fade-in"
        >
          How It Works
        </Heading>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 flex-wrap pb-10">
          {steps.map((step, index) => {
            return <Step key={index} index={index} step={step} />;
          })}
        </div>
      </LayoutX>
    </section>
  );
};

//add links to appropriate pages
const Step: React.FC<StepProps> = ({ step, index }) => {
  return (
    <article className="drop max-w-[350px] max-h-[350px] relative flex flex-col justify-center items-center flex-wrap animate-fadein p-5">
      <div className="content flex justify-center items-center flex-col text-center">
        <Text size="super" as="p">
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
  );
};
export default HowItWorks;
