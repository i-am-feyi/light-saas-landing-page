import Image from "next/image";
import TubeImage from "@/assets/tube.png";
import PyramidImage from "@/assets/pyramid.png";
import ProductImage from "@/assets/product-image.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
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
          <Image
            src={PyramidImage}
            alt="Pyramid"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          />
          <Image
            src={TubeImage}
            alt="Tube"
            className="hidden md:block absolute -left-36 bottom-24"
            height={248}
          />
        </div>
      </div>
    </section>
  );
};
