"use client";

import { useRef } from "react";
import Image from "next/image";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import ArrowRight from "@/assets/arrow-right.svg";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 md:py-36 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-text mt-5">
            Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>

          <motion.img
            src={StarImage.src}
            width={360}
            alt="Star"
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={SpringImage.src}
            width={360}
            alt="Spring"
            className="hidden md:block absolute -top-[19px] -right-[331px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
