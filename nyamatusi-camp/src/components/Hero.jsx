import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[560px] bg-cover bg-center lg:h-[810px]"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <h1 className="absolute inset-x-0 top-[30%] text-center text-5xl font-normal text-white md:text-7xl lg:text-[130px] lg:leading-none">
        Indulge in
      </h1>

      <div className="absolute right-6 top-1/3 hidden flex-col gap-6 text-xl text-white sm:flex lg:right-8">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
      </div>

      <FiChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-white" />
    </section>
  );
}