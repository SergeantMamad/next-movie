import {clsx , ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function customcn (...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}