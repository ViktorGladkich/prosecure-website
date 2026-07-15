"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <>
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
                  Angaben gemäß § 5 DDG
                </h2>
                <p className="font-display text-xl text-white font-light">
                  {siteConfig.legalName}
                </p>
                <p className="mt-2">
                  {siteConfig.address.streetAddress}
                  <br />
                  {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.addressLocality}
                  <br />
                  Deutschland
                </p>
                <p className="mt-4">
                  Inhaber: <span className="text-white">{siteConfig.owner}</span>
                  <br />
                  Rechtsform: Einzelunternehmen
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Kontakt
                </h2>
                <p>
                  Telefon:{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-[#7CB3D1] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#7CB3D1] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Steuernummer
                </h2>
                <p>
                  Steuernummer:
                  <br />
                  <span className="font-mono text-white">
                    {siteConfig.taxNumber}
                  </span>
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Verantwortlich für den Inhalt
                </h2>
                <p>
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
                  <br />
                  <span className="text-white">{siteConfig.owner}</span>
                  <br />
                  {siteConfig.address.streetAddress},{" "}
                  {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.addressLocality}
                </p>
              </div>
            </div>

            {/* Column 2: Legal permissions */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Berufsrechtliche Angaben
                </h2>
                <p>
                  Gewerbe: Bewachungsgewerbe
                  <br />
                  Erlaubnis nach § 34a Abs. 1 der Gewerbeordnung (GewO)
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Zuständige Erlaubnis- und Aufsichtsbehörde
                </h2>
                <p className="text-white font-medium mb-2">
                  {siteConfig.authority}
                </p>
                <p>
                  Schloßhof 2/4
                  <br />
                  01796 Pirna
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-white font-medium uppercase tracking-wider mb-3">
                  Qualifikation
                </h2>
                <p>
                  Sicherheitsdienstleister mit erfolgreich abgelegter{" "}
                  <strong className="text-[#7CB3D1] font-normal">
                    {siteConfig.certifications}
                  </strong>{" "}
                  GewO (Industrie- und Handelskammer).
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer / Additional Legal Texts */}
          <div className="border-t border-white/10 mt-16 pt-12 space-y-8 font-sans text-xs text-white/40 leading-relaxed">
            <div>
              <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
                Verbraucherstreitbeilegung
              </h3>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
                Haftung für Inhalte
              </h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Verpflichtungen
                zur Entfernung oder Sperrung der Nutzung von Informationen
                nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm text-white/60 font-medium uppercase tracking-wider mb-2">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
