import AuthPage from "../components/AuthPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const Register: React.FC = () => {
  return <AuthPage title="Join Diving community by creating an account" />;
};

export default Register;
