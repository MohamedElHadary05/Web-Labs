import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import data from "./data";
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Courses courses={data.courses} />
        <Trusted companies={data.trustedCompanies} />
      </main>
      <Footer />
    </div>
  );
}
