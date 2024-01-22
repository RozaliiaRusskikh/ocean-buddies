"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Text } from "../components/Text";
import { signOut } from "next-auth/react";
import spinner from "@/public/assets/spinner.svg";
import { LayoutX } from "../components/LayoutX";
import Link from "next/link";

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
      <LayoutX className="pt-2">
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
      </LayoutX>
    );
  }

  const handleSignOut: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div>
      <Text>{session?.user?.name}</Text>
      <Text>{session?.user?.email}</Text>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
