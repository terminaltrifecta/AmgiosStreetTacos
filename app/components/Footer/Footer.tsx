import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { Instagram, Facebook } from "iconoir-react/regular";

function Footer() {
  // Helper function to create maps links
  const mapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const link = "no-underline transition text-amigosblack hover:text-amigosred";
  return (
    <div className="p-4 text-xs bg-amigoswhite gap-4">
      <div className="grid md:grid-cols-4 md:justify-items-center gap-4">
        {/* Locations */}
        <div className="footer-section">
          <h5 className="font-bold">Locations</h5>
          <div className="flex flex-col">
            <a
              href={mapsUrl("5823 17 Mile Rd, Sterling Heights, MI 48310")}
              className={link}
            >
              5823 17 Mile Rd
              <br />
              Sterling Heights, MI 48310
            </a>
            <a
              href={mapsUrl("13245 14 Mile Rd, Sterling Heights, MI 48312")}
              className={link}
            >
              13245 14 Mile Rd
              <br />
              Sterling Heights, MI 48312
            </a>
            <a
              href={mapsUrl(
                "22428 Greater Mack Ave, St Clair Shores, MI 48080",
              )}
              className={link}
            >
              22428 Greater Mack Ave
              <br />
              St Clair Shores, MI 48080
            </a>
            <a
              href={mapsUrl("14156 Eureka Rd, Southgate, MI 48195")}
              className={link}
            >
              14156 Eureka Rd
              <br />
              Southgate, MI 48195
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="footer-section">
          <h5 className="font-bold">Hours</h5>
          <div className="footer-content">
            <p>
              Monday - Saturday
              <br />
              9AM - 10PM
            </p>
            <p>
              Sunday
              <br />
              9AM - 8PM
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h5 className="font-bold">Contact</h5>
          <div className="flex flex-col">
            <Link href="tel:3134299090" className={link}>
              313-429-9090 <span>(17 Mile)</span>
            </Link>
            <Link href="tel:5868384311" className={link}>
              586-838-4311 <span>(14 Mile)</span>
            </Link>
            <Link href="tel:5862187247" className={link}>
              586-218-7247 <span>(St. Clair)</span>
            </Link>
            <Link href="tel:5862187247" className={link}>
              734-225-7222 <span>(Southgate)</span>
            </Link>
          </div>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h5 className="font-bold">Follow Us</h5>
          <div className="flex md:justify-center gap-4">
            <a href="https://facebook.com/" className={link}>
              <Facebook height={22} width={22} />
            </a>
            <a href="https://instagram.com/" className={link}>
              <Instagram height={22} width={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid justify-items-center gap-2">
        <div>©{new Date().getFullYear()} Amigos Street Tacos</div>
        <a target="_blank" href="https://zorgotech.com" className={link}>Powered by Zorgo.</a>
        <div className="flex gap-x-4">
          <Link className={link} href="/terms">Terms</Link>
          <span className="divider">|</span>
          <Link className={link} href="/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
