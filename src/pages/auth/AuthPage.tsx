"use client";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { UserLogin, UserRegister } from "../../../types/types";
import { signIn, useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { api, apiSecure } from "@/services/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
const AuthPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: async (payload: UserRegister) => {
      const { data } = await api.post(`/register`, payload);
      return data;
    },
    onSuccess: (data) => {
      if (data?.status === 201) {
        toast.success(data?.message);
      }
      if (data?.status === 422) {
        toast.error(data?.message);
      }
    },
    onError: async (error) => {
      toast.error(error?.message);
    },
  });

  const handleRegisterSubmit = async (data: UserRegister) => {
    const payload = {
      ...data,
      balance: 0,
      active: "NO",
    };
    delete payload?.confirmPin;
    setIsLoading(true);
    await mutateAsync(payload);
    setIsLoading(false);
  };

  const handleLoginSubmit = (data: UserLogin) => {
    setIsLoading(true);
    signIn("credentials", {
      email: data?.loginType === "EMAIL" ? data?.email : undefined,
      phone: data?.loginType === "PHONE" ? data?.phone : undefined,
      password: data.pin,
      loginType: data?.loginType,
      redirect: false,
      callbackUrl: "/",
    }).then(async (res) => {
      if (res?.error) {
        toast.error("Invalid Credentials");
      } else if (res?.ok) {
        const response = await apiSecure.post("/jwt", { email: data?.email });
        console.log(response);
        toast.success("Login Successfully!");
        router.push("/dashboard");
      }
    });
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-[45%] p-5">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Login"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-max"
          >
            <LoginForm isLoading={isLoading} onFormSubmit={handleLoginSubmit} />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Register"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <RegisterForm
              isLoading={isLoading}
              onFormSubmit={handleRegisterSubmit}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 md:h-screen">
        <Image
          className="w-full px-5 h-full"
          src={"/auth.svg"}
          height={500}
          width={600}
          alt="image"
        />
      </div>
    </div>
  );
};

export default AuthPage;
