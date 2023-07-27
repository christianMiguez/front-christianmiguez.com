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

export default function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <Grid />
      <GetInTouch />
    </>
  );
}
