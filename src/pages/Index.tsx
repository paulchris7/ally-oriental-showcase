import { Button } from "@/components/ui/button";
import {
  Music2, Headphones, Cloud, Instagram, Youtube, Facebook,
  Mail, Phone, MapPin, Calendar, Mic2, Disc3, Heart, Sparkles, Play
} from "lucide-react";
import heroImg from "@/assets/ally-hero.jpg";
import live1 from "@/assets/ally-live-1.jpg";
import live2 from "@/assets/ally-live-2.jpg";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.42a8.16 8.16 0 0 0 4.77 1.52V6.49a4.85 4.85 0 0 1-1.84-.2z" />
  </svg>
);

const Nav = () => (
  <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
    <div className="container flex items-center justify-between h-16">
      <a href="#top" className="font-display text-xl tracking-wide">
        Ally <span className="text-gold italic">Oriental</span>
      </a>
      <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition">About</a>
        <a href="#live" className="hover:text-foreground transition">Live</a>
        <a href="#projects" className="hover:text-foreground transition">Projects</a>
        <a href="#contact" className="hover:text-foreground transition">Booking</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
    <img
      src={heroImg}
      alt="Ally Oriental portrait — soulful RnB and Afro House artist"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-gradient-glow opacity-60" />

    <div className="container relative pb-20 md:pb-32 pt-32">
      <div className="max-w-3xl">
        <p className="text-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" /> RnB · Afro House · Reggae
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 text-balance">
          Ally
          <br />
          <span className="italic text-gold">Oriental</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10 leading-relaxed">
          Emotional truth at the heart of every note. Soulful vocals weaving stories
          of love, vulnerability and self-discovery — in French, Creole and English.
        </p>

        <a
          href="https://youtu.be/pBRdhmNkM3g"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 mb-8 p-3 pr-6 rounded-full border border-gold/40 bg-card/50 backdrop-blur hover:bg-card/80 hover:border-gold transition-all max-w-full"
        >
          <span className="relative h-11 w-11 shrink-0 grid place-items-center rounded-full bg-gold text-primary-foreground">
            <Play className="h-5 w-5 fill-current ml-0.5" />
            <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-gold">New Single · Out now</span>
            <span className="block font-display text-lg md:text-xl truncate">
              "San ou" <span className="text-muted-foreground italic text-sm">— Ally Oriental × ÄSHH</span>
            </span>
          </span>
        </a>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
            <a href="https://open.spotify.com/search/Ally%20Oriental" target="_blank" rel="noopener noreferrer">
              <Music2 className="mr-2 h-4 w-4" /> Spotify
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-foreground/30 hover:bg-foreground/10">
            <a href="https://audiomack.com/search/ally%20oriental" target="_blank" rel="noopener noreferrer">
              <Headphones className="mr-2 h-4 w-4" /> Audiomack
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6 border-foreground/30 hover:bg-foreground/10">
            <a href="https://soundcloud.com/search?q=ally%20oriental" target="_blank" rel="noopener noreferrer">
              <Cloud className="mr-2 h-4 w-4" /> SoundCloud
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="container grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative order-2 md:order-1">
        <div className="absolute -inset-4 bg-gradient-warm opacity-30 blur-2xl rounded-full" />
        <img
          src={live2}
          alt="Ally Oriental performing on stage"
          className="relative rounded-sm shadow-warm w-full object-cover aspect-[4/5]"
        />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border p-5 rounded-sm max-w-[180px]">
          <p className="text-gold font-display text-3xl">2019</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Schenatzar Vocal School · Port-au-Prince</p>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">About the artist</p>
        <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
          A voice carved from <span className="italic text-gold">feeling</span>.
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Born <span className="text-foreground">July 15, 2003</span>, Alexandra Oriental — known as
            <span className="text-foreground"> Ally Oriental</span> — is an artist who places emotional
            truth at the heart of her music. With a voice that is soft, expressive and lived-in,
            she tells stories of intense love, emotional imbalance, vulnerability and self-discovery.
          </p>
          <p>
            In <span className="text-foreground">2019</span>, she trained at the renowned
            <span className="text-foreground"> Schenatzar vocal school</span> in Port-au-Prince,
            sharpening her vocal technique, interpretation and stage presence — and
            affirming the identity of her sound.
          </p>
          <p>
            Her universe oscillates between sensuality and vulnerability, carried by warm melodies
            and an authentic delivery that reminds us sensitivity is a strength.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
          {[
            { label: "Languages", value: "FR · KR · EN" },
            { label: "Genres", value: "RnB · Afro · Reggae" },
            { label: "Based in", value: "Haiti 🇭🇹" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{s.label}</p>
              <p className="font-display text-lg text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Live = () => (
  <section id="live" className="relative py-24 md:py-32 bg-card/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">On stage</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6">
          Live <span className="italic text-gold">Performances</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Intimate, soulful, emotional. Ally builds an authentic connection with every audience —
          from acoustic sets to full live band showcases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center mb-16">
        <img
          src={live1}
          alt="Ally Oriental singing live"
          className="rounded-sm shadow-warm w-full object-cover aspect-[4/5]"
        />
        <div className="space-y-6">
          <article className="border-l-2 border-gold/60 pl-6 py-2">
            <div className="flex items-center gap-3 text-gold mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">Every Friday · Current</span>
            </div>
            <h3 className="font-display text-3xl mb-2">Café Patricio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Weekly live performances showcasing her RnB and reggae universe in a warm, convivial setting.
            </p>
          </article>

          <article className="border-l-2 border-border pl-6 py-2">
            <div className="flex items-center gap-3 text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">Sundays · Past residency</span>
            </div>
            <h3 className="font-display text-3xl mb-2">Gwog Bar</h3>
            <p className="text-muted-foreground leading-relaxed">
              A weekly Sunday singing residency on the boulevard, where she sharpened her stage craft.
            </p>
          </article>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { icon: Mic2, label: "Acoustic Live" },
              { icon: Sparkles, label: "Showcase" },
              { icon: Disc3, label: "Live Band" },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded-sm p-4 text-center hover:border-gold/60 transition">
                <s.icon className="h-5 w-5 mx-auto mb-2 text-gold" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const items = [
    { icon: Disc3, title: "Original Singles", text: "A wave of original RnB and reggae compositions ready to be released." },
    { icon: Sparkles, title: "Music Videos", text: "Cinematic visuals to bring her emotional storytelling to life." },
    { icon: Heart, title: "Debut EP", text: "A developing project — sincere, sensual, deeply human." },
  ];
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">What's next</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6">
            Upcoming <span className="italic text-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Currently crafting original RnB and reggae compositions — building a sound and a visual world
            rooted in emotion, sincerity and human stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group relative border border-border bg-card/60 backdrop-blur p-8 rounded-sm hover:border-gold/60 transition-all hover:-translate-y-1">
              <div className="text-xs text-muted-foreground tracking-widest mb-6">0{i + 1}</div>
              <it.icon className="h-8 w-8 text-gold mb-6" />
              <h3 className="font-display text-2xl mb-3">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/allyoriental", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@allyoriental", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/1DFNzRBmyf/", label: "Facebook" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@allyoriental1", label: "TikTok" },
  ];
  return (
    <footer id="contact" className="relative bg-card/60 border-t border-border pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Booking & contact</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Let's <span className="italic text-gold">create</span> something.
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Available for live shows, showcases, collaborations and studio sessions
              across Cap-Haïtien, Port-au-Prince and beyond.
            </p>
          </div>

          <div className="space-y-5">
            <a href="mailto:alexandraoriental89@gmail.com" className="flex items-center gap-4 group">
              <span className="h-12 w-12 grid place-items-center rounded-full border border-border group-hover:border-gold group-hover:text-gold transition">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-display text-xl">alexandraoriental89@gmail.com</p>
              </div>
            </a>
            <a href="tel:+50937194166" className="flex items-center gap-4 group">
              <span className="h-12 w-12 grid place-items-center rounded-full border border-border group-hover:border-gold group-hover:text-gold transition">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                <p className="font-display text-xl">+509 37 19 41 66</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="h-12 w-12 grid place-items-center rounded-full border border-border">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Locations</p>
                <p className="font-display text-xl">Cap-Haïtien · Port-au-Prince</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="font-display text-2xl">
            Ally <span className="italic text-gold">Oriental</span>
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-gold hover:text-gold hover:bg-foreground/5 transition"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ally Oriental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Index = () => (
  <main className="bg-background text-foreground">
    <Nav />
    <Hero />
    <About />
    <Live />
    <Projects />
    <Contact />
  </main>
);

export default Index;
