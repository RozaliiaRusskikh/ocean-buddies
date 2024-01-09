"use client";

import { useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./Button";
import Select from "./Select";

interface AuthFormProps {
  variant: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(false);

  const levels = [
    { value: "novice", label: "Novice (1-20 dives)" },
    { value: "intermediate", label: "Intermediate (21 - 50 dives)" },
    { value: "experienced", label: "Experienced (51 - 100 dives)" },
    { value: "advanced", label: "Advanced (101 - 200 dives)" },
    { value: "master", label: "Master (more than 200 dives)" },
  ];

  const certifications = [
    { value: "wreck", label: "Wreck Diver" },
    { value: "openWater", label: "Open Water Diver" },
    { value: "advancedOpenWater", label: "Advanced Open Water Diver" },
    { value: "rescue", label: "Rescue Diver" },
    { value: "master", label: "Dive Master" },
    { value: "nitrox", label: "Enriched Air Nitrox" },
    { value: "instructor", label: "Instructor" },
  ];

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
      // Axios Register
    }

    if (variant === "LOGIN") {
      // NextAuth SignIn
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
              <Select
                options={levels}
                label="Experience"
                disabled={isLoading}
              />
              <Select
                options={certifications}
                label="Certification"
                disabled={isLoading}
                isMulti
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
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
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
