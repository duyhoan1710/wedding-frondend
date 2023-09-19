import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import cx from "classnames";

import { sfPro, inter, sacra } from "../fonts";
import FadeInSection from "@/components/shared/FadeInSection";

import "../globals.css";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Đám cưới An Điền  - Anh Thơ",
  // description:
  //   "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://anhtho-diennguyen.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={cx(sfPro.variable, inter.variable, sacra.variable)}>
        <main className="min-h-screen w-full">
          <FadeInSection>{children}</FadeInSection>
        </main>
      </body>
    </html>
  );
}
