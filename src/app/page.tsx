import { GetInTouch, HomeHero, Services } from "@/components/features";
import { Grid } from "@/components/general";

{
  /*  
    TODO: 1. - HTML:
             -- logo
             -- menu
             -- responsive
    */
}

export default async function Home() {
  const home = await fetch(
    `${process.env.PAYLOAD_SERVER_URL}/api/pages?where[slug][equals]=home`
  )
    .then((res) => res.json())
    .then((res) => res?.docs?.[0]);

  console.log(home);

  const metadata = home?.title || {};

  return (
    <>
      <HomeHero />
      <Services />
      <Grid />
      <GetInTouch />
    </>
  );
}
