import Image from "next/image";

export default async function Post() {
  const home = await fetch(
    `${process.env.PAYLOAD_SERVER_URL}/api/pages?where[slug][equals]=home`
  )
    .then((res) => res.json())
    .then((res) => res?.docs?.[0]);

  console.log(home);

  const metadata = home?.title || {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{home.title}</h1>
    </main>
  );
}
