import { people } from "@/lib/content";
import { IPhone, IWhatsapp } from "./ui";

/** Acțiuni de contact mereu la îndemână pe telefon. */
export default function MobileBar() {
  const { nicolae } = people;
  return (
    <div className="mobile-bar">
      <a className="btn btn-wa" href={nicolae.wa} target="_blank" rel="noopener">
        <IWhatsapp size={18} /> WhatsApp
      </a>
      <a className="btn btn-ghost" href={nicolae.tel}>
        <IPhone size={18} /> Sună acum
      </a>
    </div>
  );
}
