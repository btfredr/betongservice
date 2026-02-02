import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/img/hero.webp"   // ← bytt til ditt faktiske bilde hvis navnet er feil
          alt="Profesjonell betongstøping i Vestfold"
          fill
          className="hero-bg"
          priority
        />
        <div className="hero-content">
          <h1 className="hero-title">Haugen Betongservice</h1>
          <p className="hero-subtitle">Alt innen betong – Vestfold og omegn</p>

          <div className="cta-group">
            <a href="tel:+4740306758" className="btn btn-primary">
              Ring for tilbud
            </a>
            <Link href="/kontakt" className="btn btn-outline">
              Send melding
            </Link>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="intro-section">
        <div className="container">
          <h2 className="intro-title">Lokalt, pålitelig og kvalitetsbevisst</h2>
          <p className="intro-text">
            Haugen Betongservice er et enkeltmannsforetak med base i Holmestrand. Med mange års erfaring innen betongarbeid leverer vi solide løsninger til både private og små næringskunder i Vestfold. 
            Vi tar oss av alt fra garasjeplater og grunnmurer til støttemurer og reparasjoner – alltid med fokus på holdbarhet, ryddighet og fornøyde kunder.
          </p>
        </div>
      </section>

      
    </>
  );
}