"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [ItemActive, setItemActive] = useState();

  return (
    <div className="h-screen w-64  border-r border-black-border duration-300">
      <div className="h-[69px]"></div>

      <ul className="px-4 py-8 text-sm">
        <li className="mb-6 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200">
          <Link
            href="admin/home"
            className="flex items-center space-x-3 py-2 px-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-base">Home</span>
          </Link>
        </li>

        <li className="mb-1 rounded-lg text-xs text-gray-600 duration-150">
          <span>Main menu</span>
        </li>

        <li className="mb-2 rounded-lg bg-blue-200 px-3 text-gray-600 duration-150 transition-colors">
          <Link
            href="admin/users"
            className="flex items-center space-x-3 py-2 px-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
                fill="#0072F5"
              ></path>
            </svg>
            <span className="text-base">Users</span>
          </Link>
        </li>

        <li className="mb-2 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200">
          <Link
            href="admin/wedding"
            className="flex items-center space-x-3 py-2 px-1"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              // className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-base">Template</span>
          </Link>
        </li>

        <li className="mb-2 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200">
          <Link href="#" className="flex items-center space-x-3 py-2 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <span className="text-base">Inbox</span>
          </Link>
        </li>

        <li className="mb-2 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200">
          <Link href="#" className="flex items-center space-x-3 py-2 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-base">Settings</span>
          </Link>
        </li>

        <li className="mb-2 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200">
          <Link
            href="/logout"
            className="flex items-center space-x-3 py-2 px-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-base">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
