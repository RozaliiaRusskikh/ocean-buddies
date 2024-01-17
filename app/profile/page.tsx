"use client";
import { useSession } from "next-auth/react";
import { Text } from "../components/Text";
import { signOut } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

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
