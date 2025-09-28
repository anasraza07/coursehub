import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const registerForm = useRef(null);
  const { user, registerUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }

    const userInfo = { name, email, password1, password2 };
    registerUser(userInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFEDE1] px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1B5241] text-center">
          Register
        </h1>

        <form ref={registerForm} onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter name..."
              className="border border-gray-300 rounded-md px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="border border-gray-300 rounded-md px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password1"
              placeholder="Enter password..."
              className="border border-gray-300 rounded-md px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm password..."
              className="border border-gray-300 rounded-md px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#1B5241]"
            />
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="submit"
              value="Register"
              className="w-full bg-[#1B5241] text-white py-2 sm:py-3 rounded-md hover:bg-[#A05425] transition-colors cursor-pointer"
            />
          </div>
        </form>

        <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#A05525] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
