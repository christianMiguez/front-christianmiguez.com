import Link from "next/link";

type ButtonProps = {
  variant: "orange" | "stone";
  href: string;
  text: string;
  className?: string;
};

const Button = ({ variant, href, text, className }: ButtonProps) => {
  const classButton = {
    orange: "bg-orange text-white",
    stone: "bg-blue-stone text-white",
  };
  return (
    <Link
      href={href}
      className={`p-4 rounded-3xl px-8 py-3 bg-orange text-white whitespace-nowrap md:inline-block self-start ${classButton[variant]} ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
