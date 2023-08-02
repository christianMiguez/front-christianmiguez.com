"use client";
import Image from "next/image";

import styles from "./works.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/features/Modal/Modal";

export default function Works() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <div className="modalFramer z-100 text-white">
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          mode="wait"
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {modalOpen && (
            <Modal modalOpen={modalOpen} handleClose={close} text="aaaa" />
          )}
        </AnimatePresence>
      </div>
      <main className="py-28 z-10">
        <div className="hero-post container mx-auto px-4">
          <h1 className="h2 mb-8 text-center">Works</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[3s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={768}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-1.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={500}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-2.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={566}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-3.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={598}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-4.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={854}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-5.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={382}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-6.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={850}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-7.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={464}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-8.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={520}
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-9.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={422}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-10.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={1024}
                />
              </div>
              <div
                className={`hover:drop-shadow-xl hover:scale-105 grayscale-[80%] hover:grayscale-0 hover:transition-[1s] duration-700 cursor-pointer save-button`}
                onClick={() => (modalOpen ? close() : open())}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/images/masonry/image-11.jpg"
                  alt="Christian Miguez - WORK: #"
                  width={610}
                  height={388}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
