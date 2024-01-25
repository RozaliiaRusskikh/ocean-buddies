"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Heading, Text } from "../components/Text";
import { signOut } from "next-auth/react";
import spinner from "@/public/assets/spinner.svg";
import { LayoutX } from "../components/LayoutX";
import Link from "next/link";
import scubaDivers from "@/public/assets/scuba-divers.png";
import { RxCross1 } from "react-icons/rx";
import avatar from "@/public/assets/avatar.png";
import { TbStarFilled } from "react-icons/tb";
import { SearchCard } from "../components/SearchCard";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  zipcode: string;
  experience: string;
  certification: string[];
}

const Profile = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user`);
        if (response.ok) {
          const user = await response.json();
          setUser(user);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (status === "loading") {
    return (
      <LayoutX className="pt-10 min-h-screen">
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
          width={300}
          height={300}
          priority
        />
      </LayoutX>
    );
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const handleEdit = () => {
    console.log("Edit");
  };

  return (
    <LayoutX className="min-h-screen py-12 bg-gradient-to-b from-blue-400 via-cyan-700 to-blue-950">
      <div className="flex flex-col items-center md:items-start md:flex-row md:gap-5">
        <aside className="shrink-0 md:w-1/3 md:rounded-sm md:h-screen md:shadow-2xl">
          <div className="flex flex-col items-center">
            <Image
              src={avatar}
              alt="avatar"
              width={150}
              height={150}
              priority
            />
            <Heading as="h1" size="subheading">
              {user?.name}
            </Heading>
            <Text> {user?.email}</Text>
            <Text>{user?.zipcode}</Text>
            <Text>{user?.experience}</Text>
            <ul className="flex flex-col gap-1 mt-2">
              {user?.certification.map((certificate, index) => (
                <li key={index} className="flex bg-gray-100 max-w-fit px-1">
                  {certificate}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 justify-center text-background mt-4">
            <button
              type="button"
              onClick={handleSignOut}
              className="hover:underline"
            >
              Sign Out
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="hover:underline"
            >
              Edit
            </button>
          </div>
        </aside>
        <div className="flex flex-col mt-10 md:mt-0 md:rounded-sm md:h-screen md:w-screen md:shadow-2xl md:px-5 md:pt-1">
          <Heading
            as="h2"
            size="micro"
            className="self-center md:self-start text-background flex items-center gap-1"
          >
            Saved Divers Contacts
            <TbStarFilled className="text-amber-500 w-5" />
          </Heading>
          <div className="flex gap-5 flex-wrap justify-center md:justify-start my-7">
            <SearchCard />
          </div>
        </div>
      </div>
    </LayoutX>
  );
};

export default Profile;
