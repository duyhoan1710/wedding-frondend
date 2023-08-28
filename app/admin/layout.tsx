import "../globals.css";
import cx from "classnames";
import { sfPro, inter, sacra } from "../fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, sacra.variable)}>
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
