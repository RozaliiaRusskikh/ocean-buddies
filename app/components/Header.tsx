import { LayoutX } from "./LayoutX";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { rajdhani } from "../fonts";
import { useSession } from "next-auth/react";
import avatar from "@/public/assets/avatar.png";

interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const navMenu = [
    { title: "Join", path: "/register" },
    { title: "Login", path: "/login" },
  ];

  const { data: session } = useSession();

  return (
    <header
      className={`bg-gradient-to-t from-blue-400 to-blue-100 ${rajdhani.className} antialiased`}
    >
      <LayoutX>
        <div className="h-16 flex items-center justify-between gap-12">
          <Link
            href="/"
            className="uppercase flex justify-between gap-1 items-end font-medium text-lg group"
          >
            <span className="hidden sm:inline mb-2 transition-color ease-in-out duration-400 group-hover:text-sky-600">
              Ocean
            </span>
            <Image
              src={logo}
              alt="Ocean Buddies Logo"
              height={36}
              width={36}
              className="transform transition-all group-hover:scale-110"
            />
            <span className="hidden sm:inline transition-color ease-in-out duration-400 group-hover:text-sky-600">
              Buddies
            </span>
          </Link>
          <nav className="max-w-[585px] w-full">
            {session?.user ? (
              <div className="flex justify-end">
                <Link href="/profile">
                  <Image
                    src={avatar}
                    alt="profile"
                    width={50}
                    height={50}
                    className="transform transition-all hover:scale-110"
                  />
                </Link>
              </div>
            ) : (
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
            )}
          </nav>
        </div>
      </LayoutX>
    </header>
  );
};

export default Header;
