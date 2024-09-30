import { socialLinks } from "@/libs/data";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <>
      {socialLinks.map((link) => {
        const IconComponent = {
          Facebook: FaFacebookSquare,
          YouTube: FaYoutubeSquare,
          Twitter: FaTwitterSquare,
          Pinterest: FaPinterestSquare,
          Instagram: FaInstagramSquare,
        }[link.label];

        return (
          <li className="" key={link.label}>
            <a
              href={link.href}
              className=""
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
            >
              {IconComponent && <IconComponent className={className} />}
            </a>
          </li>
        );
      })}
    </>
  );
}
