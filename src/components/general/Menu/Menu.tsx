"use client";
import { BurgerMenuButton } from "@/components/features";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

type MenuProps = {
  variant: "black" | "white";
};
const Menu = ({ variant }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0, backgroundColor: "rgba(0,0,0)", color: "white" },
    closed: { opacity: 0, x: "-100%" },
  };

  const showMenuSlide = () => {
    setIsOpen((isOpen) => !isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };

  // detect if click on chr-main-menu ::before pseudo-element
  const menuRef = useRef<HTMLUListElement>(null);
  const handleBackdropClick = (e: any) => {
    // if click is 400px to the left of the menu, close it
    if (e.clientX > 256) {
      setIsOpen(false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };

  const colorPalette = {
    black: "text-black",
    white: "text-white",
  };

  const pathName = usePathname();
  const isHome = pathName === "/";

  return (
    <>
      <motion.ul
        className={`chr-main-menu list-none block absolute w-full left-0 top-0 p-6 text-2xl ${colorPalette[variant]} h-screen lg:h-auto lg:text-base lg:bg-transparent lg:!top-auto lg:!left-auto lg:!w-auto !lg:relative lg:flex lg:!opacity-100 lg:!translate-x-[-100%] whitespace-nowrap`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ spring: 400 }}
        variants={variants}
        ref={menuRef}
        onClick={handleBackdropClick}
      >
        <li className="mt-20 lg:mt-0">
          <Link
            href="/about"
            className="p-2 mb-1 block"
            onClick={() => {
              setIsOpen(false);
              document.getElementsByTagName("body")[0].style.overflow = "auto";
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/works"
            className="p-2 mb-1 block"
            onClick={() => {
              setIsOpen(false);
              document.getElementsByTagName("body")[0].style.overflow = "auto";
            }}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="p-2 mb-1 block"
            onClick={() => {
              setIsOpen(false);
              document.getElementsByTagName("body")[0].style.overflow = "auto";
            }}
          >
            Blog
          </Link>
        </li>
      </motion.ul>

      <BurgerMenuButton
        menuBehavior={showMenuSlide}
        isOpen={isOpen}
        variant={
          isHome
            ? variant === "white"
              ? "white"
              : "black"
            : isOpen
            ? "white"
            : "black"
        }
      />
    </>
  );
};

export default Menu;
