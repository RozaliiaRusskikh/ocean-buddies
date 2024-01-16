"use client";

import { useState } from "react";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./Button";
import Select from "./Select";
import axios from "axios";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import MultiSelect from "./MultiSelect";

interface AuthFormProps {
  variant: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ variant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const experienceOptions = [
    { value: "Novice", label: "Novice (1-20 dives)" },
    { value: "Intermediate", label: "Intermediate (21 - 50 dives)" },
    { value: "Experienced", label: "Experienced (51 - 100 dives)" },
    { value: "Advanced", label: "Advanced (101 - 200 dives)" },
    { value: "Master", label: "Master (more than 200 dives)" },
  ];

  const certificationOptions = [
    { value: "Open Water Diver", label: "Open Water Diver" },
    { value: "Advanced Open Water Diver", label: "Advanced Open Water Diver" },
    { value: "Instructor", label: "Instructor" },
    { value: "Enriched Air Nitrox", label: "Enriched Air Nitrox" },
    { value: "Dive Master", label: "Dive Master" },
    { value: "Rescue Diver", label: "Rescue Diver" },
    { value: "Wreck Diver", label: "Wreck Diver" },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      zipcode: "",
    },
  });

  const togglePassword = () => {
    setIsRevealPassword((prev) => !prev);
  };

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios.post("/api/register", data);
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
                name="experience"
                options={experienceOptions}
                label="Experience"
                disabled={isLoading}
                register={register}
              />
              <MultiSelect
                control={control}
                options={certificationOptions}
                label="Certification"
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
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div className="relative">
            <Input
              id="password"
              label="Password"
              type={isRevealPassword ? "text" : "password"}
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 bottom-3 cursor-pointer"
            >
              {isRevealPassword ? (
                <FaRegEye className="text-secondary" />
              ) : (
                <FaRegEyeSlash className="text-rose-500" />
              )}
            </span>
          </div>
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
