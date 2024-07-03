export default function TemplateIcon({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-gray-100 ${className}`}
      fill={"none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      color={isActive ? "#0072F5" : "#404649"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}
