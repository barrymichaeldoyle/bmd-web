import Link from "next/link";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { iconStyle } from "./style";

interface FooterSocialLinkProps {
  "aria-label": string;
  href: string;
  icon: IconType;
}

export function FooterSocialLink({
  "aria-label": ariaLabel,
  href,
  icon: Icon,
}: PropsWithChildren<FooterSocialLinkProps>) {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      className="text-green-900 dark:text-white px-2 py-1 hover:underline text-align-center border-2 border-transparent rounded-lg hover:bg-black hover:border-primary transition-none"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon style={iconStyle} />
    </Link>
  );
}
