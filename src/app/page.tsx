import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { N8nChat } from '@/components/N8n';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--kalfu-light)] font-sans selection:bg-[var(--kalfu-calypso)] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
      <N8nChat />
    </main>
  );
}
