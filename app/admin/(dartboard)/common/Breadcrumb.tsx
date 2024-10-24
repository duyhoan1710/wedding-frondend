import Link from "next/link";

export default function Breadcrumb() {
  return (
    <div className="mb-6 flex">
      <Link href="/">MUI</Link>
      <div className="mx-2">/</div>
      <Link href="/">Core</Link>
      <div className="mx-2">/</div>
      <div>Breadcrumbs</div>
    </div>
  );
}
