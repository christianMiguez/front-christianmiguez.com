import { GetInTouch } from "@/components/features";
import GoogleAnalytics from "@/components/features/GoogleAnalytics";
import { ImageAndTextRow, ImageAndTextRowProps } from "@/components/general";
import { getPosts } from "@/utils/get-posts";

export const metadata = {
  title: "Christian Miguez:: Blog",
  description:
    "I just write things and stuff to share my knowledge and help people .",
};

export default async function Blog() {
  const items = await getPosts(4);
  return (
    <main className="py-32 md:py-32 duration-1000 animate-fadeInUp slide-in-from-bottom-6">
      <GoogleAnalytics GA_TRACKING_ID={"G-C4D9EFW4VL"} />

      <h1 className="h2 text-center mb-2">Blog</h1>
      <p className="text-center mb-10 text-slate-900 text-sm px-3">
        I just write things and stuff to share my knowledge and help people.
      </p>
      {items.map((item: ImageAndTextRowProps) => (
        <ImageAndTextRow
          key={item.title}
          title={item.title}
          text={item.text}
          image={item.image}
          href={`/blog/${item.href}`}
          inverse={true}
        />
      ))}
      <GetInTouch />
    </main>
  );
}
