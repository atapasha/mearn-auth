import React, { useDebugValue } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">SignUp</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="p-3 rounded-lg bg-slate-100"
        />

        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80 ">
          Sign up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an Account?</p>
        <Link to="/sign-in">
          <span className="text-blue-600"> Sign in</span>
        </Link>
      </div>
    </div>
  );
}
