"use client";

type BreadcrumbProps = { productName: string };

export default function Breadcrumb({ productName }: BreadcrumbProps) {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-2 text-gray-500 text-sm">
      <span className="text-black font-medium hover:underline cursor-pointer">
        Home
      </span>
      <span className="mx-1">›</span>
      <span className="text-gray-400">{productName}</span>
    </nav>
  );
}
