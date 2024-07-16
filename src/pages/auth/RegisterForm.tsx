"use client";
import FormGroupLayout from "@/components/layouts/FormGroupLayout";
import FormLayout from "@/components/layouts/FormLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserRegister } from "../../../types/types";

interface Props {
  isLoading: boolean;
  onFormSubmit: (data: UserRegister) => any;
}
const RegisterForm = ({ onFormSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserRegister>();

  const handleValidate = (value: number | string, checkConfirm: boolean) => {
    if (watch("pin") !== value && checkConfirm) {
      return "Pin does not matched!";
    }
    if (typeof value !== "number" && isNaN(+value)) {
      return "Pin Must be number!";
    }
    if (value.toString().length !== 5) {
      return "Pin Must be 5 digit!";
    }
  };

  const onSubmit: SubmitHandler<UserRegister> = (data) => onFormSubmit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLayout>
          <FormGroupLayout
            label="Register As"
            errorMessage={errors.type?.message ?? undefined}
          >
            <select
              className="select select-bordered w-full form-input"
              {...register("type", {
                required: {
                  value: true,
                  message: "Registration Type is required!",
                },
              })}
            >
              <option value={""} disabled selected>
                -Select an Option-
              </option>
              <option value={"USER"}>User</option>
              <option value={"AGENT"}>Agent</option>
            </select>
          </FormGroupLayout>
          <FormGroupLayout
            label="Name"
            errorMessage={errors?.name?.message ?? undefined}
          >
            <input
              type="text"
              placeholder="enter your name"
              className="input input-bordered form-input"
              {...register("name", {
                required: { value: true, message: "Name is required!" },
              })}
            />
          </FormGroupLayout>
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
          <FormGroupLayout label="Phone" errorMessage={errors?.phone?.message}>
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
          <FormGroupLayout
            label="Confirm Pin"
            errorMessage={errors.confirmPin?.message}
          >
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full form-input"
              {...register("confirmPin", {
                required: {
                  value: true,
                  message: "Confirm Pin is required!",
                },
                validate: (value) => handleValidate(value ?? "", true),
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

export default RegisterForm;
