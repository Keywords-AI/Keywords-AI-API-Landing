import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "src/components/BackButton";
import { set, useForm } from "react-hook-form";
import { AuthenticationTitle } from "src/components/AuthenticationTitle/AuthenticationTitle";
import cn from "src/utilities/ClassMerge";
import { joinwaitlist, signup } from "src/utilities/Authentication";
import { Button } from "src/components/Button_old";
import { Toast } from "src/components/Toast";
export function BetaAccess() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await joinwaitlist({ ...data });
      setOpen(true);
    } catch (error) {
      setOpen(true);
      setBackendError(error.message);
    }
  };
  const firstnameError = errors.firstname;
  const lastnameError = errors.lastname;
  const emailError = errors.email;
  const passwordError = errors.password;
  const [backendError, setBackendError] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <div className="flex-col items-start gap-xxs self-stretch">
        <BackButton text="back" />
      </div>
      <div className=" flex-col max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={"Request Beta access"}
          subtitle={<span>We’ll get back to you via email.</span>}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col justify-center items-center gap-md self-stretch"
        >
          <div className="flex-col justify-center items-start gap-xs">
            <div className="flex items-center  gap-xs">
              <div
                aria-label="firstname field"
                className="flex-col justify-center items-start gap-xxs flex-1 self-stretch"
              >
                <label
                  className={cn(
                    "self-stretch text-sm-regular text-gray-4",
                    firstnameError ? "text-error" : ""
                  )}
                >
                  First name*
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
                className="flex-col justify-center items-start gap-xxs flex-1 self-stretch"
              >
                <label
                  className={cn(
                    "self-stretch text-sm-regular text-gray-4",
                    lastnameError ? "text-error" : ""
                  )}
                >
                  Last name*
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
          {/* <p className="text-sm-regular text-error self-start">
            {backendError ? backendError : ""}
          </p> */}
          <div className="flex-col items-start gap-xs self-stretch">
            <Button
              text={"Join waitlist"}
              variant={"secondary"}
              borderRadius="rounded-sm"
              className="w-full"
              arrow={false}
            />
            {/* <p className="caption text-gray-4 self-stretch text-center">
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
            </p> */}

            <Toast
              title={
                backendError != null
                  ? "Failed to join waitlist"
                  : "You are on the waitlist!"
              }
              content={
                backendError != null
                  ? backendError
                  : "We will reach out to you soon."
              }
              open={open}
              setOpen={setOpen}
              variant={backendError != null ? "error" : "success"}
            ></Toast>
          </div>
        </form>
      </div>
    </div>
  );
}
