import Image from "next/image";
import { Heading } from "./Text";

interface AuthPageProps {
  title: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ title }) => {
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
    </div>
  );
};

export default AuthPage;
