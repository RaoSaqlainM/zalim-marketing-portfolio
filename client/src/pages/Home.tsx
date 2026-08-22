import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Github,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Search,
  Send,
  Smartphone,
  Store,
  X,
  Zap,
} from "lucide-react";

const contactNumber = "+923255531155";
const whatsappUrl = "https://wa.me/923255531155";
const contactEmail = "RaoSaqlaingee@gmail.com";

const markets = ["Pakistan", "United Kingdom", "United Arab Emirates", "United States", "Canada", "Australia", "Ireland"];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/zalimmarketing", icon: Instagram },
  { label: "Discord", href: "https://discord.com/invite/RhfqQ2YG", icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/RaoSaqlainM/zalim-marketing-portfolio", icon: Github },
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle },
];

const editorialServices = [
  {
    number: "01",
    icon: MonitorSmartphone,
    label: "Digital Foundations",
    title: "Websites that make a strong first impression.",
    text: "Clear WordPress and local-business websites built around your services, proof, and the next step you want customers to take.",
    notes: ["WordPress sites", "Booking flows", "Mobile-first"],
    image: "/images/web-service.webp",
    className: "foundation-story",
  },
  {
    number: "02",
    icon: Search,
    label: "Visible Next Steps",
    title: "Landing pages and SEO that turn attention into action.",
    text: "Focused campaign pages and practical on-page SEO designed to make your business easier to discover, understand, and contact.",
    notes: ["Landing pages", "Local SEO", "Clear CTAs"],
    image: "/images/project-carwash.jpg",
    className: "demand-story",
  },
  {
    number: "03",
    icon: BarChart3,
    label: "Campaign Momentum",
    title: "Social media marketing with a reason to stop scrolling.",
    text: "Meta, Instagram, and TikTok campaigns paired with stronger creative direction and a website ready to receive the response.",
    notes: ["Meta ads", "Short-form creative", "Campaign pages"],
    image: "/images/social-service.webp",
    className: "campaign-story",
  },
];

const projects = [
  { featured: true, image: "/images/medical4me-home.webp", place: "Pakistan · Global", category: "medical4me.com", title: "Expert-reviewed medicine information", text: "A live health-information platform with medicine search, disease guides, a symptom checker, latest posts, and an educational Medicine Finder.", tags: ["Medicine Finder", "Symptom Checker", "Latest Posts", "SEO"], url: "https://medical4me.com" },
  { image: "/images/project-carwash.jpg", place: "Stockport, UK", category: "Automotive", title: "SK4 Hand Car Wash", text: "Booking, services, prices, and WhatsApp contact in one clear local journey.", tags: ["WordPress", "Booking", "SEO"] },
  { image: "/images/project-barbershop.jpg", place: "London, UK", category: "Grooming", title: "Pablo's Latin Barbershop", text: "A premium booking-led presence for a local barbershop.", tags: ["Booking", "Local", "Brand"] },
  { image: "/images/project-tyres.jpg", place: "Manchester, UK", category: "Automotive", title: "Droylsden Big Wash", text: "Direct service information with stronger enquiry paths.", tags: ["WordPress", "SEO", "WhatsApp"] },
  { image: "/images/project-fitness.jpg", place: "Exeter, UK", category: "Fitness", title: "Scott Atkins Fitness", text: "A focused personal-training site with clear services and contact.", tags: ["Fitness", "Services", "Enquiry"] },
];

const processSteps = [
  ["01", "Define", "We get clear on the business, audience, and action your website needs to support."],
  ["02", "Direct", "You see an early direction before the work becomes too deep or complicated."],
  ["03", "Refine", "We shape the details together until the approved direction feels right."],
  ["04", "Launch", "Your site goes live with a clear handover and a practical next-step plan."],
];

