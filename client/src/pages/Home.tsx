import { FormEvent, PointerEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
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
  ShieldCheck,
  Smartphone,
  Store,
  X,
  Zap,
} from "lucide-react";

const contactNumber = "+923255531155";
const whatsappUrl = "https://wa.me/923255531155";
const contactEmail = "RaoSaqlaingee@gmail.com";

const markets = [
  { code: "PK", name: "Pakistan" },
  { code: "UK", name: "United Kingdom" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IE", name: "Ireland" },
];
const repeatingMarkets = [...markets, ...markets];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/zalimmarketing", icon: Instagram },
  { label: "Discord", href: "https://discord.com/invite/RhfqQ2YG", icon: MessageCircle },
  { label: "GitHub", href: "https://github.com/RaoSaqlainM/zalim-marketing-portfolio", icon: Github },
  { label: "WhatsApp", href: whatsappUrl, icon: MessageCircle },
];

const services = [
  { icon: MonitorSmartphone, title: "WordPress Websites", text: "Custom websites that are fast, secure, and easy for you to update.", tag: "Most Popular", tone: "blue", image: "/images/web-service.webp" },
  { icon: Store, title: "Local Business Sites", text: "Complete business websites with services, pricing, contact forms, maps and booking.", tag: "Starting from £150", tone: "green" },
  { icon: MousePointerClick, title: "Landing Pages", text: "Single-page websites designed to turn visitors into paying customers.", tag: "Quick Turnaround", tone: "amber" },
  { icon: CircleDollarSign, title: "eCommerce Stores", text: "Online shops with product listings, payment integration, and order management.", tag: "Full Setup", tone: "blue" },
  { icon: Search, title: "SEO Optimisation", text: "On-page SEO so your business appears when customers search for you.", tag: "Rank Higher", tone: "green" },
  { icon: BarChart3, title: "Social Media Marketing", text: "Campaigns for Meta, Instagram, TikTok and more, built to reach the right audience.", tag: "Paid Social", tone: "amber", featured: true, image: "/images/social-service.webp" },
];

const projects = [
  { featured: true, image: "/images/medical4me-home.webp", country: "Pakistan · Global", category: "medical4me.com", title: "Expert-reviewed medicine information", text: "A live health-information platform with medicine search, disease guides, a symptom checker, latest posts, and an educational Medicine Finder.", tags: ["Medicine Finder", "Symptom Checker", "Latest Posts", "SEO"], url: "https://medical4me.com" },
  { image: "/images/project-carwash.jpg", live: true, country: "Stockport, UK", category: "Car Wash & Tyre Place", title: "SK4 Hand Car Wash", text: "Website with online booking, pricing, gallery and WhatsApp contact.", tags: ["WordPress", "Booking", "SEO"] },
  { image: "/images/project-barbershop.jpg", country: "London, UK", category: "Barbershop", title: "Pablo's Latin Barbershop", text: "Premium barbershop site with booking, services, and direct calls to action.", tags: ["WordPress", "Booking", "Local"] },
  { image: "/images/project-tyres.jpg", live: true, country: "Manchester, UK", category: "Car Wash & Tyre Place", title: "Droylsden Big Wash", text: "Service website with clear pricing, booking, and local information.", tags: ["WordPress", "SEO", "WhatsApp"] },
  { image: "/images/project-fitness.jpg", country: "Exeter, UK", category: "Fitness & Personal Training", title: "Scott Atkins Fitness", text: "A direct personal-training website with services and enquiry paths.", tags: ["WordPress", "Fitness", "WhatsApp"] },
  { image: "/images/project-grooming.jpg", country: "Sydney, Australia", category: "Men's Grooming", title: "AW Men's — North Sydney Barber", text: "Premium booking-led website for a local grooming business.", tags: ["WordPress", "Luxury", "Australia"], imagePosition: "center 20%" },
];

