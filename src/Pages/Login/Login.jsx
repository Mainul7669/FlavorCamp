import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-xl  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <label
              name="email"
              className="block text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="text-red-500">Please enter a valid email address</p>
            )}

            <label
              name="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
                  {showPassword ? (
                    <span onClick={togglePasswordVisibility}>
                      <FaEye />
                    </span>
                  ) : (
                    <span onClick={togglePasswordVisibility}>
                      <FaEyeSlash />
                    </span>
                  )}
                </span>
              </div>
            </div>
            {errors?.password?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}

            <input
              type="submit"
              className="px-5 py-2  font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-300"
              value="Login"
            />

            <SocialLogin></SocialLogin>

            <p className="text-sm font-dark">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
