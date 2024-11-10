import ms from "ms";
import { EWindowSize } from "./enum";

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never";
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`;
};

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length)}...`;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getImage = (url: string) => {
  return process.env.NEXT_PUBLIC_SERVER_IMAGE + "/" + url;
};
