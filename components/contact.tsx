"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.div
      ref={ref}
      className="mt-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-48"
      >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:example@gmail.com">
            example@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black/80"
          action={async (formData) => {
            await sendEmail(formData);
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="senderEmail"
            type="email"
            required
            placeholder="Your email"
            maxLength={50}
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
            name="message"
            placeholder="Your message"
            required
            maxLength={500}
          />
          <div className="flex">
            <button
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all shadow-lg shadow-black/[0.03] backdrop-blur[0.5rem] focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 dark:bg-white dark:bg-opacity-10"
              type="submit"
            >
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </form>
      </section>
    </motion.div>
  );
}
