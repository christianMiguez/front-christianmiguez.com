import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

type Item = {
  image: string;
  title: string;
  categories?: {
    name: string;
    href: string;
  }[];
  text: string;
  href: string;
  buttonVariant?: string;
};
type GridProps = {
  items: Item[];
};

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col">
          <Link
            href={process.env.NEXT_PUBLIC_SERVER_URL + "/blog/" + item.href}
          >
            <Image
              src={item.image}
              width={310}
              height={195}
              alt={item.title}
              className="w-full rounded-3xl mb-4"
            />
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_SERVER_URL + "/blog/" + item.href}
            className="pb-4 d-block"
          >
            <h3 className="h4">{item.title}</h3>
          </Link>
          <Button
            variant="stone"
            href={process.env.NEXT_PUBLIC_SERVER_URL + "/blog/" + item.href}
            text="Read more"
          />
        </div>
      ))}
    </div>
  );
};
