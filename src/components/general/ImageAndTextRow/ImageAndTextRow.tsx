import Image from "next/image";
import Link from "next/link";
type ImageAndTextRowProps = {
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
        <div className="md:grid md:grid-cols-2 gap-8">
          <div className={`${inverse ? "order-1" : "order-2"} self-center`}>
            <Image
              src={image}
              alt={title}
              width={485}
              height={340}
              className="rounded-lg mb-6 md:mb-0"
            />
          </div>
          <div className={`${inverse ? "order-2" : "order-1"} self-center`}>
            <h3
              className={`${
                inverse ? "text-left" : "text-right"
              } text-blue-stone mb-4`}
            >
              {title}
            </h3>
            <p
              className={`${inverse ? "text-left" : "text-right"}`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            {href && <Link href={href}>Learn more</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};
