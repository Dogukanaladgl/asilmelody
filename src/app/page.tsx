import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />
      <section id="sergi" className="min-h-[40vh] bg-museum-dark" aria-hidden />
    </main>
  );
}
