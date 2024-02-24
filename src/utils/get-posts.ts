import { getImage } from "./get-payload-image";
import data from "./../api/posts.json";

export async function getPosts(limit: number) {

  const items = data.docs.map((doc: any) => ({
    image: doc.hero.media
      ? getImage(doc.hero.media.url)
      : `/assets/images/images1web.webp`,
    title: doc.title,
    text: doc.hero.richText[0].children[0].text,
    href: doc.slug,
  }));

  return items;
}
