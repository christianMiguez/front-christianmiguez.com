import { getImage } from "./get-payload-image";

export async function getPosts(limit: number) {
  const res = await fetch(
    `https://admin-christianmiguez-com.onrender.com/api/posts?limit=${limit}`
  ).then((res) => res.json());

  const items = res.docs.map((doc: any) => ({
    image: doc.hero.media
      ? getImage(doc.hero.media.url)
      : `/assets/images/images1web.webp`,
    title: doc.title,
    text: doc.hero.richText[0].children[0].text,
    href: doc.slug,
  }));

  return items;
}
