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
          <p className="hero-subtitle">Alt innen betong</p>

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

      {/* Services section */}
      <section className="services services-teaser">
        <div className="container">
          <h2 className="section-title">Våre hovedtjenester</h2>

          <div className="teaser-grid">
            <div className="teaser-card">
              <Image src="/img/garage.jpg" alt="Garasjeplate" fill className="teaser-img" />
              <div className="teaser-overlay">
                <h3>Garasjeplater & oppkjørsler</h3>
                  <Link href="/tjenester" className="teaser-link">Les mer</Link>
              </div>
            </div>

            <div className="teaser-card">
              <Image src="/img/foundation.jpg" alt="Grunnmur" fill className="teaser-img" />
              <div className="teaser-overlay">
                <h3>Grunnmurer & fundamenter</h3>
                  <Link href="/tjenester" className="teaser-link">Les mer</Link>
              </div>
            </div>

            <div className="teaser-card">
              <Image src="/img/wall.jpg" alt="Støttemur" fill className="teaser-img" />
              <div className="teaser-overlay">
                <h3>Støttemur</h3>
                  <Link href="/tjenester" className="teaser-link">Les mer</Link>
              </div>
            </div>

            <div className="teaser-card">
              <Image src="/img/floor.jpg" alt="Betongulv" fill className="teaser-img" />
              <div className="teaser-overlay">
                <h3>Betonggulv og reparasjoner</h3>
                  <Link href="/tjenester" className="teaser-link">Les mer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Trenger du betongarbeid?</h2>
          <p className="cta-text">
            Ta kontakt for uforpliktende prat og pristilbud – vi kommer gjerne på befaring.
          </p>
          <a href="tel:+4740306758" className="btn btn-primary cta-big">
            Ring nå: 40 30 67 58
          </a>
        </div>
      </section>
    </>
  );
}