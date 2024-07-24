"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

export const NAV_LINKS = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/#about",
  },
  {
    id: 3,
    label: "Skills",
    href: "/#skills",
  },
  {
    id: 4,
    label: "Projects",
    href: "/#projects",
  },
];

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isActiveLink = (link: string) => link === pathname;

  return (
    <div className="p-5 flex justify-center z-[4000] max-w-screen-2xl">
      <header className="fixed max-w-screen-2xl w-[95%] md:w-[90%] h-20 bg-black z-[4000] rounded-full border-[0.5px] border-[#734def] flex justify-between items-center px-5 md:px-10 overflow-auto">
        <div className="flex items-center gap-20">
          <Link href="/" className="text-white font-[600] text-[25px]">
            Emmanuel
          </Link>

          <nav className="relative mt-6 hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-white font-[400] text-[14px] pb-6 ${
                  isActiveLink(link.href)
                    ? "border-b-4 relative pb- border-[#b21eb2] rounded-[1px]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="lg:flex hidden items-center gap-5">
          <Link
            href="/#contact"
            className="text-white font-[700] text-[15px] w-fit h-fit px-14 py-4 rounded-full bg-[#5b1fb5ba] hover:bg-[#5b1fb5]"
          >
            Contact me
          </Link>
        </div>

        <div className="flex lg:hidden">
          {isMenuOpen ? (
            <button
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#5b1fb5] hover:bg-[#5b1fb5ba] text-white rounded-full p-2"
            >
              <Cross1Icon className="w-5 h-5 text-white" />
            </button>
          ) : (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="bg-[#5b1fb5] hover:bg-[#5b1fb5ba] text-white rounded-full p-2 z-[5000]"
            >
              <HamburgerMenuIcon className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#0000006f] z-30 w-full fixed top-0 bottom-0 left-0 right-0"
        />
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.1 }}
            className="bg-[#3a225e] w-full h-[70%] rounded-t-xl fixed bottom-0 z-[5000] transition-all duration-500 flex lg:hidden flex-col gap-5 py-10"
          >
            {NAV_LINKS.map((link) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={link.id}
                href={link.href}
                className={`font-[600] text-[15px] p-4 w-[90%] mx-auto rounded-md ${
                  isActiveLink(link.href)
                    ? "bg-white text-[#5b1fb5]"
                    : "text-white hover:bg-white hover:text-[#5b1fb5]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/#contact"
              className="text-white font-[700] text-[15px] w-[90%] h-fit p-4 mx-auto rounded-md bg-[#401582] hover:bg-[#5b1fb5] mt-auto"
            >
              Contact me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
