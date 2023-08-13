"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button, Logo, Menu } from "@/components/general";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  const isHome = pathName === "/";

  return (
    <motion.header
      className={`absolute w-full p-4 z-10 top-[-100px] ${
        isHome ? "" : "bg-grey-light"
      }`}
      animate={{
        top: 0,
      }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      <div className="md-container">
        <div className="flex items-center justify-between">
          <Logo variant={isHome ? "white" : "black"} width={150} height={44} />
          <nav className="flex items-center gap-6">
            <Menu variant={isHome ? "white" : "black"} />

            <Button
              variant="orange"
              href="mailto:kisquian@gmail.com"
              text="Budget Request"
              className="hidden md:block"
            />
            <a
              href="https://www.linkedin.com/in/christianmiguez/"
              target="_blank"
              className={`${
                isHome ? "text-white" : "text-black"
              } text-3xl hidden md:block`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/christianMiguez/"
              target="_blank"
              className={`${
                isHome ? "text-white" : "text-black"
              } text-3xl hidden md:block`}
            >
              <FaGithub />
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
