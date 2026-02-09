"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Duality from "@/components/Duality";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <PageLoader>
      <Nav />
      <Hero />
      <main className="relative z-10 mt-[100vh]">
        <SelectedWork />
        <Duality />
        <ClientLogos />
        <Services />
      </main>
      <Footer className="relative z-10" />
    </PageLoader>
  );
}
