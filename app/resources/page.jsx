// app/resources/page.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Resources | Logan Law Firm, LLC",
  description:
    "Helpful resources from Logan Law Firm on probate, successions, estate planning, and more.",
};

const RESOURCES = [
  {
    title: "Client ShareFile",
    desc:
      "Secure document portal for clients and collaborators. Upload and access case files, estate planning drafts, and court documents.",
    href: "https://theloganlawfirm.sharefile.com", // ← replace
  },
  {
    title: "Engagement Forms (PDF)",
    desc: "Downloadable intake and engagement forms for estate and succession matters.",
    href: "/files/engagement-forms.pdf", // optional: drop a PDF into /public/files
  },
  // add more resource links here as needed
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* Top intro band */}
        <section className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-[#2c3b4c]">Resources</h1>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Guides, forms, and secure portals for clients of Logan Law Firm.
            </p>
          </div>
        </section>

        {/* Resource cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-white p-6 shadow ring-1 ring-black/5 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  {/* simple doc/link icon */}
                  <svg className="h-6 w-6 text-[#2c3b4c] mt-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <path d="M14 2v6h6"/>
                  </svg>
                  <div>
                    <div className="text-lg font-semibold text-[#2c3b4c]">{r.title}</div>
                    <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
                    <div className="mt-4 text-sm text-[#27466b] underline">Open →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}