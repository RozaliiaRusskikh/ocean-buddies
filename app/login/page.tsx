import AuthPage from "../components/AuthPage";
import type { Metadata } from "next";
import imageLogin from "@/public/assets/jellyfish-background.jpg";

export const metadata: Metadata = {
  title: "Login",
};

const Login: React.FC = () => {
  return <AuthPage title="Sign in to your diver account" image={imageLogin} />;
};

export default Login;
