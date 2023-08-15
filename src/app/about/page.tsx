import Image from "next/image";
import styles from "./page.module.scss";
import GoogleAnalytics from "@/components/features/GoogleAnalytics";
export default async function About() {
  return (
    <main className="py-32 md:py-32 transition-opacity animate-fadeInUp duration-700 opacity-100">
      <GoogleAnalytics GA_TRACKING_ID={"G-C4D9EFW4VL"} />

      <div className="md-container">
        <div className={`lg:grid lg:grid-cols-3 gap-8 px-4 lg:px-0`}>
          <div className="lg:col-span-2 md:order-2">
            <div className="resume_heading md:h-[218px] flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="h2 md:h1 text-blue-middle font-extrabold tracking-tighter">
                  Christian Miguez
                </h2>
                <a href="/resume.pdf" target="_blank">
                  <Image
                    src="/assets/images/icons/pdf.svg"
                    width={48}
                    height={48}
                    className="p-1 ml-4"
                    alt="Download as PDF"
                  />
                </a>
              </div>
              <span className="text-blue-dark text-xl font-bold">
                Web Developer
              </span>
            </div>
            <div className={`${styles["resume_section"]} mt-10`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/profile.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Profile"
                />
                <h3 className="h4 text-blue-middle">About me</h3>
              </div>

              <div className="resume_content pl-16 mb-10">
                <p className={`h5 font-bold mb-4 ${styles.dot}`}>
                  Hi there! 🙂
                </p>
                <p>
                  I&apos;m a {new Date().getFullYear() - 1991} years old guy
                  from Uruguay who always loved web design and programming. I
                  started my career as a web developer in 2012 and since then
                  I&apos;ve been working in various companies with different
                  technologies like HTML, CSS, JavaScript, TypeScript, PHP,
                  WordPress, React, NextJS, NodeJS, and others. I&apos;m a
                  self-taught person who loves to learn new things and I&apos;m
                  always looking for new challenges. Nothing makes me happier
                  than help people to achieve their goals, and be as
                  professional as possible.
                </p>
              </div>
            </div>

            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/experience.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Experience"
                />
                <h3 className="h4 text-blue-middle">Experience</h3>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">at OnPoint Global</p>
                <p className="mb-4">
                  OnPoint Global is a high growth data driven internet company
                  that retains a large editorial and publishing staff to develop
                  original content across its portfolio of vertical and geo
                  focused brands.
                </p>
                <p>
                  My work there was work along a big team of developers and
                  designers to create and maintain WordPress websites for the
                  company and its clients. In the last time I was working with
                  React and NextJS to create new websites and improve the UX of
                  the existing ones.
                </p>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2014 - 2018</span>
                <h3 className={`h5 ${styles.dot}`}>WordPress Developer</h3>
                <p className="small mb-4">at Tenfield.com</p>
                <p className="mb-4">
                  Tenfield is a broadcasting corporation which holds the
                  commercial rights to broadcast the Uruguayan football and
                  basketball.
                </p>
                <p>
                  My work there was create and maintain WordPress websites for
                  the company, creating custom rank tables for the football and
                  basketball leagues, and creating custom plugins to manage the
                  content of the websites.
                </p>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2013 - 2014</span>
                <h3 className={`h5 ${styles.dot}`}>Web developer</h3>
                <p className="small mb-4">at Wintrillions.com</p>
                <p className="mb-4">
                  Established in 2005, WinTrillions is an amazing online lottery
                  provider offering lotteries, syndicates, millionaire raffles
                  and scratch cards. It provides players with the opportunity to
                  participate in draws of the most popular lotteries around the
                  world.
                </p>
                <p>
                  In Wintrillions the main tasks I had were: Design and Layout
                  newsletters and their Casino website
                </p>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2012 - 2013</span>
                <h3 className={`h5 ${styles.dot}`}>Web Developer</h3>
                <p className="small mb-4">at Meeting</p>
                <p className="mb-4">
                  Meeting is a creative digital agency based in Montevideo,
                  which provides services in the areas of web design, web
                  development, mobile applications, and digital marketing.
                </p>
                <p>
                  In Meeting I was working as a web developer, creating websites
                  for the company and its clients using just HTML, CSS, JS, PHP
                  and WordPress.
                </p>
              </div>
            </div>

            <div
              className={`${styles["resume_section"]} mt-20 hidden lg:block`}
            >
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/hobbies.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Hobbies"
                />
                <h3 className="h4 text-blue-middle">Hobbies</h3>
              </div>

              <div className="resume_content pl-16 mb-10">
                <p>
                  Learning and playing with new technologies is one of my
                  favorite hobbies, but not only coding is my life about: I love
                  to play soccer and pass a good time with my friends, watch
                  movies and series, and spend time with my family (my dogs are
                  part of my family too 😄), go for a walk to the park with them
                  is something I really enjoy. Spend time in the nature, drink
                  Mate and having a good time is all I need to be happy.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 p-3 lg:pr-10 lg:bg-grey-light rounded-xl md:order-1">
            <Image
              src="/assets/images/me2.png"
              alt="Christian Miguez"
              width={200}
              height={200}
              quality={100}
              className="rounded-full mx-auto mb-4 mt-6 md:mt-0 lg:mr-[10px] hidden lg:block"
            />

            <div className={`${styles["resume_section"]} mt-10`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/education.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Education"
                />
                <h3 className="h4 text-blue-middle">Education</h3>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">Current</span>
                <h3 className={`h5 ${styles.dot}`}>Computer Science</h3>
                <p className="small mb-4">at HarvardX CS50x</p>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2015</span>
                <h3 className={`h5 ${styles.dot}`}>PHP & MySQL</h3>
                <p className="small mb-4">at El Taller</p>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date text-gray-400">2011</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Web Design and Development
                </h3>
                <p className="small mb-4">at BIOS</p>
              </div>
            </div>

            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/skills.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Skills"
                />
                <h3 className="h4 text-blue-middle">Skills</h3>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#f06529] text-white font-bold px-1 mb-1 inline-block">
                  HTML
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#348df3] text-white font-bold px-1 mb-1 inline-block">
                  CSS
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#F0DB4F] text-[#323330] font-bold px-1 mb-1 inline-block">
                  JavaScript
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#777BB3] text-white font-bold px-1 mb-1 inline-block">
                  PHP
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#00749c] text-white font-bold px-1 mb-1 inline-block">
                  WordPress
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#53b4ec] text-white font-bold px-1 mb-1 inline-block">
                  React
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="bg-[#323330] text-white font-bold px-1 mb-1 inline-block">
                  Next.js
                </span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/language.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Languages"
                />
                <h3 className="h4 text-blue-middle">Languages</h3>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date">Spanish</span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="resume_content pl-16 mb-10">
                <span className="date">English</span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full dark:bg-orange-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
