"use client";
import { useMobileNav } from "@/hooks/useMobileNavigation";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import { headerNavLinks } from "@/libs/data";
import { cn } from "@/libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useRef } from "react";

function NavContent({
  handleLinkClick,
  navRef,
}: {
  handleLinkClick: (e: React.MouseEvent) => void;
  navRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <nav className="" ref={navRef}>
      <ul className="mx-6 mt-[100px] bg-white">
        {headerNavLinks.map((link) => (
          <li className="" key={link.label}>
            <Link onClick={handleLinkClick} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navigation() {
  const isSmallScreen = useSmallScreen();
  const navRef = useRef<HTMLDivElement>(null);
  const { isMobileNavActive, toggleMobileNav, closeMobileNav } = useMobileNav(
    navRef,
    isSmallScreen,
  );

  const mobileNavAnimationWrapper = useCallback(
    (children: React.ReactNode) => (
      <AnimatePresence>
        {isMobileNavActive && (
          <motion.div
            key="mobileNav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-gradient-to-t from-ml-dark-blue to-transparent"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    ),
    [isMobileNavActive],
  );

  const handleLinkClick = useCallback(() => {
    if (isSmallScreen) {
      closeMobileNav();
    }
  }, [isSmallScreen, closeMobileNav]);

  return (
    <>
      {/* <nav className="relative"> */}
      {isSmallScreen ? (
        mobileNavAnimationWrapper(
          <NavContent handleLinkClick={handleLinkClick} navRef={navRef} />,
        )
      ) : (
        <NavContent handleLinkClick={handleLinkClick} navRef={navRef} />
      )}
      {/* </nav> */}
      <button
        className={cn(
          "z-50 size-6 bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat sm:hidden",
          isMobileNavActive && "bg-[url(/images/icon-close.svg)]",
        )}
        aria-label={isMobileNavActive ? "Close menu" : "Open menu"}
        onClick={toggleMobileNav}
      ></button>
    </>
  );
}
