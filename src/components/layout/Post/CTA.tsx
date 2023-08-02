import { Button } from "@/components/general";

interface CTAProps {
  heroText: string;
  label: string;
  href: string;
  appearance: "orange" | "stone";
}
const CTA = ({ heroText, label, href, appearance }: CTAProps) => {
  return (
    <div className="w-full bg-gray-100 py-24 text-center my-12">
      <div className="md-container mx-auto-py-24">
        <h3 className="mb-6">{heroText}</h3>
        <Button href={href} text={label} variant={appearance} />
      </div>
    </div>
  );
};

export default CTA;
