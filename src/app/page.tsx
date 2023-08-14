import { GetInTouch, HomeHero, Services } from "@/components/features";
import GoogleAnalytics from "@/components/features/GoogleAnalytics";
import { Grid } from "@/components/general";
import { getPosts } from "@/utils/get-posts";

export default async function Home() {
  const items = await getPosts(4);

  return (
    <>
      <HomeHero />
      <Services />
      <GoogleAnalytics GA_TRACKING_ID={"G-C4D9EFW4VL"} />

      <section className="p-8 bg-blue-dark text-white">
        <div className="container mx-auto">
          <Grid items={items} />
        </div>
      </section>
      <GetInTouch />
    </>
  );
}
