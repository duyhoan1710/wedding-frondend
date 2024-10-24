"use client";

import ReactQueryProvider from "@/components/common/ReactQueryProvider";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <ToastContainer />
    </>
  );
}
