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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col">
          <Image
            src={item.image}
            width={310}
            height={195}
            alt={item.title}
            className="w-full rounded-3xl mb-4"
          />
          <h3 className="h5 mb-4">{item.title}</h3>
          <div className="mt-auto">
            <Button
              variant="stone"
              href={process.env.NEXT_PUBLIC_SERVER_URL + "/blog/" + item.href}
              text="Read more"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
