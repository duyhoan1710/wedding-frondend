"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);

    // if (res.success) {
    //   toast.success(res.message);
    // } else {
    //   toast.error(res.message);
    // }
  };

  return (
    <>
      <section className="bg-slate-200 text-center">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-indigo-700 dark:bg-indigo-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 dark:text-white md:text-2xl">
                Create an Account
              </h1>
              <form
                onSubmit={handleSubmit}
                className=" space-y-4 md:space-y-6"
                action="#"
              >
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-indigo-700 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-indigo-300 bg-indigo-50 p-2.5 text-indigo-700 dark:border-indigo-600 dark:bg-indigo-700 dark:text-white dark:placeholder-indigo-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="Abdullah Moiz"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-indigo-700 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-indigo-300 bg-indigo-50 p-2.5 text-indigo-700 dark:border-indigo-600 dark:bg-indigo-700 dark:text-white dark:placeholder-indigo-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-indigo-700 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-indigo-300 bg-indigo-50 p-2.5 text-indigo-700 dark:border-indigo-600 dark:bg-indigo-700 dark:text-white dark:placeholder-indigo-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-indigo-500 dark:text-indigo-400">
                  Already have an account{" "}
                  <Link
                    href="/login"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
