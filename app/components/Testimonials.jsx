"use client";
import { useEffect, useRef, useState } from "react";

// ⭐ Simple star renderer
function Stars({ value = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < value ? "fill-yellow-500" : "fill-slate-300"}`}
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8-4.2-4.1 5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Replace with Google review data later
  const REVIEWS = [
    {
      author: "J. Martin",
      rating: 5,
      text:
        "Truly professional. Clear communication and resolved our matter efficiently.",
      sourceUrl: "https://maps.google.com/",
      date: "Aug 2025",
    },
    {
      author: "S. Boudreaux",
      rating: 5,
      text:
        "Honest advice and excellent results. The team treated us like family.",
      sourceUrl: "https://maps.google.com/",
      date: "Jul 2025",
    },
    {
      author: "C. Richard",
      rating: 5,
      text:
        "Responsive, knowledgeable, and patient. I always knew what to expect.",
      sourceUrl: "https://maps.google.com/",
      date: "Jun 2025",
    },
    {
      author: "A. Landry",
      rating: 4,
      text:
        "Great outcome on a tough case. Would recommend the firm to friends.",
      sourceUrl: "https://maps.google.com/",
      date: "May 2025",
    },
  ];

  // Carousel state
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const visibleCount = useResponsiveVisibleCount(); // 1 on small, 2 on md+

  // Auto-play
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [index, visibleCount]);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      next();
    }, 4500);
  }
  function stopAuto() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function next() {
    setIndex((prev) => (prev + visibleCount) % REVIEWS.length);
  }
  function prev() {
    setIndex((prev) =>
      (prev - visibleCount + REVIEWS.length) % REVIEWS.length
    );
  }

  // Basic swipe support
  useSwipe(containerRef, { onLeft: next, onRight: prev });

  // Compute translate based on index and visible count
  const cardWidthPct = 100 / visibleCount;
  const translatePct = -(index * cardWidthPct);

  return (
    <section className="relative bg-white">
      {/* Optional subtle background image; replace with your own if desired */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(44,59,76,0.06),transparent_60%)]"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2c3b4c]">
            What Our Clients Are Saying
          </h2>
          <p className="mt-2 text-slate-600">
            Real feedback from the people we serve.
          </p>
        </div>

        <div
          ref={containerRef}
          className="group relative overflow-hidden"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-out will-change-transform"
            style={{
              transform: `translateX(${translatePct}%)`,
              width: `${(REVIEWS.length * 100) / visibleCount}%`,
            }}
          >
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="px-3"
                style={{ width: `${cardWidthPct}%` }}
              >
                <div className="h-full bg-white rounded-xl shadow-sm ring-1 ring-black/5 p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <Stars value={r.rating} />
                    <span className="text-xs text-slate-400">{r.date}</span>
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    “{r.text}”
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Initials avatar */}
                      <div className="h-9 w-9 rounded-full bg-[#2c3b4c] text-white grid place-items-center font-semibold">
                        {initials(r.author)}
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-slate-900">
                          {r.author}
                        </div>
                        <div className="text-slate-500">Google Review</div>
                      </div>
                    </div>
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#2c3b4c] underline"
                      aria-label="View on Google"
                    >
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <button
              onClick={prev}
              className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 shadow ring-1 ring-black/10 ml-1"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-800">
                <path
                  d="M15 19l-7-7 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/90 shadow ring-1 ring-black/10 mr-1"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-800">
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Attribution (important if/when you use Google data) */}
        <div className="mt-6 text-xs text-slate-500 text-center">
          Reviews are user-submitted. When displaying Google reviews, include appropriate attribution per Google’s terms. Will need to update this section
        </div>
      </div>
    </section>
  );
}

/* ------- helpers ------- */
function initials(name = "") {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "•") + (parts[1]?.[0] ?? "");
}

function useResponsiveVisibleCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    function onResize() {
      setCount(window.matchMedia("(min-width: 768px)").matches ? 2 : 1);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return count;
}

function useSwipe(ref, { onLeft, onRight }) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x0 = null;
    function start(e) {
      x0 = (e.touches ? e.touches[0] : e).clientX;
    }
    function move(e) {
      if (x0 == null) return;
      const x1 = (e.touches ? e.touches[0] : e).clientX;
      const dx = x1 - x0;
      if (Math.abs(dx) > 40) {
        dx < 0 ? onLeft?.() : onRight?.();
        x0 = null;
      }
    }
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", () => (x0 = null));
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", () => (x0 = null));
    };
  }, [ref, onLeft, onRight]);
}