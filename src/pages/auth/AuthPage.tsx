"use client";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { UserLogin, UserRegister } from "../../../types/types";
const AuthPage = () => {
  const handleRegisterSubmit = (data: UserRegister) => {
    const payload = {
      ...data,
      balance: 0,
      active: "NO",
    };
    console.log(payload);
  };

  const handleLoginSubmit = (data: UserLogin) => {
    const payload = {
      ...data,
    };
    console.log(payload);
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
            <LoginForm onFormSubmit={handleLoginSubmit} />
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
            <RegisterForm onFormSubmit={handleRegisterSubmit} />
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
