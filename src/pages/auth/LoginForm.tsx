import FormGroupLayout from "@/components/layouts/FormGroupLayout";
import FormLayout from "@/components/layouts/FormLayout";
import React from "react";
import { UserLogin } from "../../../types/types";
import { useForm } from "react-hook-form";

interface Props {
  isLoading: boolean;
  onFormSubmit: (data: UserLogin) => void;
}

const LoginForm = ({ onFormSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserLogin>();

  const handleValidate = (value: number | string, checkConfirm: boolean) => {
    if (typeof value !== "number" && isNaN(+value)) {
      return "Pin Must be number!";
    }
    if (value.toString().length !== 5) {
      return "Pin Must be 5 digit!";
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} className="">
        <FormLayout>
          <label htmlFor="" className="font-semibold py-5">
            Select Login Option
          </label>
          <div className="flex items-center justify-center gap-4">
            <label htmlFor="" className="flex items-center gap-2">
              Email
              <input
                type="radio"
                className="radio"
                {...register("loginType", {
                  required: { value: true, message: "Email is required!" },
                })}
                value={"EMAIL"}
                defaultValue={"EMAIL"}
                defaultChecked
              />
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              Phone
              <input
                type="radio"
                className="radio"
                {...register("loginType", {
                  required: { value: true, message: "Email is required!" },
                })}
                value={"PHONE"}
              />
            </label>
          </div>
          {watch("loginType") === "PHONE" ? (
            <FormGroupLayout
              label="Phone"
              errorMessage={errors?.phone?.message}
            >
              <input
                type="number"
                placeholder="enter mobile number"
                className="input input-bordered form-input"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is required!",
                  },
                  validate: (value) => {
                    if (value.length !== 11) {
                      return "Invalid Phone Number!";
                    }
                  },
                })}
              />
            </FormGroupLayout>
          ) : (
            <FormGroupLayout
              label="Email"
              errorMessage={errors?.email?.message ?? undefined}
            >
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered form-input"
                {...register("email", {
                  required: { value: true, message: "Email is required!" },
                })}
              />
            </FormGroupLayout>
          )}
          <FormGroupLayout label="Pin" errorMessage={errors?.pin?.message}>
            <input
              type="password"
              placeholder="Enter your pin"
              className="input input-bordered w-full form-input"
              {...register("pin", {
                required: {
                  value: true,
                  message: "Pin is required!",
                },
                validate: (value) => handleValidate(value, false),
              })}
            />
          </FormGroupLayout>
          <button disabled={isLoading} className="btn btn-neutral md:mb-10">
            {isLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              <span>Login here</span>
            )}
          </button>
        </FormLayout>
      </form>
    </>
  );
};

export default LoginForm;
