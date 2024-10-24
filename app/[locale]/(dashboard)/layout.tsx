"use client";

import ReactQueryProvider from "@/components/common/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import { Header } from "./common/Header";
import { Sidebar } from "./common/Sidebar";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDisplayCreateNewTemplate, setIsDisplayCreateNewTemplate] =
    useState(false);
  const params = useParams();

  const isTemplateDetailPage = !!params?.slug;

  return (
    <div className="flex min-w-[1280px]">
      <ReactQueryProvider>
        <Sidebar
          setIsDisplayCreateNewTemplate={setIsDisplayCreateNewTemplate}
        />
        <div className="flex-grow">
          {!isTemplateDetailPage && (
            <Header isDisplayCreateNewTemplate={isDisplayCreateNewTemplate} />
          )}

          {children}
        </div>
      </ReactQueryProvider>
      <ToastContainer />
    </div>
  );
}
