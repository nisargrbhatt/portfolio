import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="flex max-w-md flex-col items-center justify-center gap-2">
        <h1 className="text-9xl font-extrabold tracking-tight text-primary">
          404
        </h1>
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or never existed.
        </p>

        <Link href="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
