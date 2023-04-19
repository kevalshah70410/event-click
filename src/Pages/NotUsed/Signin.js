import React from "react";
// import "../Pages/Signin.css";
// import Signup from "./Pages/Signup";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <div className="flex">
        <img
          src="https://thumbs.dreamstime.com/b/male-photographer-character-photo-camera-hobby-profession-vector-illustration-white-background-male-photographer-113850332.jpg"
          alt="pic"
        ></img>
        <form
          class="border my-10 mx-auto py-10 w-1/3
      "
        >
          {/* <!-- Email input --> */}
          <div class="  px-20 mt-5 mb-4">
            <label for="email" class="leading-7 text text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* <!-- Password input --> */}
          <div class=" px-20 my-7">
            <label for="Password" class="leading-7 text text-gray-600">
              Password
            </label>
            <input
              type="Password"
              id="Password"
              name="Password"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class=" mb-4">
            <div class="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button class="text-white text bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg my-7">
            Signin
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center mb-8">
            <p>
              Not a member?
              <Link to="/Signup">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
