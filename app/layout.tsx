import "./globals.css";
import cx from "classnames";
import { sfPro, inter, sacra } from "./fonts";
import FadeInSection from "@/components/common/FadeInSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, sacra.variable)}>
        <main className="min-h-screen w-full">
          <FadeInSection>{children}</FadeInSection>
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  );
}
