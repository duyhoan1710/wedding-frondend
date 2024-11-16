import dayjs from "dayjs";
import ms from "ms";

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

export function cleanObj(obj: { [x: string]: any }) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      obj[propName] = "";
    }
  }
  return obj;
}

export function formatDateString(
  date: Date | string | null,
  format?: string,
): string | undefined {
  if (!date) return undefined;

  return dayjs(date).format(format || "DD-MM-YYYY");
}

export function formatDate(
  date: Date | string | null,
  format?: string,
): string {
  return dayjs(date).format(format || "YYYY-MM-DDTHH:mm:ss.sssZ");
}
