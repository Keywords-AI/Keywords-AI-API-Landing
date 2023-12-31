import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "src/components/BackButton";
import { useForm } from "react-hook-form";
import { AuthenticationTitle } from "src/components/AuthenticationTitle/AuthenticationTitle";
import cn from "src/utilities/ClassMerge";
import { signup } from "src/utilities/Authentication";
import { Button } from "src/components/Button_old";
export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await signup({ ...data });
      navigate("/login");
    } catch (error) {
      setBackendError(error.message);
    }
  };
  const firstnameError = errors.firstname;
  const lastnameError = errors.lastname;
  const emailError = errors.email;
  const passwordError = errors.password;
  const [backendError, setBackendError] = React.useState(null);

  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className=" flex-col w-full max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={"Create an Account"}
          subtitle={<span>Sign up to retrieve a free trial API key.</span>}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col justify-center items-center gap-md self-stretch"
        >
          <div className="flex-col justify-center items-start gap-xs self-stretch">
            <div className="flex items-center justify-between gap-xs self-stretch flex-wrap">
              <div
                aria-label="firstname field"
                className="flex-col justify-center items-start gap-xxs self-stretch flex-1"
              >
                <label
                  className={cn(
                    "self-stretch text-sm-regular text-gray-4",
                    firstnameError ? "text-error" : ""
                  )}
                >
                  First Name*
                </label>
                <input
                  type="text"
                  {...register("firstname", {
                    required: true,
                  })}
                  className="input-box"
                />
              </div>
              <div
                aria-label="lastname field"
                className="flex-col justify-center items-start gap-xxs self-stretch flex-1"
              >
                <label
                  className={cn(
                    "self-stretch text-sm-regular text-gray-4",
                    lastnameError ? "text-error" : ""
                  )}
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  {...register("lastname", {
                    required: true,
                  })}
                  className="input-box"
                />
              </div>
            </div>
            <div
              aria-label="email field"
              className="flex-col justify-center items-start gap-xxs self-stretch"
            >
              <label
                className={cn(
                  "self-stretch text-sm-regular text-gray-4",
                  emailError ? "text-error" : ""
                )}
              >
                Email*
              </label>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="input-box"
              />
            </div>
            <div
              aria-label="password field"
              className="flex-col justify-center items-start gap-xxs self-stretch"
            >
              <label
                className={cn(
                  "self-stretch text-sm-regular text-gray-4",
                  passwordError ? "text-error" : ""
                )}
              >
                Password*
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-zA-Z0-9]).{8,}$/,
                })}
                className="input-box"
              />
            </div>
            <div
              aria-label="Organization name field"
              className="flex-col justify-center items-start gap-xxs self-stretch"
            >
              <label className={cn("self-stretch text-sm-regular text-gray-4")}>
                Organization Name
              </label>
              <input
                type="text"
                {...register("organization", { required: false })}
                className="input-box"
              />
            </div>
          </div>
          <p className="text-sm-regular text-error self-start">
            {backendError ? backendError : ""}
          </p>
          <div className="flex-col items-start gap-xs self-stretch">
            <Button
              text={"Create Account"}
              variant={"secondary"}
              borderRadius="rounded-sm"
              className="w-full"
              arrow={false}
            />
            <p className="caption text-gray-4 self-stretch text-center">
              By signing up, you agree to our{" "}
              <span
                className=" text-primary hover:cursor-pointer"
                onClick={() => navigate("/terms-of-use")}
              >
                Terms of Use
              </span>{" "}
              and{" "}
              <span
                className=" text-primary hover:cursor-pointer"
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
