import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

type GroupByResult<T> = Record<string, T[]>;

export function groupBy<T>(array: T[], key: keyof T): GroupByResult<T> {
  return array.reduce((acc, item) => {
    const keyValue = String(item[key]);
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);
    return acc;
  }, {} as GroupByResult<T>);
}

export function absoluteUrl(path: string) {
  const appUrl =
    (typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env.VITE_APP_URL) ||
    "acern.dev";

  return process.env.NODE_ENV === "development"
    ? `http://localhost:5173${path}`
    : `https://${appUrl}${path}`;
}
