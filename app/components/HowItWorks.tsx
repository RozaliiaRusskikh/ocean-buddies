import image from "@/public/assets/rocks.png";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  const steps = {
    register:
      "Begin your journey by creating an account and joining our vibrant community",
    search:
      "Explore the diverse dive community by searching for a buddy using various criteria",
    connect:
      "Initiate contact with your newfound dive partner through our integrated messaging feature",
    explore:
      "Embark on exciting underwater adventures as you meet and dive together",
  };
  return (
    <section className="min-h-72 h-full text-background relative">
      <Image
        src={image}
        alt="rocks"
        priority={true}
        className="absolute bottom-[50%] lg:right-[40%]"
      />
      <div>
        <Step />
      </div>
    </section>
  );
};

const Step: React.FC = () => {
  return (
    <div className="text-primary">
      <p>Step1</p>
    </div>
  );
};
export default HowItWorks;
