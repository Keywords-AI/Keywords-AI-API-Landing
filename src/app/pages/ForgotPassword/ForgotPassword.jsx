import { useNavigate } from "react-router-dom";
import { BackButton } from "src/app/old_components/BackButton";
import { useForm } from "react-hook-form";
import { AuthenticationTitle } from "src/app/old_components/AuthenticationTitle/AuthenticationTitle";
import cn from "src/app/utils/ClassMerge";
import { Button } from "src/app/old_components/Button";

export function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailError = errors.email;
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Back" />
      <div className=" flex-col w-full max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={"Forgot Password"}
          subtitle={"You will receive a link to reset your password."}
        />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
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
                  "self-stretch text-sm-regular text-gray-4",
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
          </div>
          <p className="text-sm-regular text-error self-start">
            We cannot find your email.
          </p>
          <p className="text-sm-regular text-success self-start">
            Link sent to your email inbox via thekeywordsai@gmail.com.
          </p>
          <div className="flex-col items-start gap-xs self-stretch">
            <Button
              variant={"secondary"}
              text={"Send reset link"}
              arrow={false}
              borderRadius="rounded-sm"
              className="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
