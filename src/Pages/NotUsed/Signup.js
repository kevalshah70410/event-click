import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

function Signup() {
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col pt-10">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign Up/Registration </h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
            />
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <div className=" w-full mb-4 lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select</option>
                <option>User</option>
                <option>Photoghrapher</option>
                <option>React With Headless UI</option>
              </select>
            </div>
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              class="w-full text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600  text-lg text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            <button
              type="submit"
              class="w-full  text-white text bg-blue-500 border-0  px-6  hover:bg-blue-600 text-center py-3 rounded background-green hover:background-green-dark focus:outline-none my-4"
            >
              Create With <GoogleIcon />
            </button>
            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="/"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6 mb-10">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="./Signin"
            >
              Sign In
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
