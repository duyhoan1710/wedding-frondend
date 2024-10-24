"use client";

import { InputCustom } from "@/components/common/Input";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { setAccessToken } from "@/lib/helpers/localStorage";
import { useRouter } from "next/navigation";
import { LoadingCircle } from "@/components/icons";
import { login } from "@/lib/fetchers";

export default function Login(): JSX.Element {
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Required field")
      .email("Invalid email format"),
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: () => login(getValues()),
    onSuccess: (res) => {
      console.log(res);
      setAccessToken(res.accessToken);
      router.push("/templates");
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  return (
    <section className="flex h-full min-h-screen items-center justify-center bg-neutral-200 dark:bg-neutral-700">
      <div className="h-full max-w-[80%] xl:max-w-[66%]">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <h3 className="mb-12 mt-1 pb-1 text-2xl font-semibold italic">
                        Welcome,
                      </h3>
                    </div>

                    <form>
                      {/* <!--Email input--> */}
                      <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <InputCustom
                          id="email"
                          type="text"
                          placeholder="email"
                          className=" bg-white"
                          {...register("email")}
                        ></InputCustom>
                      </div>

                      {/* <!--Password input--> */}
                      <div className="mb-4">
                        <label htmlFor="password">Password</label>
                        <InputCustom
                          id="password"
                          type="password"
                          placeholder="Password"
                          {...register("password")}
                        ></InputCustom>
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] duration-150 ease-in-out transition hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          onClick={handleSubmit(() => onSubmit())}
                          disabled={isPending}
                        >
                          {isPending ? <LoadingCircle /> : "Log in"}
                        </button>

                        {/* <!--Forgot password link--> */}
                        {/* <a href="#!">Forgot password?</a> */}
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex flex-col items-center justify-center pb-6 lg:flex-row">
                        <p className="mb-2 mr-2 lg:mb-0">
                          Don't have an account?
                        </p>
                        <Link
                          href="register"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger duration-150 ease-in-out transition hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="hidden items-center rounded-b-lg lg:flex lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
