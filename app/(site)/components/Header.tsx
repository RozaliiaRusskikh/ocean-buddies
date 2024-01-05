import { LayoutX } from "./LayoutX";
import Link from "next/link";
import NavLink from "@/app/(site)/components/NavLink";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const navMenu = [
    { title: "Join", path: "/register" },
    { title: "Login", path: "/login" },
  ];
  return (
    <header className="bg-gradient-to-t from-blue-400 to-blue-100 font-rajdhani">
      <LayoutX>
        <div className="h-16 flex items-center justify-between gap-12">
          <Link
            href="/"
            className="uppercase flex justify-between gap-1 items-end font-medium text-lg"
          >
            <span className="hidden sm:inline mb-2">Ocean</span>
            <Image src={logo} alt="Ocean Buddies Logo" height={36} width={36} />
            <span className="hidden sm:inline">Buddies</span>
          </Link>
          <nav className="max-w-[585px] w-full">
            <ul className="flex justify-end gap-7">
              {navMenu.map((navLink, i) => (
                <NavLink
                  key={i}
                  title={navLink.title}
                  path={navLink.path}
                  pathname={pathname}
                />
              ))}
            </ul>
          </nav>
        </div>
      </LayoutX>
    </header>
  );
};

export default Header;
