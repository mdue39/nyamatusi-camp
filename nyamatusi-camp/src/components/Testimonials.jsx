import jacob from "../assets/jacob-stone.jpg";
import family from "../assets/brown-family.jpg";
import gemma from "../assets/gemma.jpg";

function PhotoCard({ image, name }) {
  return (
    <article className="relative h-[420px] w-full overflow-hidden lg:h-[430px] lg:w-[283px] lg:shrink-0">
      <img src={image} alt={name} className="h-full w-full object-cover" />
      {/* orange tint */}
      <div className="absolute inset-0 bg-brand/50 mix-blend-multiply" />
      <p className="absolute inset-x-0 bottom-3 text-center text-xs font-medium italic text-white">
        {name}
      </p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-[1032px]">
        <h2 className="text-3xl font-light lg:text-[34px]">Testimonials</h2>

        <div className="mt-10 flex flex-col items-stretch gap-6 lg:mt-14 lg:flex-row lg:items-start lg:gap-[18px]">
          <PhotoCard image={jacob} name="Jacob Stone" />

          <article className="flex w-full flex-col items-center border border-brand/70 px-8 py-12 text-center lg:h-[430px] lg:w-[430px] lg:shrink-0 lg:px-14 lg:py-14">
            <img
              src={gemma}
              alt="Gemma Johnson"
              className="h-[70px] w-[70px] rounded-full object-cover"
            />

           <p className="mt-10 max-w-[280px] text-[13px] font-normal leading-relaxed text-neutral-800">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor ”.
            </p>

            <span className="mt-6 h-px w-14 bg-brand" />

            <p className="mt-6 text-xs font-semibold italic">Gemma Johnson</p>
          </article>

          <PhotoCard image={family} name="Brown family" />
        </div>
      </div>
    </section>
  );
}