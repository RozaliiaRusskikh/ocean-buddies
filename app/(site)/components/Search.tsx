import image from "@/public/assets/rocks.png";
import Image from "next/image";

const Search: React.FC = () => {
  return (
    <div className="min-h-72 h-full text-background relative">
      <Image
        src={image}
        alt="rocks"
        priority={true}
        className="absolute bottom-[50%] lg:right-[40%]"
      />
    </div>
  );
};

export default Search;
