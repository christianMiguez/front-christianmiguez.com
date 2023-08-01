import Image from "next/image";
import Link from "next/link";
import { Button } from "..";
export type ImageAndTextRowProps = {
  inverse?: boolean;
  title: string;
  text: string;
  href?: string;
  image: string;
};

export const ImageAndTextRow = ({
  inverse = false,
  title,
  text,
  href,
  image,
}: ImageAndTextRowProps) => {
  return (
    <div className={`${inverse ? "" : "bg-grey-light"} p-8`}>
      <div className="md-container mx-auto my-4">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          <div className={`${inverse ? "order-1" : "order-2"} self-center`}>
            <Image
              src={image}
              alt={title}
              width={485}
              height={340}
              className="rounded-3xl t mx-auto mb-6"
            />
          </div>
          <div className={`${inverse ? "order-2" : "order-1"} self-center`}>
            <h3
              className={`text-center ${
                inverse ? "lg:text-left" : "lg:text-right"
              } md:text-center text-blue-stone mb-4`}
            >
              {title}
            </h3>
            <p
              className={`text-center mb-4 ${
                inverse ? "lg:text-left" : "lg:text-right"
              }`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            {href && <Button variant="stone" text="Learn more" href={href} />}
          </div>
        </div>
      </div>
    </div>
  );
};
