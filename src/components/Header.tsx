import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "./Button";

const Navigation = dynamic(() => import("./Navigation"), { ssr: false });

export default function Header() {
  return (
    <header className="pt-[2.625rem] sm:pt-[56px]">
      <div className="mx-auto flex max-w-[72.375rem] items-center justify-between px-6 sm:gap-x-6">
        <Link
          href="/"
          aria-label="Home"
          className="block h-[1.125rem] w-[7rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat sm:mt-[6px] sm:h-[26px] sm:w-[9.125rem]"
        >
          <span className="sr-only">Home</span>
        </Link>
        <Navigation />
        <Button className="hidden sm:mb-[10px] sm:block" />
      </div>
    </header>
  );
}
