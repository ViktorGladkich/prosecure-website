"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function Datenschutz() {
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
            [ DSGVO Richtlinien ]
          </span>
          <h1 className="font-display font-light text-5xl md:text-7xl leading-none tracking-tight">
            Datenschutzerklärung
          </h1>
        </div>

        {/* Content Section */}
        <div className="space-y-12 font-sans text-white/70 leading-relaxed text-base">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-2 mt-4 max-w-lg">
              <p className="font-display text-lg text-white font-medium uppercase tracking-wider mb-2">
                Verantwortliche Stelle
              </p>
              <p className="font-display text-xl text-white font-light">
                {siteConfig.legalName}
              </p>
              <p>
                {siteConfig.address.streetAddress}<br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}<br />
                Deutschland
              </p>
              <p className="pt-4 text-sm">
                Telefon: <span className="text-white font-mono">{siteConfig.phone}</span><br />
                E-Mail: <span className="text-white">{siteConfig.email}</span>
              </p>
            </div>
            <p className="mt-6">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres üblichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Recht auf Datenübertragbarkeit
            </h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-display text-lg text-white font-normal mt-6">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
