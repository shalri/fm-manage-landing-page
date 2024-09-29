import { footerNavLinks, footerSupportLinks } from "@/libs/data";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-ml-very-dark-blue pt-[52px] text-white">
      <form className="flex justify-between space-x-2 px-6">
        <input
          className="rounded-full px-6 placeholder:text-sm placeholder:text-ml-dark-grayish-blue"
          placeholder="Updates in your inbox..."
        />
        <Button text="GO" className="px-[30px] shadow-none" />
      </form>

      <div className="ml-auto mt-[56px] grid max-w-[312px] grid-cols-2 place-items-start text-sm">
        <ul className="space-y-[15px]">
          {footerNavLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-[15px] pl-3">
          {footerSupportLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">Social Links {/*TODO: use react-icons */}</div>
      <div className="">
        <Link
          href="/"
          aria-label="Home"
          className="block h-8 w-[200px] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat"
        >
          <span className="sr-only">Home</span>
        </Link>
      </div>
    </footer>
  );
}
