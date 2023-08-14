import { Logo } from "@/components/general";
import Link from "next/link";

{
  /*  
    TODO: 1. - HTML:
             -- logo
             -- menu
             -- responsive
    */
}

export const Footer = () => {
  return (
    <div className="bg-grey-light py-8 hidden">
      <div className="md-container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <Logo width={150} height={44} />
        <span className="py-6">Freelance Web Developer</span>
        <ul className="flex">
          <li>
            <Link href="/home" className="p-2 mb-1 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="p-2 mb-1 block">
              About
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
        </ul>
      </div>
    </div>
  );
};
