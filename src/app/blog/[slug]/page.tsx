import Image from "next/image";
import { getPosts } from "@/utils/get-posts";
import { getImage } from "@/utils/get-payload-image";
import { Post } from "@/interfaces/post.interface";
import Content from "@/components/layout/Post/Content";
import CTA from "@/components/layout/Post/CTA";

export async function generateStaticParams() {
  const posts = await getPosts(100);

  const allPosts = await posts.map((post: any) => ({
    slug: post.href,
  }));

  return allPosts.map(({ slug }: any) => ({
    slug,
  }));
}

const getPost = async (slug: string) => {
  try {
    const post = await fetch(
      `${process.env.PAYLOAD_SERVER_URL}/api/posts?where[slug][equals]=${slug}`,
      {
        next: {
          revalidate: 60 * 60 * 30 * 6,
        },
      }
    ).then((resp) => resp.json());

    console.log(post.docs[0]);

    return post.docs[0];
  } catch (error) {
    // notFound();
    throw new Error("error");
  }
};

export default async function Post({ params }: any) {
  const post: Post = await getPost(params.slug);

  const title = post.title;
  const heroText = post.hero.richText[0].children[0].text;
  const heroImage = getImage(post.hero.media.url);

  return (
    <main className="py-28 duration-1000 animate-fadeInUp">
      {
        <>
          <div className="hero-post md-container mx-auto px-4">
            <Image
              src={heroImage}
              alt={title}
              width={980}
              height={600}
              className="rounded-3xl mx-auto mb-6 max-w-full"
            />
            <h1 className="text-xl md:text-4xl font-bold text-black mb-4 md:mb-8">
              {title}
            </h1>
          </div>
          <div className="layout-post">
            {post.layout.map((column) => {
              switch (column.blockType) {
                case "mediaBlock":
                  return (
                    <div className="md-container mx-auto px-4">
                      <Image
                        src={getImage(column.media!.url)}
                        alt={column.media!.alt}
                        width={980}
                        height={600}
                        className="rounded-3xl mx-auto mb-6 max-w-full"
                      />
                    </div>
                  );
                case "content":
                  return <Content columns={column.columns} />;
                case "cta":
                  const heroText = column.richText![0].children[0].text!;
                  const label = column.links![0].link.label;
                  const href = column.links![0].link.url;
                  // const appearance = column.links![0].link.appearance;

                  return (
                    <CTA
                      heroText={heroText}
                      label={label}
                      href={href}
                      appearance="orange"
                    />
                  );
                default:
                  return "Default<br/>";
              }
            })}
          </div>
        </>
      }
    </main>
  );
}
