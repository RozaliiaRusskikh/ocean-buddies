import rocks from "@/public/assets/rocks.png";
import Image from "next/image";
import underwater from "@/public/assets/underwater.jpeg";
import { Text, Heading } from "./Text";
import { rajdhani } from "../fonts";
import { LayoutX } from "./LayoutX";
import Link from "next/link";
import "@/styles/step.css";

interface StepProps {
  step: {
    title: string;
    description: string;
    link: string;
  };
  index: number;
}

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Register",
      description:
        "Begin your journey by creating an account and joining our vibrant community",
      link: "/register",
    },
    {
      title: "Search",
      description:
        "Explore the diverse dive community by searching for a buddy using various criteria",
      link: "/search",
    },
    {
      title: "Connect",
      description:
        "Contact your newfound buddy through our integrated messaging feature and dive together",
      link: "/messenger",
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 flex-wrap pb-20">
          {steps.map((step, index) => {
            return <Step key={index} index={index} step={step} />;
          })}
        </div>
      </LayoutX>
    </section>
  );
};

const Step: React.FC<StepProps> = ({ step, index }) => {
  return (
    <Link href={step.link} className="group">
      <article className="drop max-w-[350px] max-h-[350px] relative flex flex-col justify-center items-center flex-wrap animate-fadein p-5 transition-transform duration-300 ease-in-out group-hover:-translate-y-5">
        <div className="content flex justify-center items-center flex-col text-center">
          <Text
            size="super"
            as="p"
            className="transition-all duration-300 ease-in-out group-hover:scale-50"
          >
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
    </Link>
  );
};
export default HowItWorks;
