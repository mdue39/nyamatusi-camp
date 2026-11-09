import jeep from "../assets/gallery-jeep.jpg";
import elephantJeep from "../assets/elephant-jeep.jpg";
import canoe from "../assets/gallery-canoe.jpg";
import giraffe from "../assets/giraffe.jpg";
import sunset from "../assets/sunset-tree.jpg";
import paws from "../assets/paw-prints.jpg";
import lodge from "../assets/lodge-interior.jpg";

const rowOne = [
  { src: jeep, alt: "Safari vehicle on the plains", grow: "flex-[2.3]" },
  { src: elephantJeep, alt: "Elephant seen from the vehicle", grow: "flex-1" },
  { src: canoe, alt: "Woman canoeing on the river", grow: "flex-1" },
];

const rowTwo = [
  { src: giraffe, alt: "Giraffe at sunset", grow: "flex-1" },
  { src: sunset, alt: "Acacia tree at sunset", grow: "flex-1" },
  { src: paws, alt: "Animal paw prints in the sand", grow: "flex-1" },
  { src: lodge, alt: "Lodge interior", grow: "flex-[2.85]" },
];

function Row({ photos }) {
  return (
    <div className="flex h-[140px] gap-2 sm:h-[200px] lg:h-[277px] lg:gap-3">
      {photos.map((p) => (
        <img
          key={p.alt}
          src={p.src}
          alt={p.alt}
          className={`min-w-0 object-cover ${p.grow}`}
        />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[149px] lg:py-24">
      <h2 className="text-3xl font-light lg:text-[34px]">Our gallery</h2>

      <div className="mt-10 space-y-2 lg:mt-14 lg:space-y-3">
        <Row photos={rowOne} />
        <Row photos={rowTwo} />
      </div>
    </section>
  );
}