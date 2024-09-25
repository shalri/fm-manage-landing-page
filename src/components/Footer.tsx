import { footerLinks } from "@/libs/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <form className="">
        <p className="">Updates in your inbox</p>
        <button className="">Go</button>
      </form>

      <div className="">
        <ul className="">
          {footerLinks.map((link) => (
            <li className="" key={link.label}>
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
