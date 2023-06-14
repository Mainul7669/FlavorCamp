import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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
    const { email, password } = data;

    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Logged in Successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },

        customClass: {
          confirmButton: "swal-button",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-2"
          >
            <label
              name="email"
              className="block text-sm font-medium text-gray-900"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
              className="w-20 px-2 py-2 font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-300"
              value="Login"
            />

            <SocialLogin />

            <p className="text-sm font-dark">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="font-bold text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
