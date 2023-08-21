import ms from "ms";

import { envVariable } from "./constants";
import { EnvVariableKey } from "./enum";

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

export function getEnvVariable(key: EnvVariableKey): string {
  const value = envVariable[key];

  if (!value || value.length === 0) {
    console.error(`The environment variable ${key} is not set.`);
    throw new Error(`The environment variable ${key} is not set.`);
  }

  return value;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getPagination = (
  url: string,
): { page: number; perPage: number } => {
  const query = new URL(url).searchParams;

  const page = Number(query.get("page")) || 1;
  const perPage = Number(query.get("perPage")) || 20;

  return { page, perPage };
};
