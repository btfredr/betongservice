import Link from "next/link";

const services = [
  {
    title: "Garasjeplater & oppkjørsler",
    description:
      "Ferdig armerte og støpte plater med riktig fall, drenering og slitesterk overflate. Passer perfekt til eneboliger, garasjer og næringsbygg. Vi håndterer både små og store arealer.",
    image: "/img/garage.jpg",
  },
  {
    title: "Grunnmurer & fundamenter",
    description:
      "Solide fundamenter og grunnmurer til bolig, hytte, tilbygg eller garasje. Inkluderer armering, forskaling, isolasjon og nødvendig drenering for lang holdbarhet.",
    image: "/img/foundation.jpg",
  },
  {
    title: "Støttemurer",
    description:
      "Estetiske og stabile støttemurer i L-mur, betongelementer eller støpt løsning. Både funksjonelle og pene – vi tilpasser høyde, materialer og finish etter terreng og ønske.",
    image: "/img/wall.jpg",
  },
  {
    title: "Betonggulv & reparasjoner",
    description:
      "Nye betonggulv i garasje, bod, verksted eller industri. Vi fikser også sprekker, utbedringer og mindre reparasjoner på eksisterende betongoverflater.",
    image: "/img/floor.jpg",
  },
  // Legg til flere om du vil – f.eks. terrasseplater, armering alene, osv.
];

export default function Tjenester() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Våre tjenester</h1>
          
          <p className="section-intro">
            Haugen Betongservice leverer solid og pålitelig betongarbeid i Horten og Vestfold. 
            Vi tar oss av alt fra små oppdrag til større prosjekter – alltid med fokus på kvalitet, presisjon og ryddig utførelse.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-img-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-img"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <Link href="/kontakt" className="btn btn-primary service-cta">
                    Få uforpliktende tilbud
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}