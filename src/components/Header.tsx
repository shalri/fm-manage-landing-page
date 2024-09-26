import { headerNavLinks } from "@/libs/data";
import Link from "next/link";

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
        <nav className="hidden">
          <ul className="">
            {headerNavLinks.map((link) => (
              <li className="" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="size-6 bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat"
          aria-label="Open Menu"
        ></button>
      </div>
    </header>
  );
}
