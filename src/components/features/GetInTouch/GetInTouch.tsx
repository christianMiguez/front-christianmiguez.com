import { Button } from "@/components/general";

export const GetInTouch = () => {
  return (
    <div className="md-container mx-auto px-8 py-24 ">
      <div className="flex flex-col text-center lg:text-left lg:flex-row gap-8">
        <div>
          <h3 className="mb-4">
            Let&apos;s work together to grow your business.
          </h3>
          <p>
            If you are looking for a Web Developer, your new fresh Web Design or
            Social Media Marketing, let&apos;s talk about. I look forward to get
            new challenges and make cool things.
          </p>
        </div>
        <Button
          text="Get in Touch"
          variant="orange"
          href="mailto:kisquian@gmail.com"
          className="mx-auto"
        />
      </div>
    </div>
  );
};
