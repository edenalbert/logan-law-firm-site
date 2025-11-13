// app/capabilities/page.jsx
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Capabilities | Logan Law Firm, LLC",
  description:
    "Explore Logan Law Firm capabilities across probate, successions, estate planning, litigation, and more.",
};

const AREAS = [
  { slug: "probate-litigation", title: "Probate Litigation", blurb: "Will contests, fiduciary breaches, and complex probate disputes across Louisiana." },
  { slug: "estate-planning", title: "Estate Planning", blurb: "Tailored wills, trusts, and directives to protect family and assets." },
  { slug: "Local Counsel", title: "Local Counsel", blurb: "blah blah blah" },
  { slug: "business-transactions", title: "Business Transactions", blurb: "Entity formation, governance, buy–sell agreements, and more." },
  { slug: "Tax Planning", title: "Tax Planning", blurb: "Coordinated strategies for income, estate, and gift tax efficiency." },
  { slug: "guardianship-litigation", title: "Guardianship Litigation & Administration", blurb: "Tutorship, interdiction, and contested capacity proceedings." },
  { slug: "asset-protection", title: "Asset Protection", blurb: "Protect personal and business assets with lawful planning." },
  { slug: "litigation-dispute-resolution", title: "Litigation & Dispute Resolution", blurb: "Practical, strategic litigation with a results-first approach." },
  { slug: "Elder Law", title: "Elder Law", blurb: "blah blah blah" },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* Intro */}
        <section className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-[#2c3b4c]">Capabilities</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Click any area to learn more about how we can help. Pages are being built out—content will be added soon.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/capabilities/${area.slug}`}
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-lg font-semibold">{area.title}</div>
                <p className="mt-2 text-sm text-slate-600">{area.blurb}</p>
                <div className="mt-4 text-sm text-slate-400">Learn more →</div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}