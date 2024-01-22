"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Text } from "../components/Text";
import { signOut } from "next-auth/react";
import spinner from "@/public/assets/spinner.svg";
import { LayoutX } from "../components/LayoutX";
import Link from "next/link";
import { Button } from "../components/Button";
import scubaDivers from "@/public/assets/scuba-divers.png";

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
        <Text as="h1" size="super">
          Access Denied.{" "}
          <span className="block">
            Please{" "}
            <Link className="text-primary" href="login">
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

  return (
    <LayoutX className="pt-2">
      <Text>{session?.user?.name}</Text>
      <Text>{session?.user?.email}</Text>
      <Button
        type="button"
        onClick={handleSignOut}
        color="dark"
        className="z-10"
        data-aos="fade-in"
      >
        Sign Out
      </Button>
    </LayoutX>
  );
};

export default Profile;
