import AuthPage from "../components/AuthPage";
import { LayoutX } from "../components/LayoutX";

const Register: React.FC = () => {
  return (
    <LayoutX className="flex min-h-screen flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <AuthPage title="Join Diving community by creating an account" />
    </LayoutX>
  );
};

export default Register;
