import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import cx from "classnames";

import { sfPro, inter, sacra } from "../fonts";

import "../globals.css";

export const metadata = {
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
