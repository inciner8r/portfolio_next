"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-5 text-2xl">
        I'm a passionate developer and a curious Engineer.{" "}
      </p>
      <p>
        I'm always looking out for new things to explore. I love to collaborate
        with like-minded people who are fueled by curiosity. I play around
        Golang and Javascript ecosystems for my web dev projects.
      </p>
      <p>
        Daily driving Arch-Linux keeps the tinkerer inside me alive. Currently
        I'm diving into Machine Learning after watching many cool projects built
        around image generators and i'm ready to dive into it
      </p>
      <p>
        When i'm not coding, i usually play video games, play some sport, do
        some workout, play guitar, go for a ride or try to produce some music
      </p>
    </motion.section>
  );
}
