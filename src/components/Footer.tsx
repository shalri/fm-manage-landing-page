import { footerNavLinks, footerSupportLinks } from "@/libs/data";
import Link from "next/link";
import Button from "./Button";
import SocialLinks from "./ui/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-ml-very-dark-blue pb-8 pt-[3.25rem] text-white sm:pb-12">
      <div className="mx-auto max-w-[400px] px-7 sm:mt-2 sm:grid sm:max-w-[72.375rem] sm:grid-cols-[1fr_2fr_1fr] sm:pb-0">
        <form className="flex flex-nowrap items-center justify-center gap-2 px-6 sm:items-start sm:sm:pr-0">
          <input
            className="flex-grow rounded-full px-6 py-[10px] text-ml-very-dark-blue placeholder:text-sm placeholder:text-ml-dark-grayish-blue sm:w-[200px]"
            type="email"
            placeholder="Updates in your inbox..."
          />
          <Button
            text="GO"
            className="px-[30px] shadow-none sm:px-[18px] sm:text-sm"
          />
        </form>

        <div className="mx-auto mt-[56px] grid max-w-[312px] grid-cols-2 text-sm sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:mt-1 sm:w-full sm:max-w-full sm:content-between">
          <ul className="space-y-[15px] place-self-center pr-7 sm:place-self-start sm:pl-[0.75rem]">
            {footerNavLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-ml-bright-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="ml-auto space-y-[15px] pr-4 sm:ml-0 sm:pl-[1.75rem]">
            {footerSupportLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-ml-bright-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 flex justify-between px-9 sm:col-span-1 sm:col-start-1 sm:row-start-2 sm:mr-auto sm:mt-0 sm:max-w-[192px] sm:space-x-[10px] sm:place-self-end sm:pl-0">
          <SocialLinks className="text-[2.25rem] transition-colors duration-300 hover:text-ml-bright-red sm:text-[1.5rem]" />
        </ul>

        <div className="mt-[50px] flex justify-center sm:col-span-1 sm:row-start-1 sm:mt-0 sm:block">
          <Link
            href="/"
            aria-label="Home"
            className="block h-8 w-[158px] bg-[url(/images/logo-light.svg)] bg-contain bg-no-repeat sm:w-[150px]"
          >
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <div className="sm:cols-span-1 mt-12 text-center text-xs text-white/30 sm:col-start-3 sm:ml-auto sm:mt-0 sm:place-self-end">
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
