"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./Button";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

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
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
      <div className="bg-background px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="pasword"
            label="Password"
            type="passwor"
            register={register}
            errors={errors}
          />
          <div>
            <Button color="light">{variant}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
