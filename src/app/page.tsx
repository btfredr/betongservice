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
          <p className="hero-subtitle">Alt innen betong – Horten og omegn</p>

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
    </>
  );
}