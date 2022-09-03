import React from "react";
import Hero from "../Hero";
import Collection from "../Collection";
import Specials from "../Specials";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <Specials />
      <Banner />
      <Blogs />
      <Footer />
    </div>
  );
}
