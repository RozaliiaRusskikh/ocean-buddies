import { LayoutX } from "./LayoutX";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="absolute my-5 md:ny-8 w-full">
        <LayoutX className="absolute">
          <div className="flex items-center justify-center gap-2">
            <p className="text-center">
              &copy; {currentYear} <span>Ocean </span>
              <Image
                src={logo}
                alt="Ocean Buddies Logo"
                height={24}
                width={24}
                className="inline"
              />
              <span> Buddies</span>
              <span className="block md:mt-1">All Rights Reserved.</span>
            </p>
          </div>
        </LayoutX>
        <svg
          viewBox="0 0 1280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            opacity="0.8"
            d="M1280 25.4102C1214.78 19.5276 1030.22 5.65238 746.909 6.36852C746.909 6.36852 663.969 5.70353 627.152 5.72911C627.152 5.72911 488.233 -0.4348 272.191 5.1153C272.191 5.1153 193.699 8.75995 0 0V100.899L1279.69 106.462L1280 25.4102Z"
            fill="#dbeafe"
          ></path>
          <path
            d="M1280 39.7332C1244.52 39.4518 1136.6 38.3519 974.55 34.784L823.998 27.2006C823.998 27.2006 704.72 20.2054 582.876 22.5585C461.031 24.9115 366.834 27.2006 276.16 26.5612C191.201 25.9729 168.242 26.4845 0.102722 12.4941V108.674H1279.79L1280 39.7332Z"
            fill="#bfdbfe"
          ></path>
          <path
            d="M913.406 48.6547C866.564 51.3274 716.662 52.9003 662.258 54.3198C607.854 55.7393 504.452 56.6729 504.452 56.6729C306.852 57.4402 80.374 79.4191 0.170837 88V372H1280V59C1201.34 54.2684 1024.92 44.8054 913.406 48.6547Z"
            fill="url(#Footer_svg__paint0_linear_1451_26648)"
          ></path>
          <defs>
            <linearGradient
              id="Footer_svg__paint0_linear_1451_26648"
              x1="394"
              y1="-1102.5"
              x2="394"
              y2="592"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6"></stop>
              <stop offset="0.448377" stopColor="#93c5fd"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
