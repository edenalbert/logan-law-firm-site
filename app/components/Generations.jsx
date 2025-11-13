"use client";
import { useEffect, useRef, useState } from "react";

/** Reveal once when ~25% visible */
function useInViewOnce(
  opts = { root: null, rootMargin: "0px 0px -25% 0px", threshold: 0.2 }
) {
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

export default function Generations() {
  // 🔁 Update these to your real generation photos
  const GENERATIONS = [
    {
      img: "/images/1gen.png",
      title: "William E. Logan",
      years: "First Generation",
      blurb: "Began practicing Law in 1922 afer becoming a Barred Attoney in the state of Louisiana.",
    },
    {
      img: "/images/2ndgen.jpg",
      title: "William E. Logan, Jr",
      years: "Second Generation",
      blurb: "Expanded practice and reputation for excellence.",
    },
    {
      img: "/images/greg.jpg",
      title: "Gregory Jesse Logan",
      years: "Third Generation",
      blurb: "Admitted to LA Bar Association 1994, United States Tax Court 2000, and admitted to Texas Bar 2006.",
    },
    {
      img: "/images/Jesse.jpg", // ⬅️ removed backslash that was breaking the path
      title: "Gregory 'Jesse' Logan, Jr.",
      years: "Fourth Generation",
      blurb: "Passed the July 2025 Louisiana Bar Exam and admitted to the LA State Bar Association in October 2025.",
    },
  ];

  const [revealed, setRevealed] = useState([false, false, false, false]);
  const [sectionRef, sectionSeen] = useInViewOnce();

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* ===== LARGE pillar image behind the four photos ===== */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0",
          "transition-opacity duration-[1200ms] ease-out",
          sectionSeen ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <img
          src="/images/columnshort.png"
          alt=""
          className="w-[1400px] max-w-[96%] max-h-[755px] object-contain opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* ===== Heading / subheading (darker) ===== */}
        <div
          className={[
            "text-center transition-all duration-[1200ms] ease-out",
            sectionSeen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          <div className="font-serif font-extrabold tracking-tight text-[#2c3b4c] text-4xl sm:text-5xl lg:text-6xl">
            FOUR GENERATIONS OF COUNSEL
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-[#2c3b4c]">
            Our Family Protecting Yours
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Practical advice and tough advocacy—passed from one generation to the next.
          </p>
        </div>

        {/* ===== Generation cards (trigger pillar reveal logic per card) ===== */}
        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GENERATIONS.map((g, i) => {
            const [cardRef, seen] = useInViewOnce();

            useEffect(() => {
              if (seen) {
                const t = setTimeout(() => {
                  setRevealed((prev) =>
                    prev[i] ? prev : Object.assign([...prev], { [i]: true })
                  );
                }, i * 250); // stagger
                return () => clearTimeout(t);
              }
            }, [seen, i]);

            return (
              <div
                ref={cardRef}
                key={g.title}
                className={[
                  "rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-black/5 will-change-transform",
                  "transform transition-all duration-[1200ms] ease-out",
                  seen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: seen ? `${i * 300}ms` : "0ms" }}
              >
                <div className="aspect-[4/5] bg-slate-100">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-[#2c3b4c]">{g.title}</div>
                  <div className="text-sm text-slate-500">{g.years}</div>
                  <p className="mt-2 text-sm text-slate-600">{g.blurb}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}