import { GetInTouch, HomeHero, Services } from "@/components/features";
import { Grid } from "@/components/general";

async function getPosts() {
  const res = await fetch(
    `https://admin-christianmiguez-com.onrender.com/api/posts?limit=4`
  ).then((res) => res.json());

  const items = res.docs.map((doc: any) => ({
    image: doc.hero.media
      ? doc.hero.media.url
      : `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/images/images1web.webp`,
    title: doc.title,
    text: doc.hero.richText[0].children[0].text,
    href: doc.slug,
  }));

  console.log(items);

  return items;
}

export default async function Home() {
  const items = await getPosts();

  return (
    <>
      <HomeHero />
      <Services />

      <Grid items={items} />
      <GetInTouch />
    </>
  );
}
