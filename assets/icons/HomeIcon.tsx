export function HomeIcon({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gray-100 ${className}`}
      fill={"none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      width="24"
      height="24"
      color={isActive ? "#0072F5" : "#404649"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}
