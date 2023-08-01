import Image from "next/image";
import { getPosts } from "@/utils/get-posts";
import { getImage } from "@/utils/get-payload-image";

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
        // cache: 'force-cache',// TODO: cambiar esto en un futuro
        next: {
          revalidate: 60 * 60 * 30 * 6,
        },
      }
    ).then((resp) => resp.json());

    console.log("Se cargó: ", post.title);

    return post;
  } catch (error) {
    // notFound();
    throw new Error("error");
  }
};

export default async function Post({ params }: any) {
  const post = await getPost(params.slug);

  const title = post.docs[0].title;
  const heroText = post.docs[0].hero.richText[0].children[0].text;
  const heroImage = getImage(post.docs[0].hero.media.url);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        <>
          <h1 className="text-4xl font-bold text-black">{title}</h1>
          <Image
            src={heroImage}
            alt={title}
            width={485}
            height={340}
            className="rounded-3xl t mx-auto mb-6"
          />
          <p>{heroText}</p>
        </>
      }
    </main>
  );
}
