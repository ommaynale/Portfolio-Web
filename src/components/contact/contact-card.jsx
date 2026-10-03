import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactCardCtas } from './contact-card-ctas';
import { FadeIn } from '@/components/ui/motion-primitives';
import { ShaderFlow } from '../shaders/shader-flow';

const CARD_FADE_MASK =
  'radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)';

export function ContactCard() {
  return (
    <section className="mx-auto my-12 w-full max-w-275 px-6 sm:my-20 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={3} brightness={3} />
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  Let&rsquo;s connect
                </h2>
                <p className="max-w-[29ch] text-[18px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[22px] mb-6">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border bg-background p-6 sm:p-8">
                <div className="flex items-center gap-3 opacity-75">
                  <SocialIcon
                    href="mailto:omaynale@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/in/ommaynale/"
                    label="LinkedIn"
                    imageSrc="/linkedin.svg"
                  />
                  <SocialIcon
                    href="https://github.com/ommaynale"
                    label="Github"
                    imageSrc="/github.svg"
                    className="w-8 h-8"
                  />
                  <SocialIcon
                    href="https://x.com/omms_g"
                    label="X"
                    imageSrc="/x.svg"
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[13px] tracking-tight text-foreground/70">
                    © 2026 Om Mainale. All rights reserved.
                  </p>
                  <p className="text-[12px] tracking-tight text-foreground/45">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({ href, label, lucideIcon: LucideIcon, imageSrc }) {
  const isExternal = href.startsWith('http');
  const props = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  
  const Component = isExternal ? 'a' : Link;
  const linkProps = isExternal ? { href } : { to: href };
  
  return (
    <Component
      {...linkProps}
      aria-label={label}
      className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-colors hover:text-foreground"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain invert"
        />
      ) : null}
    </Component>
  );
}
