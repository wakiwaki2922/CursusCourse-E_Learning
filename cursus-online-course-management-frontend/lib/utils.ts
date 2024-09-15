import { type ClassValue, clsx } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const distanceDateToNow = (dateString: string): string => {
  const date = new Date(dateString);
  const offset = date.getTimezoneOffset();
  console.log("Offset:", offset);
  date.setMinutes(date.getMinutes() - offset);
  console.log("Date:", date);
  return formatDistanceToNow(date, { addSuffix: true });
};
