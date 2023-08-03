import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const sacra = localFont({
  src: "./Sacramento-Regular.ttf",
  variable: "--font-sacra",
});
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const workSans = localFont({
  src: "./WorkSans-VariableFont_wght.ttf",
  variable: "--font-workSans",
});
