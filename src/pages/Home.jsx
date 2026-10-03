import { ContactCard } from '@/components/contact/contact-card';
import { Hero } from '@/components/hero/hero';
import { Projects } from '@/components/projects/projects';
import { Skills } from '@/components/about/skills';


export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      {/* <Skills/> */}
      <Projects withHeadline viewMoreVisible />
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
