import React from "react";
import Content from "./Content";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Trustsection from "./Trustsection";
import Footer from "./Footer";

export default function Header() {
  return (
    <header className="flex flex-col h-full w-full mx-auto max-md:pb-16">

      <Content />

      <Features />

      <Testimonials />

      <Trustsection />

      <Footer />

    </header>
  );
}
