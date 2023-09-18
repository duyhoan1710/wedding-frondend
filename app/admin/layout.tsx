"use client";

import "../globals.css";
import cx from "classnames";
import { sfPro, inter, sacra } from "../fonts";
import ReactQueryProvider from "@/components/shared/ReactQueryProvider";
import { ToastContainer } from "react-toastify";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, sacra.variable)}>
        <main className="min-h-screen w-full">
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
