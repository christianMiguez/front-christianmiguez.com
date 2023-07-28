import Link from "next/link";

type ButtonProps = {
  variant: "orange" | "white" | "black";
  href: string;
  text: string;
};

const Button = ({ variant, href, text }: ButtonProps) => {
  const classButton = {
    orange: "bg-orange text-white",
    black: "bg-black text-white",
    white: "bg-grey-light text-black",
  };
  return (
    <Link
      href={href}
      className={`p-4 rounded-3xl px-8 py-3 bg-orange text-white whitespace-nowrap hidden md:block ${classButton[variant]}`}
    >
      {text}
    </Link>
  );
};

export default Button;
