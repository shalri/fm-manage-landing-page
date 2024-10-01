import { footerNavLinks, footerSupportLinks } from "@/libs/data";
import Link from "next/link";
import Button from "./Button";
import SocialLinks from "./ui/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-ml-very-dark-blue pb-8 pt-[52px] text-white">
      <form className="flex flex-nowrap items-center justify-center gap-2 px-6">
        <input
          className="flex-grow rounded-full px-6 py-[10px] text-ml-very-dark-blue placeholder:text-sm placeholder:text-ml-dark-grayish-blue"
          type="email"
          placeholder="Updates in your inbox..."
        />
        <Button text="GO" className="px-[30px] shadow-none" type="submit" />
      </form>

      <div className="mx-auto mt-[56px] grid max-w-[312px] grid-cols-2 text-sm">
        <ul className="space-y-[15px] place-self-center pr-7">
          {footerNavLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="ml-auto space-y-[15px] pr-4">
          {footerSupportLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-12 flex justify-between px-9">
        <SocialLinks className="text-[2.25rem] hover:text-ml-bright-red" />
      </ul>

      <div className="mt-[50px] flex justify-center">
        <Link
          href="/"
          aria-label="Home"
          className="block h-8 w-[158px] bg-[url(/images/logo-light.svg)] bg-contain bg-no-repeat"
        >
          <span className="sr-only">Home</span>
        </Link>
      </div>
      <div className="mt-12 text-center text-xs text-white/30">
        Copyright 2020. All Rights Reserved
      </div>
    </footer>
  );
}
