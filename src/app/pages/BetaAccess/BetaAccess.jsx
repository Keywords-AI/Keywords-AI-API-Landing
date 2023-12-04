import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "src/app/components/BackButton";
import { set, useForm } from "react-hook-form";
import { AuthenticationTitle } from "src/app/components/AuthenticationTitle/AuthenticationTitle";
import cn from "src/app/utils/ClassMerge";
import { joinwaitlist, signup } from "src/app/authentication/Authentication";
import { Button } from "src/app/components/Button";
import { Toast } from "src/app/components/Toast";
import { PassCheck } from "src/app/components/icons";
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
      console.log(res);
      setOpen(true); // open the toast
    } catch (error) {
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
      <BackButton text="Back" />
      <div className=" flex-col w-full max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={"Request Beta access"}
          subtitle={"We’ll get back to you via email."}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col justify-center items-center gap-md self-stretch"
        >
          <div className="flex-col justify-center items-start gap-xs self-stretch">
            <div className="flex items-center justify-between gap-xs self-stretch">
              <div
                aria-label="firstname field"
                className="flex-col justify-center items-start gap-xxs flex-1 w-[204px]"
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
                className="flex-col justify-center items-start gap-xxs flex-1 w-[204px]"
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
          <p className="text-sm-regular text-error self-start">
            {backendError ? backendError : ""}
          </p>
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
                <div className="flex items-center gap-xxs">
                  <PassCheck />
                  <span className="text-sm-md text-gray-white">
                    You are on the waitlist!
                  </span>
                </div>
              }
              content="We will reach out to you soon."
              open={open}
              setOpen={setOpen}
            ></Toast>
          </div>
        </form>
      </div>
    </div>
  );
}
