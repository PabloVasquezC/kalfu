import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { N8nChat } from '@/components/N8n';

import { client } from '@/sanity/lib/client';
import { 
  HERO_QUERY, 
  ABOUT_QUERY, 
  SERVICES_QUERY, 
  TEAM_QUERY, 
  CONTACT_QUERY 
} from '@/sanity/lib/queries';

export const revalidate = 5; // revalidate every 5 seconds

export default async function Home() {
  // Fetch data from Sanity
  const [heroData, aboutData, servicesData, teamData, contactData] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(ABOUT_QUERY),
    client.fetch(SERVICES_QUERY),
    client.fetch(TEAM_QUERY),
    client.fetch(CONTACT_QUERY),
  ]);

  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Team data={teamData} />
      <Services data={servicesData} />
      <Contact data={contactData} />
      <Footer />
      <N8nChat />
    </main>
  );
}
