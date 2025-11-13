// app/components/HeroRotating.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroRotating() {
  // 👉 Replace these with your images
  const IMAGES = [
    "/images/lft-courthouse.jpg",
    "/images/St-Martin-Ville-Courthouse.jpg",
    "/images/Abbeville-courthouse.jpg",
    "/images/FedCourthouse.jpg",
  ];
  const INTERVAL_MS = 4500; // time each image shows

  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    stop();
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % IMAGES.length);
    }, INTERVAL_MS);
  }
  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden">
      {/* Background stack (crossfade) */}
      <div className="absolute inset-0 -z-10">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className={[
              "absolute inset-0 bg-center bg-cover transition-opacity duration-[3500ms] ease-out",
              i === idx ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        {/* Global gradient overlay for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Content (right-aligned) */}
      <div
        className="relative h-full flex items-center justify-end px-6 sm:px-10 lg:px-20"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        {/* Semi-opaque panel under text (glass look) */}
        <div className="max-w-2xl w-full md:w-[700px] lg:w-[760px] bg-white/10 backdrop-blur-md ring-1 ring-white/15 rounded-xl p-8 sm:p-10 text-white">
          <p className="text-sm font-semibold tracking-widest text-[#c9b291] uppercase">
            The Logan Law Firm, LLC
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow">
            A Quality Estate Planning
            <br className="hidden sm:block" />
            <span className="text-white/90"> and Successions Firm</span>
          </h1>
          <p className="mt-4 text-white/85 drop-shadow-sm">
            Board-certified specialization. Practical strategy. Tough advocacy in probate,
            successions, estate planning, and complex disputes across Louisiana.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-end">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-[#2c3b4c] px-5 py-3 text-white font-semibold shadow hover:opacity-95 transition"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact?type=local-counsel"
              className="inline-flex items-center rounded-full border border-white/50 px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Local Counsel
            </Link>
          </div>

          
        </div>
      </div>

      {/* Decorative (very subtle) */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#c9b291]/10 blur-3xl" />
    </section>
  );
}