"use client";

import Image from "next/image";
import { useRef } from "react";
import TubeImage from "@/assets/tube.png";
import PyramidImage from "@/assets/pyramid.png";
import ProductImage from "@/assets/product-image.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">A more effective way to track progress</h2>
          <p className="section-text mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS website
            in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product showcase" className="mt-10" />
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube"
            className="hidden md:block absolute -left-36 bottom-24"
            height={248}
            width={248}
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
