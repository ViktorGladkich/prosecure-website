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
              [ DSGVO & TDDDG ]
            </span>
            <h1 className="font-display font-light text-5xl md:text-7xl leading-none tracking-tight">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 font-mono text-xs text-white/40 uppercase tracking-widest">
              Stand: Juli 2026
            </p>
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
                Informationen zum Thema Datenschutz entnehmen Sie der unter
                diesem Abschnitt aufgeführten Datenschutzerklärung.
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
                „Hinweis zur verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>
              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
                <br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie in unser Kontaktformular eingeben. Andere Daten werden
                automatisch beim Besuch der Website durch unsere IT-Systeme
                erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie diese Website betreten.
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
                <br />
                Die automatisch erfassten technischen Daten dienen
                ausschließlich der fehlerfreien und sicheren Bereitstellung der
                Website. Die Daten aus dem Kontaktformular nutzen wir
                ausschließlich zur Bearbeitung Ihrer Anfrage.{" "}
                <strong className="text-white">
                  Diese Website setzt keine Analyse-, Tracking- oder
                  Marketing-Tools ein und verwendet keine Cookies, die einer
                  Einwilligung bedürfen.
                </strong>
              </p>
              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                <br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, können Sie diese Einwilligung jederzeit für die
                Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                Sie sich jederzeit an uns wenden.
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
                340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend
                „Vercel“), gehostet. Die personenbezogenen Daten, die auf
                dieser Website erfasst werden, werden auf den Servern von
                Vercel gespeichert. Hierbei kann es sich v.&nbsp;a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>
              <p>
                Der Einsatz von Vercel erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Vercel ist nach dem EU-US Data Privacy Framework (DPF)
                zertifiziert. Das DPF ist eine Übereinkunft zwischen der
                Europäischen Union und den USA, die die Einhaltung europäischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gewährleisten soll (Angemessenheitsbeschluss der EU-Kommission
                gemäß Art. 45 DSGVO). Ergänzend haben wir mit Vercel einen
                Vertrag über Auftragsverarbeitung (Art. 28 DSGVO)
                abgeschlossen, der die Standardvertragsklauseln der
                EU-Kommission umfasst.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Datenschutz
              </h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften — insbesondere der
                Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz
                (BDSG) und dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz
                (TDDDG) — sowie dieser Datenschutzerklärung.
              </p>

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
                  Inhaber: {siteConfig.owner}
                  <br />
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
                und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Speicherdauer
              </h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung auf dieser Website
              </h3>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten
                erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist
                jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung
                oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
                verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit.
                b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                zur Erfüllung einer rechtlichen Verpflichtung erforderlich
                sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                Datenverarbeitung kann ferner auf Grundlage unseres
                berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                erfolgen. Über die jeweils im Einzelfall einschlägigen
                Rechtsgrundlagen wird in den folgenden Absätzen dieser
                Datenschutzerklärung informiert.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Hinweis zur Datenweitergabe in die USA und sonstige
                Drittstaaten
              </h3>
              <p>
                Wir nutzen Dienste von Unternehmen mit Sitz in den USA (Vercel
                Inc. für das Hosting, Resend Inc. für den Versand von
                Formularanfragen). Wenn diese Dienste aktiv sind, können Ihre
                personenbezogenen Daten in die USA übertragen werden. Die
                Übermittlung erfolgt auf Grundlage eines
                Angemessenheitsbeschlusses der EU-Kommission (EU-US Data
                Privacy Framework, Art. 45 DSGVO), soweit der jeweilige
                Anbieter danach zertifiziert ist, sowie ergänzend auf Grundlage
                der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2
                lit. c DSGVO). Wir weisen darauf hin, dass in den USA kein mit
                der EU vollständig vergleichbares Datenschutzniveau garantiert
                werden kann und US-Behörden unter bestimmten Voraussetzungen
                Zugriff auf Daten nehmen können.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Hierzu genügt eine
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der
                bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                (Art. 21 DSGVO)
              </h3>
              <p>
                <strong className="text-white">
                  Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1
                  lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht,
                  aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                  gegen die Verarbeitung Ihrer personenbezogenen Daten
                  Widerspruch einzulegen. Die jeweilige Rechtsgrundlage, auf
                  der eine Verarbeitung beruht, entnehmen Sie dieser
                  Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden
                  wir Ihre betroffenen personenbezogenen Daten nicht mehr
                  verarbeiten, es sei denn, wir können zwingende schutzwürdige
                  Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                  Rechte und Freiheiten überwiegen, oder die Verarbeitung
                  dient der Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                </strong>
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in
                dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe. Die
                für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p>
                Die Sächsische Datenschutz- und Transparenzbeauftragte
                <br />
                Devrientstraße 5
                <br />
                01067 Dresden
                <br />
                <a
                  href="https://www.datenschutz.sachsen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#7CB3D1] underline underline-offset-2 transition-colors"
                >
                  www.datenschutz.sachsen.de
                </a>
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Datenübertragbarkeit
              </h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Auskunft, Berichtigung und Löschung
              </h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung (Art. 15 DSGVO)
                und ggf. ein Recht auf Berichtigung (Art. 16 DSGVO) oder
                Löschung (Art. 17 DSGVO) dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit an uns wenden.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen (Art. 18 DSGVO). Hierzu
                können Sie sich jederzeit an uns wenden. Das Recht auf
                Einschränkung der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 text-white/70">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der
                  Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                  haben Sie das Recht, die Einschränkung der Verarbeitung zu
                  verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                  die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                  von Rechtsansprüchen benötigen, haben Sie das Recht, statt
                  der Löschung die Einschränkung der Verarbeitung zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                  eingelegt haben, muss eine Abwägung zwischen Ihren und
                  unseren Interessen vorgenommen werden. Solange noch nicht
                  feststeht, wessen Interessen überwiegen, haben Sie das Recht,
                  die Einschränkung der Verarbeitung zu verlangen.
                </li>
              </ul>
              <p className="mt-4">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten — von ihrer Speicherung
                abgesehen — nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet
                werden.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                SSL- bzw. TLS-Verschlüsselung
              </h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen,
                die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                {" „http://“ "} auf {"„https://“"} wechselt
                und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL-
                bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die
                Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Keine automatisierte Entscheidungsfindung
              </h3>
              <p>
                Eine automatisierte Entscheidungsfindung einschließlich
                Profiling gemäß Art. 22 DSGVO findet auf dieser Website nicht
                statt.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                4. Datenerfassung auf dieser Website
              </h2>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Cookies
              </h3>
              <p>
                Diese Website verwendet keine Cookies zu Analyse-, Tracking-
                oder Marketingzwecken. Es werden keine Dienste eingesetzt, die
                einer Einwilligung nach § 25 Abs. 1 TDDDG bedürfen. Aus diesem
                Grund verzichten wir auf ein Cookie-Banner. Sollten künftig
                einwilligungspflichtige Technologien eingesetzt werden, holen
                wir Ihre Einwilligung vorab ein und aktualisieren diese
                Datenschutzerklärung entsprechend.
              </p>

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
                Darstellung, der Sicherheit und der Optimierung seiner Website
                — hierzu müssen die Server-Log-Files erfasst werden. Die
                Log-Daten werden nach kurzer Zeit automatisch gelöscht, sofern
                keine sicherheitsrelevanten Vorfälle eine längere Aufbewahrung
                erfordern.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Kontaktformular
              </h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden die von Ihnen im Formular angegebenen Daten (Vorname,
                Nachname, E-Mail-Adresse sowie — sofern angegeben —
                Unternehmen, Telefonnummer, gewünschte Leistung und der Inhalt
                Ihrer Nachricht) zwecks Bearbeitung der Anfrage und für den
                Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Für den technischen Versand der Formularanfragen nutzen wir den
                Dienstleister Resend Inc., 2261 Market Street #5039, San
                Francisco, CA 94114, USA („Resend“). Ihre Angaben werden dabei
                über eine verschlüsselte Verbindung an Resend übertragen und
                als E-Mail an uns zugestellt. Mit Resend haben wir einen
                Vertrag über Auftragsverarbeitung (Art. 28 DSGVO)
                abgeschlossen; die Übermittlung in die USA erfolgt auf
                Grundlage der Standardvertragsklauseln der EU-Kommission (Art.
                46 Abs. 2 lit. c DSGVO). Näheres entnehmen Sie der
                Datenschutzerklärung von Resend:{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#7CB3D1] underline underline-offset-2 transition-colors"
                >
                  https://resend.com/legal/privacy-policy
                </a>
                .
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese
                abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                — insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>

              <h3 className="font-display text-lg text-white font-normal mt-6">
                Anfrage per E-Mail oder Telefon
              </h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden personenbezogenen
                Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
                Anliegens bei uns gespeichert und verarbeitet. Diese Daten
                geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung
                erfolgt auf denselben Rechtsgrundlagen wie beim Kontaktformular
                (siehe oben).
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                5. Schriftarten (Lokales Hosting)
              </h2>
              <p>
                Diese Website nutzt zur einheitlichen Darstellung von
                Schriftarten Webfonts, die lokal auf unserem Server bzw. bei
                unserem Hoster installiert sind. Beim Aufruf der Website wird{" "}
                <strong className="text-white">
                  keine Verbindung zu Servern von Google oder anderen
                  Schriftanbietern
                </strong>{" "}
                aufgebaut; eine Übermittlung Ihrer IP-Adresse an Dritte findet
                zu diesem Zweck nicht statt.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-white font-medium uppercase tracking-wider">
                6. Auftragsverarbeitung
              </h2>
              <p>
                Wir haben mit unseren Dienstleistern (Vercel Inc. für das
                Hosting und Resend Inc. für den Versand von Formularanfragen)
                Verträge über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO
                abgeschlossen. Hierbei handelt es sich um datenschutzrechtlich
                vorgeschriebene Verträge, die gewährleisten, dass diese
                Dienstleister die personenbezogenen Daten unserer
                Websitebesucher nur nach unseren Weisungen und unter Einhaltung
                der DSGVO verarbeiten.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
