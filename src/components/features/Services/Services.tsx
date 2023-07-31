import { ImageAndTextRow } from "@/components/general";

export const Services = () => {
  const data = [
    {
      title: "Web Solutions",
      text: "I provide <strong>comprehensive web solutions</strong> to enhance your site and establish a strong online presence. With my expertise in both web design and development, I can create visually appealing and responsive websites that seamlessly adapt to various devices. Additionally, I offer reliable <strong>hosting services</strong>, ensuring that your site remains accessible and performs optimally on the cloud platform. ",
      image: "/assets/images/image3web.jpg",
    },
    {
      title: "Development",
      text: "With expertise in web layout, <strong>WordPress, PHP, JavaScript, React, NextJs</strong>, I create stunning and dynamic websites tailored to your needs. Whether you require a captivating design, seamless functionality, or cutting-edge features, I'm here to bring your vision to life and help your online venture thrive.",
      image: "/assets/images/image1web.jpg",
    },
    {
      title: "Design",
      text: "As a versatile web developer, I also specialize in design using Figma and Photoshop. I really like crafting captivating <strong>website layouts and user interfaces</strong> that align with your brand. From concept to final creation, I ensure every element is thoughtfully designed to leave a lasting impression on your audience, setting your business apart in the digital landscape.",
      image: "/assets/images/image2web.jpg",
    },
  ];

  return (
    <div className="my-12">
      <h3 className="text-center text-blue-middle font-normal">
        Unlock your imagination
      </h3>
      <p className="text-center">
        ...and I&apos;ll turn it into reality! Let&apos;s explore what I can
        bring you.
      </p>
      {data.map((item, index) => {
        return (
          <ImageAndTextRow
            key={index}
            title={item.title}
            text={item.text}
            inverse={index % 2 === 0}
            image={item.image}
          />
        );
      })}
    </div>
  );
};
