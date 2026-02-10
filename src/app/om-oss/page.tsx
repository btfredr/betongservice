import Image from "next/image";
import Link from "next/link";


export default function OmOss() {
    return (
        <section className="section about-section">
            <div className="container">
                <h1 className="section-title">Om Haugen Betongservice</h1>

                <div className="about-content">
                    <div className="about-image-wrapper">
                        <Image
                        src="/img/omoss.jpg"
                        alt="På jobb"
                        width={600}
                        height={400}
                        className="about-image"
                        priority
                        />
                    </div>

                    <div className="about-text">
                        <p className="about-intro">
                            Haugen Betongservice er et enkeltmannsforetak startet i 2023 av Joakim Haugen, med over 10 års erfaring fra betongbransjen. 
                            Vi holder til i Holmestrand og dekker hele Vestfold-området, med fokus på kvalitetsarbeid og personlig service.
                        </p>

                        <h2 className="about-subtitle">Vår erfaring</h2>
                        <p>
                            Med bakgrunn fra større byggeprosjekter og mindre oppdrag, har vi ekspertise innen støping, armering og reparasjoner. 
                            Vi bruker kun kvalitetsmaterialer fra kjente leverandører for å sikre lang holdbarhet.
                        </p>

                        <h2 className="about-subtitle">Hvorfor velge oss?</h2>
                        <ul className="about-list">
                            <li>Lokalkunnskap – kjenner terreng og værforhold i Vestfold</li>
                            <li>Personlig oppfølging – ingen mellomledd, direkte kontakt</li>
                            <li>Punktlighet og ryddighet – vi holder avtaler og rydder etter oss</li>
                            <li>Konkurransedyktige priser – som enkeltmannsforetak holder vi kostnadene lave</li>
                            <li>Sertifisert – HMS-kort, betongkurs og fallsikring</li>
                        </ul>

                        <div className="about-cta">
                            <Link href="/kontakt" className="btn btn-primary">
                                Ta kontakt for mer info
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}