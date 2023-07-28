"use client";
import { BurgerMenuButton } from "@/components/features";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const showMenuSlide = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  // detect if click on chr-main-menu ::before pseudo-element
  const menuRef = useRef<HTMLUListElement>(null);
  const handleBackdropClick = (e: any) => {
    // if click is 400px to the left of the menu, close it
    if (e.clientX > 256) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.ul
        className="chr-main-menu list-none block absolute w-64 left-0 top-0 p-6 text-2xl bg-black h-screen lg:h-auto lg:text-base lg:bg-transparent lg:!top-auto lg:!left-auto lg:!w-auto !lg:relative lg:flex text-white lg:!opacity-100 lg:!translate-x-[-100%] whitespace-nowrap"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ spring: 400 }}
        variants={variants}
        ref={menuRef}
        onClick={handleBackdropClick}
      >
        <li>
          <Link href="/" className="p-2 mb-1 block">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="p-2 mb-1 block">
            About me
          </Link>
        </li>
        <li>
          <Link href="/works" className="p-2 mb-1 block">
            Works
          </Link>
        </li>
        <li>
          <Link href="/blog" className="p-2 mb-1 block">
            Blog
          </Link>
        </li>
      </motion.ul>

      <BurgerMenuButton menuBehavior={showMenuSlide} isOpen={isOpen} />
    </>
  );
};

export default Menu;
