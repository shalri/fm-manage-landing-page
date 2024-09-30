import Link from "next/link";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./Navigation"), { ssr: false });

export default function Header() {
  return (
    <header className="pt-[2.625rem]">
      <div className="flex items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Home"
          className="block h-[1.125rem] w-[7rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat"
        >
          <span className="sr-only">Home</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
