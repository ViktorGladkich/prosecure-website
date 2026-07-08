"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function AGB() {
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
            [ Vertragsbedingungen ]
          </span>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-none tracking-tight">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-12 font-sans text-white/70 leading-relaxed text-base">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              1. Geltungsbereich und Allgemeines
            </h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend
              &quot;AGB&quot;) gelten für alle Dienstleistungen, Verträge und
              Rechtsgeschäfte zwischen{" "}
              <strong className="text-white font-normal">
                {siteConfig.legalName}
              </strong>{" "}
              (nachfolgend &quot;ProSecure&quot; genannt) und ihren
              Vertragspartnern (nachfolgend &quot;Auftraggeber&quot; genannt).
            </p>
            <p>
              Abweichende, entgegenstehende oder ergänzende Allgemeine
              Geschäftsbedingungen des Auftraggebers werden nur dann und
              insoweit Vertragsbestandteil, als ProSecure ihrer Geltung
              ausdrücklich schriftlich zugestimmt hat.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              2. Vertragsabschluss
            </h2>
            <p>
              Die Angebote von ProSecure sind freibleibend und unverbindlich.
              Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung
              durch ProSecure oder durch die tatsächliche Aufnahme der
              Dienstleistung zustande.
            </p>
            <p>
              Soweit nicht ausdrücklich anders vereinbart, ist der Umfang der
              geschuldeten Dienstleistungen auf den in der schriftlichen
              Vereinbarung festgelegten Rahmen beschränkt.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              3. Leistungserbringung und Pflichten
            </h2>
            <p>
              ProSecure verpflichtet sich, die vertraglich vereinbarten
              Dienstleistungen (z.B. Objektschutz, Baustellenbewachung,
              Veranstaltungsschutz, etc.) nach den Bestimmungen des § 34a der
              Gewerbeordnung (GewO) und den geltenden gesetzlichen Vorschriften
              sorgfältig und gewissenhaft auszuführen.
            </p>
            <p>
              Die Auswahl des eingesetzten Personals sowie das Weisungsrecht
              liegen ausschließlich bei ProSecure. Der Auftraggeber ist nicht
              berechtigt, den Mitarbeitern von ProSecure direkte Weisungen zu
              erteilen, es sei denn, dies wurde im Einzelfall ausdrücklich
              vereinbart.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              4. Preise und Zahlungsbedingungen
            </h2>
            <p>
              Alle Preise verstehen sich in Euro zuzüglich der jeweils
              gesetzlich geltenden Umsatzsteuer, sofern diese anfällt. Die
              Abrechnung erfolgt auf Basis der vertraglich vereinbarten
              Stundensätze bzw. Pauschalen.
            </p>
            <p>
              Rechnungen von ProSecure sind innerhalb von 14 Tagen nach
              Rechnungsdatum ohne Abzug zur Zahlung fällig, es sei denn, es
              wurden abweichende Zahlungsfristen schriftlich vereinbart. Bei
              Zahlungsverzug gelten die gesetzlichen Verzugsregeln.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              5. Haftung und Versicherung
            </h2>
            <p>
              ProSecure haftet für Schäden, die nachweislich durch grob
              fahrlässiges oder vorsätzliches Verhalten ihres eingesetzten
              Personals bei der Ausübung des Dienstes verursacht wurden, im
              Rahmen der gesetzlichen Bestimmungen.
            </p>
            <p>
              Zur Absicherung eventueller Haftpflichtansprüche unterhält
              ProSecure eine Betriebshaftpflichtversicherung bei der{" "}
              <strong className="text-white font-normal">
                {siteConfig.insurance}
              </strong>{" "}
              mit den gesetzlich vorgeschriebenen Deckungssummen für das
              Bewachungsgewerbe. Eine weitergehende Haftung ist ausgeschlossen.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              6. Schlussbestimmungen
            </h2>
            <p>
              Änderungen, Ergänzungen oder die Aufhebung dieses Vertrages
              bedürfen der Schriftform. Dies gilt auch für die Änderung dieses
              Schriftformerfordernisses selbst.
            </p>
            <p>
              Erfüllungsort und Gerichtsstand für alle Streitigkeiten aus oder
              im Zusammenhang mit diesem Vertrag ist, soweit gesetzlich
              zulässig, der Geschäftssitz von ProSecure (
              <strong className="text-white font-normal">
                {siteConfig.address.addressLocality}
              </strong>
              ). Es gilt das Recht der Bundesrepublik Deutschland.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
