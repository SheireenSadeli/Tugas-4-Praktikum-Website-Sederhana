import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  variant?: "primary" | "accent" | "outline";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
}: Props) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
