import React from "react";
import Content from "./Content";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Trustsection from "./Trustsection";
import Footer from "./Footer";

export default function Header() {
  return (
    <header className="flex flex-col h-full w-full mx-auto bg-blue-900 max-md:pb-5">

      <Content />

      <Features />

      <Testimonials />

      <Trustsection />

      <Footer />

    </header>
  );
}
