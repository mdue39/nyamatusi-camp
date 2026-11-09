import giraffe from "../assets/giraffe.jpg";
import impala from "../assets/impala.jpg";
import zebras from "../assets/zebras.jpg";
import elephant from "../assets/elephant.jpg";
import wildebeest from "../assets/wildebeest.jpg";
import lion from "../assets/lion.jpg";

const photos = [
  { src: giraffe, alt: "Giraffe at sunset", pos: "lg:left-[98px] lg:top-[354px] lg:h-[274px]" },
  { src: impala, alt: "Two impala", pos: "lg:left-[352px] lg:top-[406px] lg:h-[272px]" },
  { src: zebras, alt: "Zebras in the grass", pos: "lg:left-[603px] lg:top-[293px] lg:h-[256px]" },
  { src: elephant, alt: "Elephant on the plains", pos: "lg:left-[854px] lg:top-[63px] lg:h-[363px]" },
  { src: wildebeest, alt: "Herd of wildebeest", pos: "lg:left-[854px] lg:top-[443px] lg:h-[204px]" },
  { src: lion, alt: "Roaring lion", pos: "lg:left-[1107px] lg:top-[166px] lg:h-[511px]" },
];

export default function Sightings() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 lg:relative lg:h-[780px] lg:px-0 lg:py-0">
      <div className="lg:absolute lg:left-[120px] lg:top-[40px]">
        <h2 className="text-3xl font-light lg:text-[34px]">
          Recent wildlife sightings
        </h2>
      </div>

      <p className="mt-6 max-w-[590px] text-sm font-light leading-relaxed lg:absolute lg:left-[118px] lg:top-[190px] lg:mt-0">
        Wildlife sightings include elephant, kudu, sable antelope, zebra,
        wildebeest, the rare and endangered roan antelope, buffalo, lion,
        leopard, hyena, and many other wildlife species.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-0 lg:block">
        {photos.map((p) => (
          <img
            key={p.alt}
            src={p.src}
            alt={p.alt}
            className={`h-56 w-full object-cover lg:absolute lg:w-[235px] ${p.pos}`}
          />
        ))}
      </div>
    </section>
  );
}