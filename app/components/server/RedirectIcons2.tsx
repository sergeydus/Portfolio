import React from "react";

type Props = {
    url: string,
    title: string,
    children?: React.ReactNode,
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
    title,
    children
}: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
            {children}
        </a>
    );
}