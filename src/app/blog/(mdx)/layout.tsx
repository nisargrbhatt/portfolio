import Link from "next/link";

export default function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-4">
      <div className="border-r border-b p-2">
        <Link href="/blog" className="text-sm">
          Back to Blogs
        </Link>
      </div>
      <div className="w-full p-4">{children}</div>
    </div>
  );
}
