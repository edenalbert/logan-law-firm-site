// app/contact/page.jsx
import Link from "next/link";
import Header from "../components/Header"; 
import Footer from "../components/Footer";


export const metadata = {
  title: "Our People | Logan Law Firm, LLC",
  description:
    "Get to know the attorneys at The Logan Law Firm — four generations of trusted Louisiana counsel.",
};

export default function PeoplePage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50">
        {/* ===== Top Family Section ===== */}
        <section className="relative bg-[#0d1b2a] text-white">
          <img
            src="/images/cypresstrees.png" // replace with your real file
            alt="Logan family of attorneys"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl font-bold md:text-5xl tracking-tight">
              Get to Know Our Family — Your Lawyers
            </h1>
            <p className="mt-4 text-lg text-slate-200 max-w-3xl mx-auto">
              For four generations, the Logan family has provided trusted legal
              guidance in probate, succession, and estate matters across Louisiana.
            </p>
          </div>
        </section>

        {/* ===== Greg Section ===== */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Left column (photo + contact) */}
            <div className="space-y-6 text-center md:text-left">
              <img
                src="/images/greg.jpg"
                alt="Gregory J. Logan"
                className="rounded-lg shadow-md w-64 mx-auto md:mx-0"
              />
              <h2 className="text-2xl font-bold text-[#2c3b4c]">
                Gregory J. Logan
              </h2>
              <a
                href="mailto:kat@loganfirm.com"
                className="inline-block bg-[#27466b] text-white px-5 py-2 rounded hover:opacity-90 transition"
              >
                Email Me
              </a>
             <div>
                <p className="font-semibold text-[#2c3b4c] mt-4">Practice Areas:</p>
                <ul className="list-disc list-inside text-slate-700">
                  <li>Probate</li>
                  <li>Successions</li>
                  <li>Wills</li>
                  <li>Estate Litigation</li>
                  <li>Business Transactions</li>
                  <li>Tax Planning </li>
                  <li>Elder Law</li>
                  <li>Asset Protection</li>
                </ul>
              </div>
             
            </div>

            {/* Right column (bio) */}
            <div className="md:col-span-2 space-y-8 text-slate-700">
              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                  Biography
                </h3>
                <p>
                  Gregory J. Logan is an attorney servicing Lafayette and the surrounding
                  areas. Mr. Logan is one of a select few attorneys who is board-certified
                  as an Estate Planning and Administration Specialist. The Logan Law Firm
                  prides itself on providing tailored solutions to the needs of each client.
                </p>
                <p className="mt-3">
                  If you or a loved one are in need of legal representation in the areas of
                  estate planning, successions, wills, probates, or adoptions, call the
                  Logan Law Firm today to arrange a consultation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                  Education
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Loyola University New Orleans School of Law</strong>, J.D.
                    <br />
                    <em>Law Review Member, 1992–1994</em>
                  </li>
                  <li className="mt-2">
                    <strong>University of Louisiana at Lafayette</strong>, B.S. in Accounting
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                   Bar Admissions & Professional Associations
                </h3>
                <ul className="list-disc list-inside">
                  <li>Louisiana Bar Admission, 1994</li>
                  <li>U.S. Court of Appeals, 5th Circuit, 1995</li>
                  <li>U.S. District Court Eastern District of Louisiana, 1994</li>
                  <li>U.S. District Court Middle District of Louisiana, 1994</li>
                  <li>U.S. District Court Western District of Louisiana, 1994</li>
                  <li>Texas Bar Admission, 2006</li>
                  <li>U.S. Tax Court, 2006</li>
                  <li>Board Certified Estate Planning and Administration Speciialist, Louisiana Board of Legal Specialization, 2000</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Jesse Section ===== */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 bg-slate-50 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Left column */}
            <div className="space-y-6 text-center md:text-left">
              <img
                src="/images/jesse.jpg" // replace with actual image
                alt="Gregory Jesse Logan, Jr."
                className="rounded-lg shadow-md w-64 mx-auto md:mx-0"
              />
              <h2 className="text-2xl font-bold text-[#2c3b4c]">
                Gregory Jesse Logan, Jr.
              </h2>
              <a
                href="mailto:kat@loganfirm.com"
                className="inline-block bg-[#27466b] text-white px-5 py-2 rounded hover:opacity-90 transition"
              >
                Email Me
              </a>
             
              <div>
                <p className="font-semibold text-[#2c3b4c] mt-4">Practice Areas:</p>
                <ul className="list-disc list-inside text-slate-700">
                  <li>Probate</li>
                  <li>Successions</li>
                  <li>Estate Litigation</li>
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-2 space-y-8 text-slate-700">
              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                  Biography
                </h3>
                <p>
                  Gregory Jesse Logan, Jr. continues the family tradition as the fourth
                  generation of Logan attorneys serving the Lafayette area. His practice
                  focuses on probate, succession, and estate litigation, where he brings
                  practical insight and advocacy for families in transition.
                </p>
                <p className="mt-3">
                  Jesse is deeply involved in the community and strives to build upon the
                  firm’s reputation for excellence through compassionate, detail-oriented
                  representation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                  Education
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Loyola University New Orleans College of Law</strong>, J.D.
                  </li>
                  <li className="mt-2">
                    <strong>University of Mississippi</strong>, B.S. in Finance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2c3b4c] mb-3">
                    Bar Admissions & Professional Associations
                </h3>
                <ul className="list-disc list-inside">
                  <li>Louisiana Bar Admission, 2025</li>
                  <li>U.S. District Court, Western District of Louisiana</li>
                  <li>Loyoal University Trial Adovcacy Outstanding 3L, 2025</li>
                  <li>Loyoal University Inn of Court Member</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}