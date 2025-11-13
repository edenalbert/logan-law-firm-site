import "../styles/globals.css";

export const metadata = {
  title: "Logan Law Firm, LLC",
  description: "Louisiana Probate, Succession & Estate Litigation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-800">{children}</body>
    </html>
  );
}