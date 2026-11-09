import { useState } from "react";
import gameDrives from "../assets/game-drives.jpg";
import walkingSafari from "../assets/walking-safari.jpg";
import birdWatching from "../assets/bird-watching.jpg";
import canoeing from "../assets/canoeing.jpg";
import fishing from "../assets/fishing.jpg";

const activities = [
  {
    title: "Game drives",
    image: gameDrives,
    description:
      "Game drives are what gets us up in the morning in the African bush. They are a great avenue for exploring the land in a safe and exciting way.",
  },
  {
    title: "Walking safari",
    image: walkingSafari,
    description:
      "Step out of the vehicle and into the wild with an expert guide. Walking safaris let you track animals on foot and notice the small details of the bush.",
  },
  {
    title: "Bird watching",
    image: birdWatching,
    description:
      "The Zambezi valley is home to hundreds of bird species. Bring your binoculars and spot colourful kingfishers, bee-eaters and majestic fish eagles.",
  },
  {
    title: "Canoeing",
    image: canoeing,
    description:
      "Glide quietly along the Zambezi River and watch elephants, hippos and crocodiles from the water, with a trained guide in your canoe.",
  },
  {
    title: "Fishing",
    image: fishing,
    description:
      "Cast a line into the Zambezi and try for the famous tigerfish. Whether you are a beginner or an expert, it is a calm way to spend the day.",
  },
];

export default function Activities() {
  const [active, setActive] = useState(0);

  return (
    <section id="activities" className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[120px] lg:py-24">
      <h2 className="text-3xl font-light lg:text-[34px]">Our activities</h2>

      <div className="mt-10 flex h-[406px] gap-3 overflow-x-auto lg:mt-16">
        {activities.map((a, i) => {
          const isActive = active === i;

          return (
            <button
              key={a.title}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={isActive}
              className={`relative h-full shrink-0 overflow-hidden text-left transition-all duration-500 ${
                isActive ? "w-[280px]" : "w-[218px]"
              }`}
            >
              <img
                src={a.image}
                alt={a.title}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t to-transparent transition-colors duration-500 ${
                  isActive
                    ? "from-black/80 via-black/30"
                    : "from-black/70 via-black/10"
                }`}
              />

              {isActive ? (
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-sm font-semibold">{a.title}</h3>
                  <p className="mt-1 text-xs font-light leading-snug">
                    {a.description}
                  </p>
                </div>
              ) : (
                <h3 className="absolute inset-x-0 bottom-5 text-center text-base font-medium text-white">
                  {a.title}
                </h3>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}