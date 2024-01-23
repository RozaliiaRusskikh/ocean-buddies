import AuthPage from "../components/AuthPage";
import type { Metadata } from "next";
import imageJoin from "@/public/assets/jellyfish.jpg";

export const metadata: Metadata = {
  title: "Register",
};

const Register: React.FC = () => {
  return (
    <AuthPage
      title="Join Diving community by creating an account"
      image={imageJoin}
    />
  );
};

export default Register;
