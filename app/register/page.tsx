import Image from "next/image";

const Register: React.FC = () => {
  return (
    <div className="flex min-h-screen align-center flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height={40}
          width={40}
          className="mx-auto w-auto"
          src={"/assets/logo.png"}
        />
      </div>
    </div>
  );
};

export default Register;
