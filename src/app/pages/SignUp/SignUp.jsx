import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/BackButton';
import { useForm } from 'react-hook-form';
import { AuthenticationTitle } from '../../components/AuthenticationTitle/AuthenticationTitle';
import cn from '../../utils/ClassMerge';
export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const firstnameError = errors.firstname;
  const lastnameError = errors.lastname;
  const emailError = errors.email;
  const passwordError = errors.password;
  return (
    <div className="flex-col items-center gap-xxxl justify-center self-stretch">
      <BackButton text="Home" link={-1} />
      <div className=" flex-col w-full max-w-[420px] items-center gap-lg justify-center ">
        <AuthenticationTitle
          title={'Create an Account'}
          subtitle={<span>Sign up to retrieve a free trial API key</span>}
        />
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
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
                    'self-stretch text-sm text-gray-4',
                    firstnameError ? 'text-error' : ''
                  )}
                >
                  First Name*
                </label>
                <input
                  type="text"
                  {...register('firstname', {
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
                    'self-stretch text-sm text-gray-4',
                    lastnameError ? 'text-error' : ''
                  )}
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  {...register('lastname', {
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
                  'self-stretch text-sm text-gray-4',
                  emailError ? 'text-error' : ''
                )}
              >
                Email*
              </label>
              <input
                type="text"
                {...register('email', {
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
                  'self-stretch text-sm text-gray-4',
                  passwordError ? 'text-error' : ''
                )}
              >
                Password*
              </label>
              <input
                type="password"
                {...register('password', {
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
              <label className={cn('self-stretch text-sm text-gray-4')}>
                Organization Name
              </label>
              <input
                type="text"
                {...register('organization', { required: false })}
                className="input-box"
              />
            </div>
          </div>

          <div className="flex-col items-start gap-xs self-stretch">
            <button
              type="submit"
              className="button-cr bg-gray-white text-gray-black text-sm-regular text-center w-full"
            >
              Create Account
            </button>
            <p
              className="caption text-gray-4 self-stretch hover:cursor-pointer"
              onClick={() => navigate('/forgot-password')}
            >
              By signing up, you agree to our{' '}
              <span
                className=" text-[#6893FF] hover:cursor-pointer"
                onClick={() => navigate('/terms-of-use')}
              >
                Terms of Use
              </span>{' '}
              and
              <span
                className=" text-[#6893FF] hover:cursor-pointer"
                onClick={() => navigate('/privacy-policy')}
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
