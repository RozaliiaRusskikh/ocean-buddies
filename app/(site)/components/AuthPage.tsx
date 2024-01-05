"use client";

import Image from "next/image";
import { Heading } from "./Text";
import AuthForm from "../components/AuthForm";
import { usePathname } from "next/navigation";
import { LayoutX } from "./LayoutX";

interface AuthPageProps {
  title: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ title }) => {
  const pathname = usePathname();

  let variant = "";

  if (pathname === "/register") {
    variant = "REGISTER";
  } else if (pathname === "/login") {
    variant = "LOGIN";
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-xs sm:max-w-sm">
        <Image
          alt="logo"
          height={40}
          width={40}
          className="mx-auto w-auto"
          src={"/assets/logo.png"}
        />
        <Heading size="subheading" className="text-center mt-6 tracking-tight">
          {title}
        </Heading>
      </div>
      <AuthForm variant={variant} />
    </div>
  );
};

export default AuthPage;
