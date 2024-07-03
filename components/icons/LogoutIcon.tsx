export default function LogoutIcon({
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
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      />
    </svg>
  );
}
