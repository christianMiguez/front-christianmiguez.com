import Image from "next/image";
import Button from "../Button/Button";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title}>
          <Image src={item.image} width={310} height={195} alt={item.title} />
          <h3>{item.title}</h3>
          <Button
            variant="orange"
            href={process.env.NEXT_PUBLIC_SERVER_URL + "/" + item.href}
            text="Read more"
          />
        </div>
      ))}
    </div>
  );
};
