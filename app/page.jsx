"use client";
import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Generations from "./components/Generations";
import Testimonials from "./components/Testimonials";
import CredentialsShowcase from "./components/CredentialsShowcase";
import HeroRotating from "./components/HeroRotating";


//#2c3b4c navy color used 
//#0d1b2a] darker navy color used
export default function LoganStarterPage() {
 return (
    <>
      <Header /> 

     
  <main>
  {/* HERO SECTION */}
 <section className="relative isolate">

{/* Background image */}
<HeroRotating />


{/* GENERATIONS SECTION */}
<Generations />

{/* Credentials SECTION */}
<CredentialsShowcase /> 


{/* Clients SECTION */}
{/* <Testimonials /> */}

</section>



{/* ===== BOTTOM CTA SECTION ===== */}
<section aria-labelledby="legacy-heading" className="mt-16">
  {/* Top banner headline */}
  <div className="bg-[#ddd0be] text-slate-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <h2 id="legacy-heading" className="text-2xl md:text-4xl font-extrabold tracking-tight">
        We will help you keep your legacy strong.
      </h2>
    </div>
  </div>

  {/* Thin navy bar */}
  <div className="h-3 w-full bg-[#0d1b2a]" />

  {/* Split panel: left = dark panel + form, right = image */}
  <div className="grid grid-cols-1 md:grid-cols-2">
    {/* Left panel */}
    <div className="bg-[#0d1b2a] text-slate-100">
      <div className="max-w-md mx-auto px-6 py-10 md:py-12">
        <h3 className="text-xl md:text-2xl font-semibold">
          Partner With Us to Protect Tomorrow
        </h3>

        {/* Accent rule with small square */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex-1 h-px bg-slate-400/60" />
          <div className="h-5 w-5 border border-slate-400/70 rounded-sm" />
          <div className="flex-1 h-px bg-slate-400/60" />
        </div>

        <p className="mt-6 text-slate-200/90">
          Send us an email to inquire how we can assist you.
        </p>
        <p className="mt-2 text-sm text-slate-300/80">
          Fields marked with an <span className="font-semibold">*</span> are required
        </p>

        {/* Contact form */}
        <form action="/api/contact" method="POST" className="mt-6 space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full bg-transparent text-slate-100 placeholder-slate-300/80 border border-slate-500/60 focus:border-slate-200 focus:ring-2 focus:ring-slate-300/40 rounded px-3 py-2 outline-none"
          />
          <input
            name="email"
            placeholder="Email*"
            required
            type="email"
            className="w-full bg-transparent text-slate-100 placeholder-slate-300/80 border border-slate-500/60 focus:border-slate-200 focus:ring-2 focus:ring-slate-300/40 rounded px-3 py-2 outline-none"
          />
          <input
            name="phone"
            placeholder="Phone"
            className="w-full bg-transparent text-slate-100 placeholder-slate-300/80 border border-slate-500/60 focus:border-slate-200 focus:ring-2 focus:ring-slate-300/40 rounded px-3 py-2 outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full bg-transparent text-slate-100 placeholder-slate-300/80 border border-slate-500/60 focus:border-slate-200 focus:ring-2 focus:ring-slate-300/40 rounded px-3 py-2 outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-slate-200 text-slate-900 font-semibold hover:bg-white transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>

    {/* Right image */}
    <div className="relative">
      <img
        src="/images/Church---white---small-8x6-5-in.jpg"  
        alt="Historic architecture against a blue sky"
        className="h-full w-full object-cover"
      />
      {/* Optional subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-black/0 md:to-black/0" />
    </div>
  </div>
</section>
</main>

<Footer />   

    </>
  );
}