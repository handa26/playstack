import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const formattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  };

  return new Date(date).toLocaleDateString("en-US", options);
};

export const threeDigitsNum = (num: number) => {
  return ("00" + num).slice(-3)
};
