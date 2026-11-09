import { FaRegCopyright } from "react-icons/fa";

const columns = [
  {
    title: "Useful information",
    links: ["Travel information", "Safari logistics", "Privacy policy", "Terms and conditions"],
  },
  {
    title: "Sitemap",
    links: ["Home", "About", "Suggested itenaries", "Gallery"],
  },
  {
    title: "Get in touch",
    links: ["Plan your safari", "Contact us", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:px-[75px] lg:py-14">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold italic">{col.title}</h3>
            <ul className="mt-6 space-y-4 text-sm font-light">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:underline">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold italic">Sign up for our newsletter</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex max-w-[400px]"
          >
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-neutral-900 px-6 py-3 text-sm font-semibold italic hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/40 py-5">
        <p className="flex items-center justify-center gap-2 px-6 text-center text-xs font-light">
          <FaRegCopyright />
          Copyright 2022 Nyamatusi camp. All rights reserved
        </p>
      </div>
    </footer>
  );
}