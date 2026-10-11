import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "bolt"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "dumbbell"
  | "flame"
  | "home"
  | "profile"
  | "shield"
  | "star"
  | "stats"
  | "target";

export default function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M7 3v4M17 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    dumbbell: (
      <>
        <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
      </>
    ),
    flame: (
      <path d="M12 22c4.4 0 7-3.2 7-7.2 0-3.2-1.8-6.1-4.7-8.8.1 2.2-.8 4.1-2.1 5.2.2-3.8-1.8-6.7-4.5-9.2.2 4-2.7 6.3-2.7 12.8C5 18.8 7.6 22 12 22Z" />
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    star: (
      <path d="m12 2 3 6 6.5 1-4.7 4.7 1.1 6.3-5.9-3-5.9 3 1.1-6.3L2.5 9 9 8l3-6Z" />
    ),
    stats: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v4M21 12h-4M12 21v-4M3 12h4" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}
