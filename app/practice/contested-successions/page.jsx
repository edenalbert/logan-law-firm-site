export const metadata = { title: "Contested Successions — Logan Law Firm" };
export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Contested Successions</h1>
      <p className="mt-4 text-slate-700">Firm-tailored content goes here—overview, how we help, and FAQs. We will adapt copy from your example sites and localize to Louisiana law.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-semibold">How we help</h2>
          <p className="text-sm text-slate-600 mt-2">Strategy, filings, and courtroom advocacy.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-semibold">What to expect</h2>
          <p className="text-sm text-slate-600 mt-2">Timeline, key documents, and decision points.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-semibold">Get started</h2>
          <p className="text-sm text-slate-600 mt-2">Schedule a consultation—contact details below.</p>
        </div>
      </div>
    </main>
  )
}