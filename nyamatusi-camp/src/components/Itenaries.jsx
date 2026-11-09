import { FaHeart } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import pool from "../assets/itenary-pool.jpg";
import river from "../assets/zambezi-river.jpg";
import tent from "../assets/tent-plunge.jpg";

const features = ["2 people", "All meals provided", "Luxury transport"];

const tours = [
  { image: river, title: "The best of the Zambezi", subtitle: "6 day tour deluxe plan" },
  { image: tent, title: "The best of the Zambezi", subtitle: "6 day tour deluxe plan" },
];

export default function Itineraries() {
  return (
    <section id="itenaries" className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[54px] lg:py-24">
      <h2 className="text-3xl font-light lg:ml-[66px] lg:text-[34px]">
        Suggested itenaries
      </h2>

      <div className="mt-10 flex flex-col gap-3 lg:mt-16 lg:h-[500px] lg:flex-row">
        {/* Orange card and pool photo, joined with no gap */}
        <div className="flex flex-col lg:shrink-0 lg:flex-row">
          {/* Featured orange card */}
          <article className="relative flex flex-col bg-brand text-white lg:w-[340px] lg:shrink-0">
            <span className="absolute right-3 top-0 flex h-9 w-8 items-center justify-center bg-white text-red-600">
              <FaHeart className="text-xs" />
            </span>

            <div className="flex-1 p-6">
              <h3 className="text-sm font-semibold">Zimbabwe luxury</h3>
              <p className="mt-4 text-xs font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna
                fringilla urna, porttitor
              </p>

              <ul className="mt-6 space-y-5 text-xs font-light">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <p className="border-y border-white/60 px-6 py-3 text-sm font-semibold">
              $3,880 per person
            </p>

            <a
              href="#"
              className="flex items-center justify-between px-6 py-4 text-xs font-medium hover:opacity-90"
            >
              See full itenary
              <FiArrowRight className="text-lg" />
            </a>
          </article>

          {/* Pool photo, joined to the card */}
          <img
            src={pool}
            alt="Guests relaxing by the pool"
            className="h-72 w-full object-cover lg:h-full lg:w-[290px] lg:shrink-0"
          />
        </div>

        {/* Tour cards */}
        {tours.map((t, i) => (
          <article key={i} className="relative h-72 flex-1 overflow-hidden lg:h-full">
            <img src={t.image} alt={t.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-5 px-4 text-center text-white">
              <h3 className="text-sm font-medium italic">{t.title}</h3>
              <p className="mt-1 text-xs font-light">{t.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}