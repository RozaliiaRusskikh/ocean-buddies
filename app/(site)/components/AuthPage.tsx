import Image from "next/image";
import { Heading } from "./Text";
import AuthForm from "../components/AuthForm";

interface AuthPageProps {
  title: string;
  variant: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ title, variant }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
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