function BrandMark({ small = false }: { small?: boolean }) {
  return <img className={small ? "brand-mark brand-mark-small" : "brand-mark"} src="/images/zalim-marketing-mark.webp" alt="" />;
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "Hello, I would like to discuss a website project.",
    `Name: ${form.get("name") || ""}`,
    `Email: ${form.get("email") || ""}`,
    `Business: ${form.get("business") || ""}`,
    `Project: ${form.get("project") || ""}`,
  ].join("\n");
  window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const pointerFrame = useRef<number | null>(null);
  const pointerPosition = useRef({ x: 50, y: 50 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerPosition.current = { x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 };
    if (pointerFrame.current !== null) return;
    pointerFrame.current = window.requestAnimationFrame(() => {
      const { x, y } = pointerPosition.current;
      shellRef.current?.style.setProperty("--hero-x", `${x}%`);
      shellRef.current?.style.setProperty("--hero-y", `${y}%`);
      pointerFrame.current = null;
    });
  };

  useEffect(() => {
    if (!privacyOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPrivacyOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [privacyOpen]);

  return (
    <div className="app-shell cinematic-shell" id="top" ref={shellRef} data-style="cinematic-case-stories">
      <nav className="site-nav cinematic-nav" aria-label="Primary navigation">
        <a href="#top" className="brand"><BrandMark small /><span>Zalim-<b>Marketing</b></span></a>
        <div className="nav-links"><a href="#services">Capabilities</a><a href="#work">Selected Work</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <div className="nav-right"><a className="nav-wa" href="#contact"><MessageCircle size={14} /> WhatsApp</a><a className="nav-hire" href="#contact">Start a Project</a></div>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {menuOpen && <div className="mobile-menu cinematic-menu"><span>MENU / ZALIM-MARKETING</span><a href="#services" onClick={() => setMenuOpen(false)}>Capabilities <ChevronRight size={15} /></a><a href="#work" onClick={() => setMenuOpen(false)}>Selected Work <ChevronRight size={15} /></a><a href="#process" onClick={() => setMenuOpen(false)}>Process <ChevronRight size={15} /></a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact <ChevronRight size={15} /></a><a className="nav-wa" href="#contact" onClick={() => setMenuOpen(false)}><MessageCircle size={15} /> Start a conversation</a></div>}

      <main>
        <section className="cinematic-hero" aria-labelledby="hero-title" onPointerMove={handlePointerMove}>
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-lens" aria-hidden="true" />
          <div className="rail cinematic-hero-grid">
            <div className="cinematic-copy">
              <p className="signal-label"><i /> Zalim-Marketing / Digital Systems</p>
              <h1 id="hero-title">Make your<br /><span>business</span><br />hard to ignore.</h1>
              <p>Hi, I’m <strong>Saqlain Mushtaq</strong>. I build direct websites and social systems that make it easier for people to understand your value, trust your work, and take the next step.</p>
              <div className="cinematic-actions"><a href="#work" className="cinematic-button">View selected work <ArrowDownRight size={17} /></a><a href="#contact" className="hero-contact">Start a conversation <ArrowUpRight size={16} /></a></div>
              <div className="hero-micro"><span>ARIFWALA, PAKISTAN</span><span>WORKING WORLDWIDE</span></div>
            </div>
            <div className="hero-stage" aria-label="Digital business system visual">
              <div className="stage-notation">01 / LIVE PREVIEW</div>
              <img src="/assets/zalim-editorial-hero.webp" alt="" />
              <span className="stage-chip chip-top">WEB SYSTEM</span><span className="stage-chip chip-bottom">SOCIAL / GROWTH</span>
              <div className="stage-lines" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section className="signal-strip" aria-label="Zalim-Marketing operating summary">
          <div className="rail signal-strip-grid"><div><b>20+</b><span>Projects delivered</span></div><div><b>06</b><span>Markets served</span></div><div><b>24h</b><span>Typical response</span></div><p>{[...markets, ...markets].map((market, index) => <span key={`${market}-${index}`}>{market}<i>✦</i></span>)}</p></div>
        </section>

        <section className="studio-statement"><div className="rail studio-statement-grid"><p className="signal-label"><i /> The Zalim approach</p><h2>Less noise.<br /><span>More proof.</span></h2><div><p>Every decision should help a visitor understand the business faster. That means a clear message, stronger visual proof, and a contact route that never feels hidden.</p><a href="#contact">See how we can work <ArrowUpRight size={16} /></a></div></div></section>

        <section id="services" className="editorial-services"><div className="rail"><div className="editorial-heading"><div><p className="signal-label"><i /> Capabilities</p><h2>A few focused systems.<br /><span>Built to work together.</span></h2></div><p>Website, discovery, and campaign work designed as one clear customer journey rather than disconnected tasks.</p></div><div className="story-grid">{editorialServices.map((service) => { const Icon = service.icon; return <article className={`service-story ${service.className}`} key={service.number}><div className="story-media"><img src={service.image} alt="" loading="lazy" decoding="async" /><span>{service.number} / {service.label}</span></div><div className="story-copy"><Icon size={23} /><h3>{service.title}</h3><p>{service.text}</p><div>{service.notes.map((note) => <small key={note}>{note}</small>)}</div></div></article>; })}</div></div></section>

        <section id="work" className="case-section"><div className="rail"><div className="case-heading"><p className="signal-label"><i /> Case story / 01</p><div><h2>Medical4Me<br /><span>made approachable.</span></h2><p>A health-information platform where clear journeys matter. The live experience brings medicine search, symptom support, disease guides, and educational resources into one accessible space.</p></div></div><article className="feature-case"><div className="case-image"><img src={projects[0].image} alt="Medical4Me homepage" loading="lazy" decoding="async" /><div className="case-image-grid" /><span>LIVE / MEDICAL4ME.COM</span></div><div className="case-detail"><p>Healthcare platform</p><h3>Expert-reviewed medicine information, shaped for practical discovery.</h3><div className="case-tags">{projects[0].tags.map((tag) => <i key={tag}>{tag}</i>)}</div><a href={projects[0].url} target="_blank" rel="noreferrer">Visit medical4me.com <ArrowUpRight size={16} /></a><small><Mail size={14} /> support@medical4me.com</small></div></article></div></section>

        <section className="work-reel-section"><div className="rail"><div className="reel-heading"><p className="signal-label"><i /> More selected work</p><span>SCROLL / DRAG</span></div><div className="work-reel">{projects.slice(1).map((project, index) => <article className="reel-card" key={project.title}><div><img src={project.image} alt="" loading="lazy" decoding="async" /><span>0{index + 2}</span></div><p>{project.category} / {project.place}</p><h3>{project.title}</h3><small>{project.text}</small></article>)}<article className="reel-contact"><BrandMark /><p>Your next story could start here.</p><a href="#contact">Let’s talk <ArrowDownRight size={16} /></a></article></div></div></section>

        <section id="process" className="process-route"><div className="rail"><div className="route-heading"><p className="signal-label"><i /> Working route</p><h2>A clear route from<br /><span>first message to launch.</span></h2></div><div className="route-steps">{processSteps.map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}</div></div></section>

        <section id="contact" className="cinematic-contact"><div className="rail contact-grid"><div className="contact-copy"><p className="signal-label"><i /> Start a conversation</p><h2>Show your business<br /><span>at its best.</span></h2><p>Tell me a little about the project. I will reply with a clear next step, not a generic sales message.</p><div className="contact-links"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small><b>{contactNumber}</b></span><ArrowUpRight size={15} /></a><a href={`mailto:${contactEmail}`}><Mail size={18} /><span><small>Email</small><b>{contactEmail}</b></span><ArrowUpRight size={15} /></a></div><div className="contact-meta"><span><MapPin size={15} /> Arifwala, Punjab, Pakistan</span><span><Globe2 size={15} /> Websites and campaigns for international clients</span></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-topline"><span>PROJECT INTAKE</span><BrandMark small /></div><div className="form-row"><label>Your Name<input name="name" placeholder="Your name" required /></label><label>Email Address<input name="email" type="email" placeholder="you@business.com" required /></label></div><label>Business Name & Country<input name="business" placeholder="Business and country" /></label><label>Tell me about your project<textarea name="project" placeholder="What should the new website help you achieve?" required /></label><button type="submit" className="cinematic-button submit">Send via WhatsApp <Send size={16} /></button><p>or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></form></div></section>
      </main>

      <footer><a href="#top" className="brand"><BrandMark small /><span>Zalim-<b>Marketing</b></span></a><p>© 2026 Zalim-Marketing · Arifwala, Pakistan</p><div className="footer-right"><div className="footer-nav"><a href="#services">Capabilities</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a><button className="footer-policy" type="button" onClick={() => setPrivacyOpen(true)}>Privacy Policy</button></div><div className="social-links" aria-label="Social profiles">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={15} /></a>)}</div></div></footer>
      {privacyOpen && <div className="privacy-backdrop" role="presentation" onMouseDown={() => setPrivacyOpen(false)}><section className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onMouseDown={(event) => event.stopPropagation()}><button className="privacy-close" type="button" aria-label="Close Privacy Policy" onClick={() => setPrivacyOpen(false)}><X size={18} /></button><p className="signal-label"><i /> Privacy Policy</p><h2 id="privacy-title">Your details stay private.</h2><p>Any enquiry, business detail, project file, and conversation you share with Zalim-Marketing is treated as confidential. We do not sell or share your information with anyone else.</p><div className="privacy-rule" /><h3>Clear work. Honest revisions.</h3><p>We keep refining your website, portfolio, or store with you until you are happy with the agreed direction. There is no arbitrary limit on reasonable revisions within the agreed project scope. If a request moves beyond that scope, we discuss it clearly before any extra work begins.</p><p className="privacy-contact">Questions about your information? <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></section></div>}
    </div>
  );
}
