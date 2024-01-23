"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Text } from "../components/Text";
import { signOut } from "next-auth/react";
import spinner from "@/public/assets/spinner.svg";
import { LayoutX } from "../components/LayoutX";
import Link from "next/link";
import scubaDivers from "@/public/assets/scuba-divers.png";
import { RxCross1 } from "react-icons/rx";
import NavLink from "../components/NavLink";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <LayoutX className="pt-10">
        <div className="flex gap-3 justify-center">
          <Image
            className="animate-spin"
            width={40}
            height={40}
            src={spinner}
            alt="Spinner"
          />
          <Text as="h1" size="super" className="text-primary">
            Processing...
          </Text>
        </div>
      </LayoutX>
    );
  }

  if (status === "unauthenticated") {
    return (
      <LayoutX className="pt-2 flex min-h-screen flex-col justify-center items-center text-center">
        <Text as="h1" size="super" className="flex flex-col items-center gap-1">
          <RxCross1 className="text-rose-500" />
          Access Denied.{" "}
          <span className="block">
            Please{" "}
            <Link className="text-primary hover:underline" href="login">
              login
            </Link>{" "}
            to view your profile page.{" "}
          </span>
        </Text>
        <Image
          src={scubaDivers}
          alt="Scuba Divers"
          className="mx-auto"
          width={400}
          height={400}
          priority
        />
      </LayoutX>
    );
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const navMenu = [
    { title: "Search", path: "/search" },
    { title: "Messenger", path: "/messenger" },
  ];
  return (
    <LayoutX className="min-h-screen py-12 bg-gradient-to-b from-blue-400 via-cyan-700 to-blue-950">
      <div className="flex justify-between">
        <aside>
          <Text>{session?.user?.name}</Text>
          <Text>{session?.user?.email}</Text>
          <button
            type="button"
            onClick={handleSignOut}
            className="hover:underline"
          >
            Sign Out
          </button>
        </aside>
        <div>
          <nav>
            <ul className="flex justify-end gap-7">
              {navMenu.map((navLink, i) => (
                <NavLink key={i} title={navLink.title} path={navLink.path} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </LayoutX>
  );
};

export default Profile;
