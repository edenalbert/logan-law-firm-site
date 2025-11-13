// app/components/CredentialsShowcase.jsx
"use client";
import { useEffect, useRef, useState } from "react";

/** simple once-once intersection hook for fade-in */
function useInViewOnce(opts = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        obs.disconnect();
      }
    }, opts);
    obs.observe(el);
    return () => obs.disconnect();
  }, [seen, opts]);
  return [ref, seen];
}

export default function CredentialsShowcase() {
  // TODO: swap these with your screenshots
  const BG = "/images/oaktrees1.jpg";               // background photo
  const AV = "/images/cred-av.png";                // AV Preeminent
  const AVVO = "/images/cred-avvo.png";            // Avvo
  const SUPER = "/images/cred-superlawyers.png";   // Super Lawyers

  const [ref, seen] = useInViewOnce();

  return (
    <section className="relative">
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${BG})` }}
        aria-hidden="true"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-[#0c1a26]/60" aria-hidden="true" />

      <div
        ref={ref}
        className={[
          "relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20",
          "text-white text-center transition-all duration-700",
          seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Trusted. Vetted. Proven.
        </h2>

        {/* long paragraph like the example */}
        <p className="mt-6 text-base sm:text-lg leading-relaxed sm:leading-8">
          For four generations, families have turned to The Logan Law Firm to protect what matters most. Our legacy is built on trust that our cleints grant us with for their 
          most cherieshed assets.
          Our team is vetted by the Louisana Board of Legal Specifialzaion, a division of the Louisana State Bar Association, and recognized by industry leaders 
          like Martindale-Hubbell, Avvo, and Super Lawyers.
          We combine seasoned judgment with forward-thinking solutions proven to safeguard your estate, resolve disputes,
          and ensure your legacy endures. At The Logan Law Firm, your family's future is our family's commitment. 
        </p>

        {/* credential screenshots row */}
       {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* Use your uploaded screenshots; set reasonable max heights */}
         {/* <img
            src={AV}
            alt="AV Preeminent Rating – Martindale-Hubbell"
            className="h-28 sm:h-36 w-auto object-contain bg-white/0 rounded"
            loading="lazy"
          />
          <img
            src={AVVO}
            alt="Avvo Superb Rating"
            className="h-28 sm:h-36 w-auto object-contain bg-white/0 rounded"
            loading="lazy"
          />
          <img
            src={SUPER}
            alt="Super Lawyers Selection"
            className="h-28 sm:h-36 w-auto object-contain bg-white/0 rounded"
            loading="lazy"
          />
        </div> */}


      </div>
    </section>
  );
}