"use client";

import { useState } from "react";
import Image from "next/image";

const bookingLink = "https://wa.me/254794000020";
const getRoomBookingLink = (roomName: string) =>
  `${bookingLink}?text=${encodeURIComponent(
    `Hello, I'd like to book the ${roomName}. Please share availability and rates.`,
  )}`;

const rooms = [
  {
    name: "Standard Room",
    detail: "A considered, comfortable retreat for solo travellers and couples.",
    image:
      "/room-standard.jpeg",
    alt: "White bed dressed with charcoal cushions and folded towels",
    size: "25 sqm",
    bed: "1 bed",
  },
  {
    name: "Deluxe Room",
    detail: "More room to unwind, with thoughtful details and garden views.",
    image:
      "/room-deluxe.jpeg",
    alt: "Double bed with a timber frame beneath a pendant light",
    size: "32 sqm",
    bed: "1 queen bed",
  },
  {
    name: "Deluxe Double",
    detail: "A generous stay made for slow mornings and longer escapes.",
    image:
      "/room-deluxe-double.jpeg",
    alt: "Bright guest room with a large bed and bedside table",
    size: "38 sqm",
    bed: "1 king bed",
  },
];

const experiences = [
  {
    number: "01",
    title: "A table worth lingering at",
    category: "DINING",
    text: "Settle in for Kenyan favourites, continental classics, and easy evenings at the bar.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    alt: "An intimate restaurant table set for dinner",
  },
  {
    number: "02",
    title: "Room for every occasion",
    category: "GATHERINGS",
    text: "From focused meetings to life's big celebrations, find a space that brings people together.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    alt: "An elegant event venue arranged for a celebration",
  },
];

export default function ResortHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2 guests");

  const checkAvailability = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note = `Hello, I'd like to enquire about a stay${arrival ? ` from ${arrival}` : ""}${departure ? ` to ${departure}` : ""} for ${guests}.`;
    window.open(`${bookingLink}?text=${encodeURIComponent(note)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="The Grand Alton Resort home">
          <Image className="brand-logo" src="/grand-alton-logo.png" alt="The Grand Alton Resort — Grand moments start here" width={1334} height={768} priority />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span><span aria-hidden="true">{menuOpen ? "×" : "＋"}</span>
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#stay" onClick={() => setMenuOpen(false)}>Stay</a>
          <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#gather" onClick={() => setMenuOpen(false)}>Gather</a>
          <a className="nav-book" href={bookingLink} target="_blank" rel="noreferrer">Enquire &nbsp;↗</a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="A tree-lined aerial view of the Grand Alton Resort" />
        <div className="hero-shade" />
        <div className="hero-meta"><span>EST. 2024</span><span>OTONGLO · KISUMU, KENYA</span></div>
        <div className="hero-content">
          <p className="eyebrow eyebrow-light"><span /> A WARM WELCOME, BY THE LAKE</p>
          <h1 id="hero-title">Find your<br /><em>place to pause.</em></h1>
          <p className="hero-intro">A thoughtful stay in the heart of Kisumu—where Kenyan hospitality, unhurried moments, and the spirit of Lake Victoria meet.</p>
          <a className="button button-light" href="#stay">Discover the resort <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-bottom"><span>5 MINUTES FROM KISUMU INTERNATIONAL AIRPORT</span><a href="#story">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        <div className="hero-side-note">WESTERN KENYA&nbsp; / &nbsp;00°06′S 34°45′E</div>
      </section>

      <section className="booking-wrap" aria-label="Check availability">
        <form className="booking-bar" onSubmit={checkAvailability}>
          <div className="booking-intro"><span className="eyebrow">MAKE YOURSELF AT HOME</span><strong>Plan your stay</strong></div>
          <label className="booking-field"><span>CHECK IN</span><input aria-label="Check-in date" type="date" value={arrival} onChange={(event) => setArrival(event.target.value)} /></label>
          <label className="booking-field"><span>CHECK OUT</span><input aria-label="Check-out date" type="date" value={departure} onChange={(event) => setDeparture(event.target.value)} /></label>
          <label className="booking-field booking-guests"><span>GUESTS</span><select aria-label="Number of guests" value={guests} onChange={(event) => setGuests(event.target.value)}><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6 guests</option></select></label>
          <button className="button button-dark" type="submit">Check availability <span aria-hidden="true">↗</span></button>
        </form>
      </section>

      <section className="story section-pad" id="story">
        <div className="section-kicker"><span>01 / A SENSE OF PLACE</span><span>OTONGLO, KISUMU</span></div>
        <div className="story-grid">
          <div className="story-heading"><p className="eyebrow">THE GRAND ALTON RESORT</p><h2>A little closer<br />to <em>what matters.</em></h2></div>
          <div className="story-copy"><p className="lead">Just five minutes from the airport, a different pace is waiting.</p><p>At The Grand Alton, the warmth of Kenyan hospitality comes naturally. Come for a restful night, a table shared with friends, or a celebration worth remembering. Stay for the feeling of being looked after.</p><a className="text-link" href="https://maps.google.com/?q=The+Grand+Alton+Resort+Kisumu" target="_blank" rel="noreferrer">Find us in Kisumu <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="story-visuals">
          <figure className="story-photo story-photo-main"><Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85" alt="Resort grounds surrounded by lush tropical greenery" fill sizes="(max-width: 640px) 65vw, 60vw" /><figcaption>YOUR OWN QUIET CORNER</figcaption></figure>
          <figure className="story-photo story-photo-detail"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" alt="A welcoming lounge with natural textures and warm light" fill sizes="(max-width: 640px) 40vw, 30vw" /></figure>
          <div className="story-note"><span className="note-mark">GA</span><p>Thoughtfully hosted.<br /><em>Wonderfully Kisumu.</em></p><span className="note-rule" /></div>
        </div>
        <div className="stat-row"><div><strong>5 <small>min</small></strong><span>from Kisumu International Airport</span></div><div><strong>11<small>+</small></strong><span>event spaces to make your own</span></div><div><strong>2024</strong><span>welcoming guests since</span></div><a className="text-link" href="tel:+254794000020">Talk to our team <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="stay-section section-pad" id="stay">
        <div className="section-kicker"><span>02 / REST EASY</span><span>ROOMS &amp; SUITES</span></div>
        <div className="section-heading-row"><div><p className="eyebrow">YOUR ROOM IS READY</p><h2>Stay a little <em>longer.</em></h2></div><p>Settle into a space that feels considered, comfortable, and entirely your own.</p></div>
        <div className="room-grid">{rooms.map((room, index) => <article className="room-card" key={room.name}><a className="room-image" href={getRoomBookingLink(room.name)} target="_blank" rel="noreferrer" aria-label={`Book the ${room.name} on WhatsApp`}><Image src={room.image} alt={room.alt} fill sizes="(max-width: 640px) 100vw, 33vw" /><span className="image-index">0{index + 1}</span><span className="image-arrow" aria-hidden="true">↗</span></a><div className="room-card-content"><div className="room-title-row"><h3>{room.name}</h3><span>{room.size}</span></div><p>{room.detail}</p><div className="room-bottom"><span>{room.bed}</span><a href={getRoomBookingLink(room.name)} target="_blank" rel="noreferrer" aria-label={`Book the ${room.name} on WhatsApp`}>ENQUIRE <span aria-hidden="true">↗</span></a></div></div></article>)}</div>
        <div className="stay-footnote"><span>Every stay comes with the little things that make a difference.</span><span>For rates and availability, speak with our team directly.</span></div>
      </section>

      <section className="experience-section section-pad" id="experiences">
        <div className="section-kicker"><span>03 / MORE TO EXPERIENCE</span><span>MADE FOR YOUR MOMENT</span></div>
        <div className="experience-heading"><p className="eyebrow">A STAY, YOUR WAY</p><h2>Good days<br />come <em>naturally.</em></h2><p>From the first coffee to the last toast, find your own rhythm at Grand Alton.</p></div>
        <div className="experience-grid">{experiences.map((experience) => <article className="experience-card" key={experience.number}><a href={experience.category === "DINING" ? "tel:+254794000020" : "mailto:thegrandaltonresort@gmail.com"} aria-label={`Enquire about ${experience.category.toLowerCase()}`} className="experience-image"><Image src={experience.image} alt={experience.alt} fill sizes="(max-width: 640px) 100vw, 50vw" /><span>{experience.number}</span></a><div className="experience-caption"><div><span className="eyebrow">{experience.category}</span><h3>{experience.title}</h3><p>{experience.text}</p></div><a className="round-link" href={experience.category === "DINING" ? "tel:+254794000020" : "mailto:thegrandaltonresort@gmail.com"} aria-label={`Contact us about ${experience.category.toLowerCase()}`}>↗</a></div></article>)}</div>
      </section>

      <section className="gather-section" id="gather"><div className="gather-image" role="img" aria-label="An outdoor resort gathering beneath the trees" /><div className="gather-shade" /><div className="gather-content"><p className="eyebrow eyebrow-light">BRING EVERYONE TOGETHER</p><h2>Some moments<br />deserve <em>a little more.</em></h2><p>With 11+ event spaces and a team who cares about the details, we make room for the moments you will talk about for years.</p><a className="button button-light" href="mailto:thegrandaltonresort@gmail.com?subject=Event%20enquiry">Let&apos;s plan something <span aria-hidden="true">↗</span></a></div><span className="gather-caption">CELEBRATIONS · MEETINGS · THE IN-BETWEEN</span></section>

      <footer className="site-footer">
        <div className="footer-top"><div><a className="brand footer-brand" href="#home" aria-label="The Grand Alton Resort home"><Image className="brand-logo" src="/grand-alton-logo.png" alt="The Grand Alton Resort — Grand moments start here" width={1334} height={768} /></a><p className="footer-tagline">A warm welcome.<br /><em>A place to pause.</em></p></div><div className="footer-column"><span className="eyebrow">COME FIND US</span><p>Otonglo, behind Kodiaga Prison<br />Kisumu, Western Kenya</p><a href="https://maps.google.com/?q=The+Grand+Alton+Resort+Kisumu" target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a></div><div className="footer-column"><span className="eyebrow">SAY HELLO</span><a href="tel:+254794000020">+254 794 000 020</a><a href="mailto:thegrandaltonresort@gmail.com">thegrandaltonresort@gmail.com</a><a href={bookingLink} target="_blank" rel="noreferrer">WHATSAPP ↗</a></div><a className="footer-book" href={bookingLink} target="_blank" rel="noreferrer">Your Kisumu<br /><em>stay starts here.</em><span aria-hidden="true">↗</span></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} THE GRAND ALTON RESORT</span><span>MADE WITH CARE IN KISUMU, KENYA</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
