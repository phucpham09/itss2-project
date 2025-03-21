"use client";

import React from "react";
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schema/loginSchema";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = (a: any) => {
    router.push("/");
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col text-gray-500">
        <div className="flex justify-center items-center gap-x-2">
          <GiPadlock size={30} />
          <h1 className="text-3xl ">Login</h1>
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
            placeholder="Enter your email..."
            label="Email"
            type="email"
            variant="bordered"
            {...register("email")}
            // isInvalid={!!errors.email}
            // errorMessage={errors.email?.message as string}
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
            errorMessage={errors.password?.message as string}
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
