import lion from "../assets/lion.jpg";
import elephantJeep from "../assets/elephant-jeep.jpg";
import lodgeDeck from "../assets/lodge-deck.jpg";

export default function Story() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[117px] lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
     
        <div>
          <h2 className="text-3xl font-light lg:text-[34px]">Our story</h2>

          <div className="mt-10 max-w-[560px] space-y-6 text-sm font-light leading-relaxed lg:mt-24">
            <p>
              Nyamatusi Camp is our flagship in terms of its Eco-conscious
              style. Our Mana Pools safari lodge is set in one of the wildest
              and most remote parts of Africa, on the banks of the Zambezi, one
              of the world’s oldest rivers. Embracing comfort, this property
              embodies sustainable design. Fully solar-powered and built from
              all-natural materials it encompasses its wilderness location in
              the most elegant way. Here, your Mana Pools safari plays out
              against a sweeping riverine landscape, where epic encounters of
              the giants that roam this land await.
            </p>
            <p>
              Consisting of six luxury tented suites, with uninterrupted views
              of the river and escarpment beyond, our Mana Pools safari lodge
              invites a blissful escape to nature. Each romantic guest tent is
              adorned with soft drapery and is replete with......
            </p>
          </div>

          <button className="mt-8 bg-brand px-5 py-3 text-sm font-medium text-white hover:opacity-90">
            Enquire now
          </button>
        </div>

        {/* Photo collage */}
        <div className="flex items-start gap-4 lg:justify-end">
          <img
            src={elephantJeep}
            alt="Elephant seen from a safari vehicle"
            className="mt-16 aspect-[4/5] w-1/2 max-w-[380px] object-cover lg:mt-28"
          />
          <div className="flex w-1/3 max-w-[220px] flex-col gap-4">
            <img
              src={lion}
              alt="Roaring lion"
              className="aspect-[4/5] w-full object-cover"
            />
            <img
              src={lodgeDeck}
              alt="Lodge deck with chairs"
              className="aspect-[4/7] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}