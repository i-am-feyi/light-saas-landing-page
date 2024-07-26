import Image from "next/image";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import ArrowRight from "@/assets/arrow-right.svg";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-text mt-5">
            Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>

          <Image
            src={StarImage}
            width={360}
            alt="Star"
            className="hidden md:block absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={SpringImage}
            width={360}
            alt="Spring"
            className="hidden md:block absolute -top-[19px] -right-[331px]"
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
