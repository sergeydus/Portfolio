import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getBasePath = () => process.env.NEXT_PUBLIC_BASE_PATH || ''
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
