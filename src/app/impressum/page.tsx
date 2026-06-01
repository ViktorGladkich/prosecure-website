"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-black text-white py-32 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase font-mono text-xs tracking-widest mb-16"
        >
          <ArrowLeft size={14} />
          Zurück zur Startseite
        </Link>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#7CB3D1] block mb-4">
            [ Gesetzliche Pflichtangaben ]
          </span>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-none tracking-tight">
            Impressum
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-white/70 leading-relaxed text-base">
          {/* Column 1: Base Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="font-display text-xl text-white font-light">
                {siteConfig.legalName}
              </p>
              <p className="mt-2">
                {siteConfig.address.streetAddress}<br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Kontakt
              </h2>
              <p>
                Telefon: <a href={`tel:${siteConfig.phone}`} className="hover:text-[#7CB3D1] transition-colors">{siteConfig.phone}</a><br />
                E-Mail: <a href={`mailto:${siteConfig.email}`} className="hover:text-[#7CB3D1] transition-colors">{siteConfig.email}</a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Steuernummer
              </h2>
              <p>
                Steuernummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="font-mono text-white">{siteConfig.taxNumber}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Legal permissions & Insurance */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Aufsichtsbehörde für das Bewachungsgewerbe
              </h2>
              <p className="text-white font-medium mb-2">{siteConfig.authority}</p>
              <p className="text-sm space-y-1">
                <span className="block">Erlaubnis nach § 34a GewO erteilt am: <strong className="text-white font-normal">{siteConfig.authorityDate}</strong></span>
                <span className="block">Aktenzeichen: <strong className="text-white font-mono font-normal">{siteConfig.authorityFileNumber}</strong></span>
                <span className="block">Bewacher-ID (Bewachungsregister): <strong className="text-white font-mono font-normal">{siteConfig.guardId}</strong></span>
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Berufshaftpflichtversicherung
              </h2>
              <p className="text-white font-medium mb-1">{siteConfig.insurance}</p>
              <p className="text-sm">
                Räumlicher Geltungsbereich: Bundesrepublik Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                Qualifikation & Zertifizierungen
              </h2>
              <p>
                Zugelassener Sicherheitsdienstleister mit erfolgreicher <strong className="text-[#7CB3D1] font-normal">{siteConfig.certifications}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer / Additional Legal Texts */}
        <div className="border-t border-white/10 mt-16 pt-12 space-y-8 font-sans text-xs text-white/40 leading-relaxed">
          <div>
            <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
              Streitschlichtung
            </h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-[#7CB3D1] transition-colors ml-1">https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
              Haftung für Inhalte und Links
            </h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. 
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
