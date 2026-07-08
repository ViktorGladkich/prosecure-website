<div align="center">
  <img src="./public/logo/logo.png" alt="ProSecure Logo" width="280" />

  <br />
  <br />

  <h1>ProSecure – Sicherheitsdienst Sachsen</h1>

  <p>
    Ein hochmodernes, performantes und SEO-optimiertes Webprojekt.<br/>
    Entwickelt exklusiv für <strong>ProSecure</strong> von <a href="https://invertadigital.de/" target="_blank"><strong>INVERTA DIGITAL</strong></a>.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

<hr />

## 🌟 Projektübersicht

Diese Website ist eine maßgeschneiderte Premium-Lösung, die speziell für den Sicherheitsdienst ProSecure entwickelt wurde. Sie kombiniert exklusives Design, flüssige Animationen und modernste Webtechnologien, um maximale Conversion und eine starke Markenpräsenz zu gewährleisten.

### ✨ Hauptmerkmale
- **Premium Design:** Dunkles, exklusives Interface mit Glasmorphismus-Effekten und hochwertigen 3D-Elementen.
- **Flüssige Animationen:** Komplexe Scroll-Animationen und interaktive Elemente realisiert mit GSAP und Lenis Smooth Scrolling.
- **AIO & SEO Optimiert:** Integrierte `JSON-LD` (Structured Data) Architektur (`SecurityBusiness`), semantisches HTML und offene `robots.txt` zur maximalen Sichtbarkeit in Suchmaschinen (Google) und KI-Systemen (ChatGPT, Perplexity, Claude).
- **Sicheres Kontaktformular:** Integrierte E-Mail-Weiterleitung via Resend API, geschützt durch Zod-Validierung und Anti-XSS-Sanitizer. Vollständige DSGVO-Konformität durch einverständnispflichtige Checkboxes.

## 🛠️ Technologien

Das Projekt wurde mit dem fortschrittlichsten Tech-Stack der Industrie gebaut:
- **Framework:** [Next.js](https://nextjs.org/) (React)
- **UI/Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animationen:** [GSAP](https://gsap.com/) & Framer Motion
- **Smooth Scroll:** [Lenis](https://lenis.studiofreight.com/)
- **Formulare:** React Hook Form & Zod
- **E-Mail Service:** Resend API

## 🚀 Lokale Entwicklung (Getting Started)

Um das Projekt lokal auf Ihrem Rechner zu starten, folgen Sie diesen einfachen Schritten:

### 1. Abhängigkeiten installieren
Stellen Sie sicher, dass Node.js installiert ist, und führen Sie folgenden Befehl aus:
```bash
npm install
```

### 2. Umgebungsvariablen konfigurieren
Erstellen Sie eine `.env.local` Datei im Hauptverzeichnis des Projekts und fügen Sie folgende Variablen hinzu:

```env
RESEND_API_KEY=ihr_resend_api_key_hier
CONTACT_EMAIL=ihre_ziel_email_hier@domain.com
```
*(Hinweis: Den RESEND_API_KEY erhalten Sie von Ihrem Resend-Dashboard. Die CONTACT_EMAIL ist die Adresse, an welche die Anfragen aus dem Kontaktformular gesendet werden).*

### 3. Entwicklungsserver starten
```bash
npm run dev
```

Öffnen Sie nun [http://localhost:3000](http://localhost:3000) in Ihrem Browser, um die Website live zu betrachten.

## 📦 Deployment (Veröffentlichung)

Das Projekt ist optimal für ein Hosting auf der Plattform [Vercel](https://vercel.com) konfiguriert, kann aber auch auf jedem anderen Node.js-kompatiblen Server bereitgestellt werden.

**Wichtiger Hinweis für Live-Umgebungen:**
Vergessen Sie nicht, in den Einstellungen Ihres Hosting-Providers (z.B. Vercel Project Settings) die entsprechenden **Environment Variables (Umgebungsvariablen)** aus der `.env.local` einzutragen. Nur so funktioniert das Kontaktformular in der Live-Version.

## 🔒 Sicherheit (Security)
Das System verfügt über modernste integrierte Sicherheitsmechanismen:
- **HTTP Security Headers:** Schutz durch HSTS, X-Frame-Options und X-XSS-Protection.
- **XSS Prevention:** Strikte Sanitisation aller Benutzereingaben im Kontaktformular.
- **SSL/TLS:** Automatische Verschlüsselung bei Nutzung von Vercel (HTTPS).

---

**Realisiert von [INVERTA DIGITAL](https://invertadigital.de/)** 