const processSteps = [
  ["01", "Free Consultation", "We discuss your business, your goals, and what you need. No commitment required."],
  ["02", "Free Demo", "You see a clear direction early, before the work becomes complicated."],
  ["03", "You Approve", "Review the concept, request refinements, and move ahead when it feels right."],
  ["04", "Go Live", "Your website launches with a clear structure, mobile support, and a useful foundation."],
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
    `Budget: ${form.get("budget") || ""}`,
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
      shellRef.current?.style.setProperty("--particle-shift-x", `${(x - 50) * 0.18}px`);
      shellRef.current?.style.setProperty("--particle-shift-y", `${(y - 50) * 0.14}px`);
      pointerFrame.current = null;
    });
  };
  const resetParticles = () => {
    shellRef.current?.style.setProperty("--particle-shift-x", "0px");
    shellRef.current?.style.setProperty("--particle-shift-y", "0px");
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
    <div className="app-shell" id="top" ref={shellRef} data-style="signal-editorial">
      <div className="particle-field" aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <i key={index} />)}</div>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" className="brand"><BrandMark small /><span>Zalim-<b>Marketing</b></span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <div className="nav-right"><a className="nav-wa" href="#contact"><MessageCircle size={14} /> WhatsApp</a><a className="nav-hire" href="#contact">Hire Me</a></div>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>
      {menuOpen && <div className="mobile-menu"><a href="#services" onClick={() => setMenuOpen(false)}>Services <ChevronRight size={15} /></a><a href="#work" onClick={() => setMenuOpen(false)}>Work <ChevronRight size={15} /></a><a href="#process" onClick={() => setMenuOpen(false)}>Process <ChevronRight size={15} /></a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact <ChevronRight size={15} /></a><a className="nav-wa" href="#contact" onClick={() => setMenuOpen(false)}><MessageCircle size={15} /> Start a conversation</a></div>}

      <main>
        <section className="hero-section" aria-labelledby="hero-title" onPointerMove={handlePointerMove} onPointerLeave={resetParticles}>
          <div className="hero-circuit" aria-hidden="true"><span /><span /><span /><span /><BrandMark /><p>01 / ZALIM<br />SIGNAL STUDIO</p><em>SCROLL TO EXPLORE</em></div>
          <div className="hero-media" aria-hidden="true"><img src="/assets/zalim-editorial-hero.webp" alt="" /><span>LIVE SYSTEM PREVIEW</span><i>WEB · SOCIAL · GROWTH</i></div>
          <div className="rail hero-rail">
            <div className="status-row"><span className="status-dot" /> Available for new projects <i>Web · Social · Growth</i></div>
            <p className="eyebrow"><b /> Web Developer · Arifwala, Pakistan</p>
            <div className="hero-kicker"><span>Independent digital studio</span><span>2026</span></div>
            <h1 id="hero-title">I build websites<br />that <span>make business</span><br /><strong>feel bigger.</strong></h1>
            <p className="hero-desc">Hi, I’m <strong>Saqlain Mushtaq</strong> — founder of Zalim-Marketing. I create direct, modern websites and social campaigns that make it easier for people to trust your business and take the next step.</p>
            <div className="hero-actions"><a href="#work" className="button primary">View My Work <ArrowDownRight size={16} /></a><a href="#contact" className="button whatsapp"><MessageCircle size={16} /> Free Consultation</a><a href="#contact" className="text-link">Get a Quote <ArrowUpRight size={15} /></a></div>
            <div className="proof-metrics"><div><b>20+</b><span>Projects Delivered</span></div><div><b>6</b><span>Countries Served</span></div><div><b>100%</b><span>Client Satisfaction</span></div><div><b>24h</b><span>Response Time</span></div></div>
          </div>
        </section>

        <section className="market-strip" aria-label="Markets served"><div className="strip-track">{repeatingMarkets.map((market, index) => <span key={`${market.code}-${index}`}><b>{market.code}</b>{market.name}<i>—</i></span>)}</div></section>

        <section className="benefit-section section-tight"><div className="rail"><div className="benefit-grid">{[
          [Zap, "Fast Delivery", "Most websites are ready in days, not months. No long waits.", "amber"], [CircleDollarSign, "Clear Pricing", "Professional work with a straightforward path from idea to launch.", "green"], [ShieldCheck, "See Direction First", "Review a structured direction early and decide what feels right.", "blue"], [Globe2, "Global Experience", "Support for businesses serving local and international customers.", "green"], [Smartphone, "Mobile Optimised", "Every page is designed to feel deliberate on phones and desktops.", "blue"], [BriefcaseBusiness, "Useful Support", "Practical help with decisions, launch steps, and next improvements.", "amber"],
        ].map(([Icon, title, text, tone]) => { const LineIcon = Icon as typeof Zap; return <article className="benefit" key={title as string}><LineIcon className={`tone-${tone}`} size={20} strokeWidth={1.8} /><div><h3>{title as string}</h3><p>{text as string}</p></div></article>; })}</div></div></section>

        <section id="services" className="ledger-section services-section"><div className="rail"><div className="section-head"><div><p className="eyebrow"><b /> What I Offer</p><h2>Services that<br /><span>move business.</span></h2></div><p>Everything your business needs to look professional online and make the next step clear.</p></div><div className="service-grid">{services.map((service, index) => { const Icon = service.icon; return <article className={`service-card ${service.featured ? "social-service" : ""}`} key={service.title}>{service.image && <img className="service-visual" src={service.image} loading="lazy" decoding="async" alt="" />}<span className="card-index">0{index + 1}</span><Icon className={`tone-${service.tone}`} size={25} strokeWidth={1.65} /><h3>{service.title}</h3><p>{service.text}</p>{service.featured && <div className="channel-row"><span>Meta</span><span>Instagram</span><span>TikTok</span></div>}<small>{service.tag}</small></article>; })}</div></div></section>

        <section id="work" className="work-section"><div className="rail"><div className="section-head section-head-work"><div><p className="eyebrow"><b /> Selected Work</p><h2>Projects with<br /><span>presence.</span></h2></div><div className="work-intro"><p>Clear identity, practical journeys, and content built to make a business easier to choose.</p><span>06 / FEATURED STORIES</span></div></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.featured ? "medical-card" : ""}`} key={project.title}><div className="project-image" style={{ backgroundPosition: project.imagePosition ?? "center top" }}><img src={project.image} loading="lazy" decoding="async" alt={project.featured ? "Medical4Me homepage" : ""} /><div className="image-scan" />{project.live && <span className="live-pill"><i /> Live</span>}<span className="country-pill">{project.country}</span><span className="project-number">0{index + 1}</span>{project.featured && <div className="medical-label"><BrandMark small /><span>LIVE WEBSITE</span></div>}</div><div className="project-body"><p>{project.category}</p><h3>{project.title}</h3><span>{project.text}</span>{project.featured && <a className="medical-email" href="mailto:support@medical4me.com"><Mail size={13} /> support@medical4me.com</a>}<div className="project-tags">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</div>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Visit medical4me.com <ArrowUpRight size={14} /></a>}</div></article>)}<article className="next-card"><BrandMark /><p className="eyebrow"><b /> Your Business</p><h3>Next Project —<br />Could Be Yours</h3><span>Start with a free conversation and see a clear direction first.</span><a href="#contact" className="button whatsapp"><MessageCircle size={16} /> Get Free Demo</a></article></div></div></section>

        <section id="process" className="ledger-section process-section"><div className="rail"><div className="section-head"><div><p className="eyebrow"><b /> How It Works</p><h2>My process is<br /><span>clear and simple.</span></h2></div><p>A straightforward process from first message to a live website, without unnecessary loops or confusing steps.</p></div><div className="process-grid">{processSteps.map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}</div></div></section>

        <section className="proof-section"><div className="rail proof-rail"><div className="proof-title"><p className="eyebrow"><b /> Why It Works</p><h2>Built for real<br /><span>business needs.</span></h2></div><div className="proof-list">{[["Clear first impression", "Your website should make it easy to understand what you do and who it helps."], ["Action-led structure", "Every page should make the next step feel obvious for a visitor."], ["Simple to manage", "A useful site is easier to update, improve, and keep working for your business."]].map(([title, text], index) => <article key={title}><em>0{index + 1}</em><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="cta-section"><div className="rail"><div className="cta-panel"><div className="cta-mark"><BrandMark /></div><p className="eyebrow"><b /> Ready when you are</p><h2>Ready to grow your<br /><span>business online?</span></h2><p>Start with a conversation about your website, your audience, and the result you want to create. The next step will be clear.</p><div><a href="#contact" className="button whatsapp"><MessageCircle size={16} /> Get Free Demo</a><a href={`mailto:${contactEmail}`} className="text-link light">Send an Email <ArrowUpRight size={15} /></a></div></div></div></section>

        <section id="contact" className="ledger-section contact-section"><div className="rail contact-grid"><div className="contact-copy"><p className="eyebrow"><b /> Get in Touch</p><h2>Let’s Work<br /><span>Together.</span></h2><h3>Start with a free consultation</h3><p>Message on WhatsApp or email with a little about your business and project. You will receive a straightforward reply within 24 hours.</p><div className="contact-links"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small><b>{contactNumber}</b></span><ArrowUpRight size={15} /></a><a href={`mailto:${contactEmail}`}><Mail size={18} /><span><small>Email</small><b>{contactEmail}</b></span><ArrowUpRight size={15} /></a></div><div className="contact-meta"><span><MapPin size={15} /> Arifwala, Punjab, Pakistan</span><span><Globe2 size={15} /> Working with businesses worldwide</span></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-topline"><span>PROJECT INTAKE</span><BrandMark small /></div><div className="form-row"><label>Your Name<input name="name" placeholder="Your name" required /></label><label>Email Address<input name="email" type="email" placeholder="you@business.com" required /></label></div><label>Business Name & Country<input name="business" placeholder="Business and country" /></label><label>Estimated Budget <input name="budget" placeholder="Optional" /></label><label>Tell me about your project<textarea name="project" placeholder="What should the new website help you achieve?" required /></label><button type="submit" className="button primary submit">Send via WhatsApp <Send size={16} /></button><p>or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></form></div></section>
      </main>
      <footer><a href="#top" className="brand"><BrandMark small /><span>Zalim-<b>Marketing</b></span></a><p>© 2026 Zalim-Marketing · Arifwala, Pakistan</p><div className="footer-right"><div className="footer-nav"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a><button className="footer-policy" type="button" onClick={() => setPrivacyOpen(true)}>Privacy Policy</button></div><div className="social-links" aria-label="Social profiles">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={15} /></a>)}</div></div></footer>
      {privacyOpen && <div className="privacy-backdrop" role="presentation" onMouseDown={() => setPrivacyOpen(false)}><section className="privacy-dialog" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onMouseDown={(event) => event.stopPropagation()}><button className="privacy-close" type="button" aria-label="Close Privacy Policy" onClick={() => setPrivacyOpen(false)}><X size={18} /></button><p className="eyebrow"><b /> Privacy Policy</p><h2 id="privacy-title">Your details stay private.</h2><p>Any enquiry, business detail, project file, and conversation you share with Zalim-Marketing is treated as confidential. We do not sell or share your information with anyone else.</p><div className="privacy-rule" /><h3>Clear work. Honest revisions.</h3><p>We keep refining your website, portfolio, or store with you until you are happy with the agreed direction. There is no arbitrary limit on reasonable revisions within the agreed project scope. If a request moves beyond that scope, we discuss it clearly before any extra work begins.</p><p className="privacy-contact">Questions about your information? <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></section></div>}
    </div>
  );
}
