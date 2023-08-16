"use client";
import Image from "next/image";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/features/Modal/Modal";
import { WORKS } from "@/utils/data";
import GoogleAnalytics from "@/components/features/GoogleAnalytics";

export const metadata = {
  title: "Christian Miguez:: Works",
  description: "Some things I've worked on.",
};

export default function Works() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(WORKS[0]);

  const close = () => {
    setModalOpen(false);
    if (window.innerWidth > 768) {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };
  const open = (e: any) => {
    setModalOpen(true);
    document
      .getElementsByTagName("body")[0]
      .scrollIntoView({ behavior: "instant" });
    // if viewport is smaller than 768px:
    if (window.innerWidth > 768) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    setModalContent(WORKS[e.target.dataset.id]);
  };

  return (
    <div className="bg-blue-dark-gradient">
      <GoogleAnalytics GA_TRACKING_ID={"G-C4D9EFW4VL"} />

      <div className="h-full text-white relative">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              modalContent={modalContent}
            />
          )}
        </AnimatePresence>

        <main className="py-32 md:py-32 transition-opacity animate-fadeInUp duration-700 opacity-100">
          <div className="hero-post container mx-auto px-4">
            <h1 className="h2 text-center mb-2">Works</h1>
            <p className="text-center mb-16 text-slate-300 text-sm">
              Check out some of my latest projects, I&apos;ve worked with a
              variety of clients from all over the world.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[3s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="0"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-0.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={768}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="1"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-1.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={500}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="2"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-2.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={566}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="3"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-3.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={598}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="4"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-4.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={854}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="5"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-5.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={382}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="6"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-6.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={850}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="7"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-7.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={464}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="8"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-8.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={520}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="9"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-9.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={422}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="10"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-10.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={1024}
                  />
                </div>
                <div
                  className={`hover:drop-shadow-xl hover:scale-105 grayscale hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                  onClick={(e) => (modalOpen ? close() : open(e))}
                >
                  <Image
                    data-id="11"
                    className="h-auto max-w-full rounded-xl"
                    src="/assets/images/masonry/image-11.webp"
                    alt="Christian Miguez - WORK: #"
                    priority={true}
                    width={610}
                    height={388}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
