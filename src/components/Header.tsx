import { headerNavLinks } from "@/libs/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="flex">
        <div className="">
          <Link
            href="/"
            aria-label="Home"
            className="block h-8 w-[200px] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat"
          >
            <span className="sr-only">Home</span>
          </Link>
        </div>
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
