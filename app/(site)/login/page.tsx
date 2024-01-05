import AuthPage from "../components/AuthPage";
import AuthLoginForm from "../components/AuthLoginForm";
import { LayoutX } from "../components/LayoutX";

const Login: React.FC = () => {
  return (
    <LayoutX className="flex min-h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <AuthPage title="Sign in to your diver account" />
      <AuthLoginForm />
    </LayoutX>
  );
};

export default Login;
