type Props = {
  size?: number;
  className?: string;
};

/** Ikon bunga teratai sederhana. Warna mengikuti `currentColor`. */
export default function LotusMark({ size = 32, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 5c6 7 6.500 16 0 27C17.500 21 18 12 24 5Z" />
      <path d="M22.500 33C14 31 8.500 24 8 15c8 1.500 13.500 8 14.500 18Z" />
      <path d="M25.500 33C34 31 39.500 24 40 15c-8 1.500-13.500 8-14.500 18Z" />
      <path d="M21 35.500C13 37 5.500 34 2 27c8-1 15 1.500 19 8.500Z" opacity="0.65" />
      <path d="M27 35.500C35 37 42.500 34 46 27c-8-1-15 1.500-19 8.500Z" opacity="0.65" />
      <path d="M8 42h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
