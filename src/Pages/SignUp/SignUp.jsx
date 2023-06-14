import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
      } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const savedUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
          };
          fetch("https://assignment-12-server-one-theta.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const password = watch("password", "");

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 2xl:m-96 lg:m-60  mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow-xl  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
              })}
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="text-red-500">Please enter a valid email address</p>
            )}

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                })}
                type={showPassword ? "text" : "password"}
                id="password"
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
            {errors?.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters long
              </p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain at least one capital letter, one special
                character, and one digit
              </p>
            )}

            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2  border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors?.confirmPassword?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}
            {errors?.confirmPassword?.type === "validate" && (
              <p className="text-red-500">Passwords do not match</p>
            )}

            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-900"
            >
              Photo URL
            </label>
            <input
              {...register("photoURL")}
              id="photoURL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              id="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors?.gender?.type === "required" && (
              <p className="text-red-500">Please select a gender</p>
            )}

            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              id="phoneNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <input
              {...register("address")}
              id="address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="submit"
              className="px-5 py-2 font-medium text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-300"
              value="Register"
            />

            <SocialLogin />

            <p className="text-sm font-dark">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
