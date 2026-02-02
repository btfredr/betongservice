import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <Link href="/" className="footer-logo">
                        Haugen Betongservice
                    </Link>
                    <p className="footer-desc">
                        Lokalt enkeltmannsforetak i Holmestrand og Vestfold. 
                        Alt innen betong – garasjeplater, grunnmurer, støttemurer og mer.
                    </p>
                </div>

                <div className="footer-col">
                    <h3 className="footer-heading">Linker</h3>
                    <ul className="footer-links">
                        <li>
                            <Link href="/tjenester">Tjenester</Link>
                        </li>
                        <li>
                            <Link href="/referanser">Referanser</Link>
                        </li>
                        <li>
                            <Link href="/om-oss">Om oss</Link>
                        </li>
                        <li>
                            <Link href="/Kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-heading">Kontakt</h3>
                    <ul className="footer-contact">
                    <li>
                        <a href="tel:+4740306758">
                        Tlf: 40 30 67 58
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kontakt@haugenbetongservice.no">
                        E-post: joakim@haugenbetongservice.no
                        </a>
                    </li>
                    <li>Område: Holmestrand og omegn</li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Haugen Betongservice – Alt innen betong
                    </p>
                    <p>
                        <Link href="/personvern" className="footer-link">
                        Personvernerklæring
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}