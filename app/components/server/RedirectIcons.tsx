import React from "react";
import Image from "next/image";

type Props = {
    url: string,
    src: string,
    alt: string,
    title: string,
};

/**
 * RedirectIcons
 * Simple icon links to GitHub and LinkedIn.
 *
 * Usage:
 * <RedirectIcons
 *   githubUrl="https://github.com/your-username"
 *   linkedInUrl="https://www.linkedin.com/in/your-profile"
 *   size={24}
 *   className="my-class"
 * />
 */
export default function RedirectIcons({
    url,
    src,
    alt,
    title
}: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
            <Image
                // className="dark:invert"
                color="red"
                src={src}
                alt={alt}
                width={32}
                height={32}
                priority
            />
        </a>
    );
}