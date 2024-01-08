"use client";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./Button";

interface AuthFormProps {
  variant: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
    }

    if (variant === "LOGIN") {
      //NextAuth SignIn
    }
  };
  return (
    <div className="mt-8 sm:mx-auto px-4 w-full sm:max-w-lg">
      <div className="bg-background px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <>
              <Input
                id="name"
                label="Name"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
              <Input
                id="zipcode"
                label="ZIP Code"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            </>
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="pasword"
            label="Password"
            type="passwor"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div className="flex flex-col items-center">
            <Button type="submit" disabled={isLoading} color="light">
              {variant}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
