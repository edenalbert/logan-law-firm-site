import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Logan Law Firm, LLC",
  description: "Contact Logan Law Firm in Lafayette, Louisiana — schedule a consultation or ask a question.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-[#2c3b4c] text-white py-20">
        <div className="absolute inset-0">
          <img
            src="/images/lft-courthouse.jpg"
            alt="Lafayette Courthouse"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Logan Law Firm</h1>
          <p className="mt-4 text-lg text-slate-200">
            We’re here to help with your legal needs — from estate planning to litigation.
          </p>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#2c3b4c] mb-4">Send Us a Message</h2>
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you?"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2c3b4c]"
              />
              <button
                type="submit"
                className="bg-[#2c3b4c] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Office Info */}
          <div className="bg-[#f8f9fb] p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#2c3b4c] mb-3">Our Office</h3>
            <p className="text-slate-700 mb-4">
              <strong>Logan Law Firm, LLC</strong><br />
              700 Jefferson Street<br />
              Lafayette, Louisiana 70501
            </p>
            <p className="text-slate-700 mb-4">
              Phone: <a href="tel:13372834008" className="underline hover:text-[#2c3b4c]">337-306-9685</a><br />
              Email: <a href="mailto:info@loganfirm.com" className="underline hover:text-[#2c3b4c]">kat@loganfirm.com</a>
            </p>
            <iframe
              title="Logan Law Firm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.688821548627!2d-92.016476!3d30.224089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249cc5a0ffce65%3A0x3bcd3da8d42d7b5e!2s700%20Jefferson%20St%2C%20Lafayette%2C%20LA%2070501!5e0!3m2!1sen!2sus!4v1707840000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}