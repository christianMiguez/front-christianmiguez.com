import Image from "next/image";
import styles from "./page.module.scss";

export default async function About() {
  return (
    <main className="py-28">
      <div className="md-container">
        <div className="lg:grid lg:grid-cols-3 gap-4">
          {/* <div className="lg:col-span-1 p-3 bg-grey-light rounded-xl"> */}
          <div className="lg:col-span-1 ">
            <Image
              src="/assets/images/meRemastered.jpg"
              alt="Christian Miguez"
              width={210}
              height={210}
              className="rounded-full mx-auto mb-6 grayscale"
            />

            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/education.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Education"
                />
                <h3 className="h4">Education</h3>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
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
                <h3 className="h4">Skills</h3>
              </div>

              <div className="resume_content pl-16">
                <span className="date">2HTML</span>
                <div className="w-full h-1 bg-orange-500 rounded-md"></div>
              </div>

              <div className="resume_content pl-16">
                <span className="date">CSS</span>
                <div className="w-full h-1 bg-orange-500 rounded-md"></div>
              </div>

              <div className="resume_content pl-16">
                <span className="date">JavaScript</span>
                <div className="w-full h-1 bg-orange-500 rounded-md"></div>
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
                <h3 className="h4">Languages</h3>
              </div>

              <div className="resume_content pl-16">
                <span className="date">Spanish</span>
                <div className="w-full h-1 bg-orange-500 rounded-md"></div>
              </div>

              <div className="resume_content pl-16">
                <span className="date">English</span>
                <div className="w-full h-1 bg-orange-500 rounded-md"></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="resume_heading">
              <h2 className="text-blue-middle font-extrabold tracking-tighter mt-16">
                Christian Miguez
              </h2>
              <span className="text-blue-dark text-xl">Web Developer</span>
            </div>
            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/profile.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Profile"
                />
                <h3 className="h4">About me</h3>
              </div>

              <div className="resume_content pl-16">
                <p className={`h5 font-bold ${styles.dot}`}>Hi there!</p>
                <p>
                  I'm a {new Date().getFullYear() - 1991} years old guy from
                  Uruguay who always loved technology. I started my career as a
                  web designer in 2012 and since then I've been working with
                  WordPress, React, NextJS, NodeJS, and other technologies. I'm
                  a self-taught person who loves to learn new things and I'm
                  always looking for new challenges.
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
                <h3 className="h4">Experience</h3>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s,
                </p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled
                </p>
              </div>
            </div>

            <div className={`${styles["resume_section"]} mt-20`}>
              <div className="resume_title flex gap-4 items-center mb-4">
                <Image
                  src="/assets/images/icons/hobbies.svg"
                  width={48}
                  height={48}
                  className="p-1"
                  alt="Hobbies"
                />
                <h3 className="h4">Hobbies</h3>
              </div>

              <div className="resume_content pl-16">
                <span className="date text-gray-400">2018 - 2023</span>
                <h3 className={`h5 ${styles.dot}`}>
                  Senior WordPress Developer
                </h3>
                <p className="small mb-4">OnPoint Global</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
