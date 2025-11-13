"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Apple-like pinned scrollytelling:
 * - While pinned, we intercept wheel/touch and advance steps.
 * - After the last step, we release and allow normal scrolling.
 */
export default function ScrollPinSteps({
  steps = [],
  background = "#2c3b4c",
  textColor = "white",
  height = "100vh",           // pinned panel height
  threshold = 30,             // wheel delta threshold before step changes
}) {
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [locked, setLocked] = useState(true); // while true we capture scroll
  const wheelAccum = useRef(0);
  const touchStartY = useRef(null);

  // release scroll once last step reached
  useEffect(() => {
    if (step >= steps.length - 1) {
      // on the final step, allow another wheel gesture to “pass through”
      // but keep content visible until user scrolls again
      setLocked(false);
    } else {
      setLocked(true);
    }
  }, [step, steps.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // We need non-passive to be able to preventDefault
    const wheelHandler = (e) => {
      if (!locked) return; // allow normal scroll when unlocked
      e.preventDefault();
      wheelAccum.current += e.deltaY;

      if (wheelAccum.current > threshold && step < steps.length - 1) {
        wheelAccum.current = 0;
        setStep((s) => Math.min(s + 1, steps.length - 1));
      } else if (wheelAccum.current < -threshold && step > 0) {
        wheelAccum.current = 0;
        setStep((s) => Math.max(s - 1, 0));
      }
    };

    const touchStart = (e) => {
      if (!locked) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const touchMove = (e) => {
      if (!locked) return;
      if (touchStartY.current == null) return;
      const dy = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(dy) < 24) return;
      e.preventDefault();
      if (dy > 0 && step < steps.length - 1) {
        setStep((s) => Math.min(s + 1, steps.length - 1));
      } else if (dy < 0 && step > 0) {
        setStep((s) => Math.max(s - 1, 0));
      }
      touchStartY.current = null;
    };

    // Attach listeners to the pinned panel
    el.addEventListener("wheel", wheelHandler, { passive: false });
    el.addEventListener("touchstart", touchStart, { passive: false });
    el.addEventListener("touchmove", touchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", wheelHandler);
      el.removeEventListener("touchstart", touchStart);
      el.removeEventListener("touchmove", touchMove);
    };
  }, [locked, step, steps.length, threshold]);

  // simple crossfade/slide for steps
  return (
    <section className="relative">
      {/* Give the section some scroll space above & below so you can enter/exit it */}
      <div style={{ height: "10vh" }} />
      <div
        ref={containerRef}
        className="sticky top-0 overflow-hidden"
        style={{ height }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            {steps.map((s, i) => (
              <div
                key={i}
                className={[
                  "absolute inset-0 flex items-center justify-center transition-all duration-600 ease-out",
                  i === step ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
                aria-hidden={i !== step}
              >
                <div className="space-y-4">
                  {s.kicker ? (
                    <div className="text-sm uppercase tracking-wide opacity-80" style={{ color: textColor }}>
                      {s.kicker}
                    </div>
                  ) : null}
                  <h3 className="text-3xl sm:text-4xl font-bold" style={{ color: textColor }}>
                    {s.title}
                  </h3>
                  {s.body ? (
                    <p className="text-base sm:text-lg opacity-90" style={{ color: textColor }}>
                      {s.body}
                    </p>
                  ) : null}
                  {s.image ? (
                    <div className="mt-4">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="mx-auto max-h-[50vh] w-auto rounded-lg shadow-lg"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Spacer to scroll past when released */}
      <div style={{ height: "120vh" }} />
    </section>
  );
}