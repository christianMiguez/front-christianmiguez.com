"use client";
{
  /*  
    TODO: 1. - HTML:
             -- Backgorund full
             -- Me 
             -- Background graphic shape
             -- Background graphic lines
             -- Text headings
    */
}
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./HomeHero.module.scss";

export const HomeHero = () => {
  return (
    <div
      className={`${styles.hero} w-full bg-no-repeat bg-cover bg-center overflow-hidden absolute `}
    >
      <div className="md-container ">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="relative min-h-[600px] hidden md:block">
            <HomeShape />
            <HomeLines />
            <HomeMe />
          </div>
          <motion.div
            className="pt-24 pb-14 md:pt-52 text-white open-sans opacity-0 text-center md:text-left"
            animate={{
              opacity: 1,
              transitionDuration: "5s",
            }}
          >
            <span className="thin-style block mb-6">
              Hello👋, I&apos;m Chris
            </span>
            <div className="md:hidden">
              <Image
                src="/assets/images/meRemastered.jpg"
                alt="Christian Miguez"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6"
              />
            </div>
            <h2 className="h1 mb-6 md:mb-24">
              Freelance
              <br />
              Web Developer
            </h2>

            <span className="thin-style">Let&apos;s do business together!</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const HomeShape = () => {
  return (
    <motion.svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="594.000000pt"
      height="547.000000pt"
      viewBox="0 0 594.000000 547.000000"
      preserveAspectRatio="xMidYMid meet"
      className="absolute bottom-[-740px] w-[600px] left-[485px]"
      animate={{
        bottom: "-140px",
        left: "-85px",
        transitionDuration: "0.6s",
      }}
    >
      <g
        transform="translate(0.000000,547.000000) scale(0.100000,-0.100000)"
        fill="#004765"
        stroke="none"
      >
        <path
          d="M3120 4559 c-229 -21 -488 -103 -763 -240 -383 -191 -854 -522 -1194
-837 -73 -67 -139 -132 -146 -143 -8 -11 -34 -41 -59 -67 -62 -66 -186 -232
-242 -325 -212 -352 -237 -705 -73 -1032 185 -371 593 -712 1257 -1049 479
-244 947 -409 1305 -462 149 -22 394 -22 506 -1 363 71 591 268 742 643 94
233 146 639 133 1027 -21 630 -126 1224 -287 1630 -246 617 -643 906 -1179
856z"
        />
      </g>
    </motion.svg>
  );
};

const HomeLines = () => {
  return (
    <motion.svg
      viewBox="0 0 107 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      className="w-[75px] absolute bottom-[-600px] left-[150px]"
      animate={{
        bottom: "300px",
        left: "0",
        transitionDuration: "0.5s",
      }}
    >
      <rect
        width="95.7397"
        height="37.53"
        transform="matrix(0.763434 -0.645886 -0.645886 -0.763434 33.2401 99.4886)"
        fill="url(#pattern0)"
      />
      <rect
        width="95.7397"
        height="37.53"
        transform="matrix(0.763434 -0.645886 -0.645886 -0.763434 24.2401 90.4886)"
        fill="url(#pattern1)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_145_361"
            transform="matrix(0.00253165 0 0 0.00645828 0 -0.000516666)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_145_361"
            transform="matrix(0.00253165 0 0 0.00645828 0 -0.000516666)"
          />
        </pattern>
        <image
          id="image0_145_361"
          width="395"
          height="155"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAACbCAYAAACTQbekAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NEZGMDMxMDJBNTAxMUVFOTYwRkVDNzU5MTk1REY1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NEZGMDMxMTJBNTAxMUVFOTYwRkVDNzU5MTk1REY1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY0RkYwMzBFMkE1MDExRUU5NjBGRUM3NTkxOTVERjU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY0RkYwMzBGMkE1MDExRUU5NjBGRUM3NTkxOTVERjU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eFEr5gAAEnNJREFUeNrsnQnUVVUV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"
        />
      </defs>
    </motion.svg>
  );
};

const HomeMe = () => {
  return (
    <motion.div
      className={`${styles.me} w-[400px] h-[520px] absolute bottom-[-500px]`}
      animate={{
        bottom: 0,
      }}
      transition={{ ease: "linear", duration: 0.5 }}
    />
  );
};
