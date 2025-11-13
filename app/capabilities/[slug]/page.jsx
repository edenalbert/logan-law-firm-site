// app/capabilities/[slug]/page.jsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Centralized copy per capability (add the rest as you’re ready)
const CONTENT = {
  "probate-litigation": {
    title: "Probate Litigation",
    intro:
      "We represent heirs, executors, and trustees in will contests, fiduciary breach claims, and complex probate disputes across Louisiana.",
    bullets: [
      "Will validity, capacity, and undue influence challenges",
      "Executor/trustee breach of fiduciary duty",
      "Accounting, discovery of assets, and asset recovery",
      "Forced heirship and legitime claims",
    ],
    WhatIsIt: [
        "blah blah blah"
    ],
    faq: [
      {
        q: "How long do probate disputes take?",
        a: "Simple matters may resolve in months; multi-issue cases can take longer depending on discovery and court calendars.",
      },
      {
        q: "Do you handle emergency relief?",
        a: "Yes. We pursue TROs and preliminary injunctions when assets or rights require immediate protection.",
      },
    ],
  },

  "estate-planning": {
    title: "Estate Planning",
    intro:
      "Tailored wills, trusts, and directives that protect your family, minimize taxes, and reflect your wishes.",
    bullets: [
      "Wills, revocable and irrevocable trusts",
      "Powers of attorney and advance directives",
      "Life insurance trusts and asset protection structures",
      "Succession avoidance and tax-efficient transfers",
    ],
    WhatIsIt: [
        "When you have significant assets built over generations or during your lifetime, it is essential to consider how best to protect your individual or family legacy when you are no longer capable or you pass away. Without an estate plan, your family stands to experience disputes, frustrating delays and even significant loss of assets. Estate planning gives you the control to choose an executor for administering your estate in your will. The legal instruments in your estate plan give you the power to select trusted agents to ensure your wishes for end- f life medical treatment are clearly and legally expressed to your physician while you are alive in advance directives. At minimum, most estate plans comprise powers of attorney, advance directives and a will. Many estates benefit from the creation of a trust. The Logan Law Firm, LLC, creates your estate plan based on your unique circumstances. Each family has different needs. Attorney Gregory J. Logan provides the information you need to make careful choices about setting up your estate plan with the least amount of confusion and tax burden for your family."
    ],
    faq: [
      {
        q: "Do I need a trust or just a will?",
        a: "It depends on your goals, assets, and family. We recommend the simplest structure that achieves your aims without unnecessary cost.",
      },
    ],
  },

  "succession-litigation": {
    title: "Succession Litigation",
    intro:
      "We represent families in contested successions, including heirship disputes, claims of undue influence, and contested appointments.",
    bullets: [
      "Heirship and forced heir claims",
      "Challenges to testamentary capacity",
      "Oppositions to executors or administrators",
      "Settlement strategy and mediation",
    ],
    WhatIsIt: [
        "blah blah blah"
    ],
  },

  "asset-protection": {
    title: "Asset Protection",
    intro:
      "Lawful strategies to safeguard personal and business assets from avoidable risk.",
    bullets: [
      "Entity structuring and segregation of risk",
      "Domestic trusts and exemptions",
      "Insurance alignment with legal structure",
      "Business continuity and succession planning",
    ],
    WhatIsIt: [
        "blah blah blah"
    ],
  },

  // Add entries for each slug you listed…
};

export async function generateMetadata({ params }) {
  const data = CONTENT[params.slug];
  if (!data) {
    return {
      title: "Capabilities | Logan Law Firm, LLC",
      description: "Explore our capabilities across probate, successions, estate planning, and more.",
    };
  }
  return {
    title: `${data.title} | Logan Law Firm, LLC`,
    description: data.intro,
  };
}

export default function CapabilityDetailPage({ params }) {
  const data = CONTENT[params.slug];

  if (!data) {
    // Graceful fallback for slugs not added yet
    return (
      <>
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl font-semibold text-[#2c3b4c]">Page Coming Soon</h1>
          <p className="mt-3 text-slate-600">
            We’re writing this page. In the meantime, please{" "}
            <Link href="/#contact" className="underline text-[#2c3b4c]">contact us</Link>.
          </p>
          <p className="mt-8">
            <Link href="/capabilities" className="text-sm underline text-slate-600">
              ← Back to Capabilities
            </Link>
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero band */}
        <section className="border-b bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-[#2c3b4c]">{data.title}</h1>
            <p className="mt-3 text-slate-700 max-w-3xl">{data.intro}</p>
          </div>
        </section>

        {/* Details */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {data.bullets?.length ? (
            <>
              <h2 className="text-xl font-semibold text-[#2c3b4c]">How We Help</h2>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                {data.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#2c3b4c]"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </>
          ) : null}

           {data.WhatIsIt?.length ? (
            <>
              <h3 className="mt-10 text-xl font-semibold text-[#2c3b4c]">Why</h3>
              <ul className="mt-4 grid gap-2 text-slate-700">
                {data.WhatIsIt.map((b, i) => (
                     <p className="mt-3 text-slate-700 max-w-3xl">{data.WhatIsIt}</p>
                ))}
              </ul>
            </>
          ) : null}

          {data.faq?.length ? (
            <>
              <h4 className="mt-10 text-lg font-semibold text-[#2c3b4c]">Frequently Asked Questions</h4>
              <div className="mt-4 space-y-4">
                {data.faq.map((f, i) => (
                  <details key={i} className="group rounded-lg border bg-white p-4">
                    <summary className="cursor-pointer font-medium text-slate-800">
                      {f.q}
                    </summary>
                    <p className="mt-2 text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          ) : null}

          {/* CTA */}
          <div className="mt-10 p-6 rounded-xl bg-[#0d1b2a] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">Speak with an attorney</div>
              <div className="text-white/80">Fast intake. Same-day call-back available.</div>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-white/90 px-5 py-3 text-[#2c3b4c] font-semibold hover:bg-white transition"
            >
              Schedule a Consultation
            </Link>
          </div>

          <p className="mt-8">
            <Link href="/capabilities" className="text-sm underline text-slate-600">
              ← Back to Capabilities
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}