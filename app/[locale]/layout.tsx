import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import cx from "classnames";

import { sfPro, inter, sacra } from "../fonts";

import "../globals.css";

export const metadata = {
  title: "Đám cưới Điền Nguyễn - Thơ Nguyễn",
  // description:
  //   "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Precedent - Building blocks for your Next.js project",
  //   description:
  //     "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  //   creator: "@steventey",
  // },
  image: "/assets/wedding_img/37.jpg",
  metadataBase: new URL("https://precedent.dev"),
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
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
