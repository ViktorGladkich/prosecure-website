"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";

export default function Datenschutz() {
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
              [ DSGVO & TDDDG Richtlinien ]
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
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h3 className="font-display text-lg text-white font-normal mt-6">
                Datenerfassung auf dieser Website
              </h3>
              <p>
                <strong>
                  Wer ist verantwortlich für die Datenerfassung auf dieser
                  Website?
                </strong>
                <br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                2. Hosting
              </h2>
              <h3 className="font-display text-lg text-white font-normal mt-6">
                Externes Hosting (Vercel)
              </h3>
              <p>
                Diese Website wird bei dem externen Dienstleister Vercel Inc.,
                340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet (Hoster). 
                Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Websitezugriffe und sonstige Daten, 
                die über eine Website generiert werden, handeln. Vercel ist nach dem 
                EU-US Data Privacy Framework (DPF) zertifiziert, was ein angemessenes 
                Datenschutzniveau nach aktuellen Standards (Stand 2026) garantiert.
              </p>
              <p>
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO und § 25 Abs. 1 TDDDG
                (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz). Die
                Einwilligung ist jederzeit widerrufbar.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                3. Allgemeine Hinweise und Pflichtinformationen
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
                  {siteConfig.address.streetAddress}
                  <br />
                  {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.addressLocality}
                  <br />
                  Deutschland
                </p>
                <p className="pt-4 text-sm">
                  Telefon:{" "}
                  <span className="text-white font-mono">
                    {siteConfig.phone}
                  </span>
                  <br />
                  E-Mail: <span className="text-white">{siteConfig.email}</span>
                </p>
              </div>
              <p className="mt-6">
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Speicherdauer
              </h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung
              </h3>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten
                erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
                Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
                oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
                Device-Fingerprinting) eingewilligt haben, erfolgt die
                Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
                Daten zur Vertragserfüllung oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
                verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
                rechtlichen Verpflichtung erforderlich sind auf Grundlage von
                Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
                auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
                lit. f DSGVO erfolgen.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres üblichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Auskunft, Löschung und Berichtigung
              </h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen: Wenn Sie die
                Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                bestreiten, wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtmäßig geschah/geschieht, wenn Sie die Löschung Ihrer
                personenbezogenen Daten ablehnen und stattdessen die
                Einschränkung der Nutzung verlangen, oder wenn wir Ihre Daten
                nicht mehr benötigen, Sie diese jedoch zur Ausübung,
                Verteidigung oder Geltendmachung von Rechtsansprüchen
                benötigen.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Datenübertragbarkeit
              </h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen
                Verantwortlichen verlangen, erfolgt dies nur, soweit es
                technisch machbar ist.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Widerspruchsrecht gegen die Datenerhebung (Art. 21 DSGVO)
              </h3>
              <p>
                <strong className="text-white">
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1
                  lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht,
                  aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                  gegen die Verarbeitung Ihrer personenbezogenen Daten
                  Widerspruch einzulegen. Die jeweilige Rechtsgrundlage, auf
                  denen eine Verarbeitung beruht, entnehmen Sie dieser
                  Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden
                  wir Ihre betroffenen personenbezogenen Daten nicht mehr
                  verarbeiten, es sei denn, wir können zwingende schutzwürdige
                  Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                  Rechte und Freiheiten überwiegen oder die Verarbeitung dient
                  der Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen.
                </strong>
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
                die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von {"\u201Ehttp://\u201C"} auf
                {"\u201Ehttps://\u201C"} wechselt und an dem Schloss-Symbol in Ihrer
                Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
                ist, können die Daten, die Sie an uns übermitteln, nicht von
                Dritten mitgelesen werden.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-display text-lg text-white font-normal mt-6">
                Server-Log-Dateien
              </h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Dateien, die Ihr
                Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-white/70">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
                hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website – hierzu müssen
                die Server-Log-Files erfasst werden.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Kontaktformular &amp; E-Mail-Kontakt
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen
                lassen, werden Ihre Angaben inklusive der von Ihnen dort
                angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
                den Fall von Anschlussfragen bei uns gespeichert. Für die
                Abwicklung der Formular- und E-Mail-Anfragen nutzen wir den 
                Dienstleister <strong>Resend, Inc.</strong> (USA). Ihre Daten 
                werden dabei über eine sichere Verbindung an Resend übertragen. 
                Die Übermittlung in die USA erfolgt rechtmäßig auf Basis der 
                Standardvertragsklauseln der EU-Kommission bzw. eines 
                Angemessenheitsbeschlusses (DPF).
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1
                lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist
                jederzeit widerrufbar.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                5. Auftragsverarbeitung
              </h2>
              <p>
                Wir haben mit unseren Dienstleistern (Vercel Inc. für das
                Hosting und Resend, Inc. für den E-Mail-Versand) Verträge zur
                Auftragsverarbeitung (AVV) abgeschlossen. Hierbei handelt es
                sich um Verträge, die durch die Datenschutzgrundverordnung
                (DSGVO) vorgeschrieben sind und gewährleisten, dass diese die
                personenbezogenen Daten unserer Websitebesucher nur nach
                unseren Weisungen und unter Einhaltung der DSGVO verarbeiten.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
