import type { ReactNode } from "react";

const paths = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 6 8-6" />
    </>
  ),
  chat: <path d="M21 12a8.5 8.5 0 0 1-12.600 7.400L3.500 20.500l1.200-4.500A8.500 8.500 0 1 1 21 12Z" />,
  pin: (
    <>
      <path d="M12 21s6.500-5.600 6.500-11a6.500 6.500 0 1 0-13 0C5.500 15.400 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.300" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M12 7.500V12l3 2" />
    </>
  ),
  drop: <path d="M12 3.500S18 9.700 18 14a6 6 0 0 1-12 0c0-4.300 6-10.500 6-10.500Z" />,
  layers: (
    <>
      <path d="m12 4 8.500 4.500L12 13 3.500 8.500Z" />
      <path d="m3.500 12.500 8.500 4.500 8.500-4.500" />
      <path d="m3.500 16.500 8.500 4.500 8.500-4.500" />
    </>
  ),
  bottle: (
    <>
      <rect x="9" y="3" width="6" height="3.500" rx="1" />
      <path d="M10 6.500v2.200C7.500 9.500 6.500 11 6.500 13v5A2.500 2.500 0 0 0 9 20.500h6a2.500 2.500 0 0 0 2.500-2.500v-5c0-2-1-3.500-3.500-4.300V6.500" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 10 10 5 19.500 4.500 19 14 14 19 5 19Z" />
      <path d="M5 19c3-4 6-6.500 9-8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

/** Ikon garis sederhana. Warna mengikuti `currentColor`. */
export default function Icon({ name, size = 24, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
