import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  variant: "orange" | "stone";
  href: string;
  text: string;
  className?: string;
  icon?: string;
};

const Button = ({ variant, href, text, className, icon }: ButtonProps) => {
  const classButton = {
    orange: "bg-orange text-white",
    stone: "bg-blue-stone text-white",
  };
  return (
    <Link
      href={href}
      className={`btn p-4 rounded-3xl px-8 py-3 bg-orange text-white whitespace-nowrap md:inline-block self-start ${classButton[variant]} ${className}`}
    >
      {icon && (
        <span className="mr-2">
          <Image
            src={
              icon === "email"
                ? "/assets/images/icons/email.svg"
                : "/assets/images/icons/arrow-right.svg"
            }
            width={icon === "email" ? 20 : 10}
            height={icon === "email" ? 20 : 10}
            alt="Conctact"
          />
        </span>
      )}
      {text}
    </Link>
  );
};

export default Button;
