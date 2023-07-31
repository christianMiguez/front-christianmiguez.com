"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button, Logo, Menu } from "@/components/general";
import { motion } from "framer-motion";

{
  /*  
    TODO: 1. - HTML:
             -- logo
             -- top menu
             -- button
             -- social icons
             -- responsive menu
    */
}

export const Header = () => {
  return (
    <motion.header
      className="absolute w-full z-10 p-4 top-[-100px]"
      animate={{
        top: 0,
      }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      <div className="md-container">
        <div className="flex items-center justify-between">
          <Logo variant="white" width={150} height={44} />
          <nav className="flex items-center gap-6">
            <Menu />

            <Button
              variant="orange"
              href="mailto:kisquian@gmail.com"
              text="Budget Request"
            />
            <a
              href="https://www.linkedin.com/in/christianmiguez/"
              target="_blank"
              className="text-white text-3xl hidden md:block"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/christianMiguez/"
              target="_blank"
              className="text-white text-3xl hidden md:block"
            >
              <FaGithub />
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
