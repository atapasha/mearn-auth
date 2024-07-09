import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to="/">
          <h1 className="font-bold">Auth App </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>Aboute</li>
          </Link>

          <Link to="/sign-in">
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
