"use client";

import React from "react";
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react";
import { SiGnuprivacyguard } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schema/registerSchema";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const router = useRouter();
  const onSubmit = () => {
    router.push("/login");
  };
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col text-gray-500">
        <div className="flex justify-center items-center gap-x-2">
          <SiGnuprivacyguard size={30} />
          <h1 className="text-3xl ">Register</h1>
        </div>

        <p>Welcome back to Matchme!</p>
      </CardHeader>
      <CardBody className="">
        <form
          className="flex flex-col gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            className="w-full"
            placeholder="Enter your username..."
            label="Username"
            type="text"
            variant="bordered"
            {...register("username")}
            isInvalid={!!errors.username}
            errorMessage={errors.username?.message}
          />
          <Input
            isRequired
            className="w-full"
            placeholder="Enter your email..."
            label="Email"
            type="email"
            variant="bordered"
            {...register("email")}
          />
          <Input
            isRequired
            className="w-full"
            placeholder="Enter your password..."
            label="Password"
            type="password"
            variant="bordered"
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
