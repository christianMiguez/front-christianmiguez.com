import Image from "next/image";

const Logo = ({ variant = "black", width = 225, height = 50 }) => {
  return (
    <div>
      <h1>
        <Image
          width={width}
          height={height}
          src={`/assets/images/logo-${variant}.svg`}
          alt="Christian Miguez - Web Developer - Senior WordPress Developer - React, Nextjs, PHP, Web Design, SEO, Digital Marketing, and more."
        />
      </h1>
    </div>
  );
};

export default Logo;
