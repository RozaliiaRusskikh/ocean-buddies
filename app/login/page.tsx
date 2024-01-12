import AuthPage from "../components/AuthPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login: React.FC = () => {
  return <AuthPage title="Sign in to your diver account" />;
};

export default Login;
