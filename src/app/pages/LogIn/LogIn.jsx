import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BackButton } from "src/app/components/BackButton";
import { useForm } from "react-hook-form";
import { AuthenticationTitle } from "src/app/components/AuthenticationTitle/AuthenticationTitle";
import cn from "src/app/utils/ClassMerge";
import { login } from "src/app/authentication/Authentication";

export function LogIn() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailError = errors.email;
  const passwordError = errors.password;
  const [backendError, setBackendError] = useState(null);
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className=" flex-col w-full max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={"Sign In"}
          subtitle={
            <span>
              Don’t have an account?{" "}
              <span
                className=" text-primary hover:cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign up.
              </span>
            </span>
          }
        />
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              const res = await login(data.email, data.password);
              navigate("/");
            } catch (error) {
              setBackendError(error.message);
            }
          })}
          className="flex-col justify-center items-center gap-md self-stretch"
        >
          <div className="flex-col justify-center items-start gap-xs self-stretch">
            <div
              aria-label="email field"
              className="flex-col justify-center items-start gap-xxs self-stretch"
            >
              <label
                className={cn(
                  "self-stretch text-sm text-gray-4",
                  emailError ? "text-error" : ""
                )}
              >
                Email
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
                  "self-stretch text-sm text-gray-4",
                  passwordError ? "text-error" : ""
                )}
              >
                Password
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
          </div>
          <p className="text-sm-regular text-error self-start">
            {backendError ? backendError : ""}
          </p>
          <div className="flex-col items-start gap-xs self-stretch">
            <button
              type="submit"
              className="button-cr bg-gray-white text-gray-black text-sm-regular text-center w-full"
            >
              Sign in with email
            </button>
            <p
              className="caption text-gray-4 self-stretch hover:cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
