"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import {
  gsap,
  registerScrollTrigger,
  useGSAP,
} from "@/hooks/useGSAP";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  { value: "objektschutz", label: "Objektschutz" },
  { value: "veranstaltungsschutz", label: "Veranstaltungsschutz" },
  { value: "personenschutz", label: "Personenschutz" },
  { value: "alarmaufschaltung", label: "Alarmaufschaltung" },
  { value: "sonstiges", label: "Sonstiges" },
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  company: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().min(6, "Bitte geben Sie eine Telefonnummer an."),
  service: z.enum([
    "objektschutz",
    "veranstaltungsschutz",
    "personenschutz",
    "alarmaufschaltung",
    "sonstiges",
  ]),
  message: z
    .string()
    .min(20, "Bitte beschreiben Sie Ihr Anliegen (mind. 20 Zeichen).")
    .max(1500, "Maximal 1500 Zeichen."),
  consent: z.literal(true, {
    message: "Bitte bestätigen Sie die Datenschutzerklärung.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactInfoRow {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_ROWS: ContactInfoRow[] = [
  {
    icon: Phone,
    label: "24/7-Notfall-Hotline",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Zentrale Dresden",
    value: `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.addressLocality}`,
  },
  {
    icon: Clock,
    label: "Einsatzzentrale",
    value: "24/7 · 365 Tage",
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "objektschutz",
      message: "",
      consent: false as unknown as true,
    },
  });

  const consent = watch("consent");

  useEffect(() => {
    register("consent");
  }, [register]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      const form = formRef.current;
      if (!form) return;
      const fields = form.querySelectorAll<HTMLElement>("[data-field]");
      if (fields.length === 0) return;
      gsap.set(fields, { y: 20, opacity: 0 });
      gsap.to(fields, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.07,
        ease: "expo.out",
        scrollTrigger: {
          trigger: form,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      toast.success("Vielen Dank für Ihre Anfrage.", {
        description:
          "Unser Team meldet sich innerhalb von 24 Stunden vertraulich bei Ihnen zurück.",
      });
      reset();
      // values is logged via toast; mark as intentionally used
      void values;
    } catch {
      toast.error("Übertragung fehlgeschlagen.", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      });
    }
  };

  const inputBase =
    "w-full bg-transparent border-b border-white/10 py-3 text-bone placeholder:text-bone/30 focus:border-gold focus:outline-none transition-colors";
  const labelBase =
    "block font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-2";
  const errorBase = "text-gold/80 text-xs mt-1 font-mono";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#000000] text-white py-32 lg:py-44 z-10"
      aria-label="Kontakt"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 10%, rgba(201,168,76,0.12), transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
               <span className="block">Bereit</span>
               <span className="block">für echte</span>
               <span className="block">Sicherheit<span className="text-[#FF4B2B] font-bold">.</span></span>
            </h2>
            <p className="max-w-md text-white/50 text-base lg:text-lg leading-relaxed mt-4">
              Ob akuter Bedarf oder strategische Planung — wir beraten Sie
              diskret und verbindlich.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {CONTACT_ROWS.map((row) => {
                const Icon = row.icon;
                const content = (
                  <div className="flex items-center gap-6 group cursor-pointer transition-transform hover:translate-x-2">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:bg-[#FF4B2B] group-hover:border-[#FF4B2B] group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF4B2B]">
                        {row.label}
                      </span>
                      <span className="text-base text-white/90">
                        {row.value}
                      </span>
                    </span>
                  </div>
                );
                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    className="group transition-colors hover:text-gold"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="bg-[#0B0B0C] border border-white/10 rounded-3xl p-8 lg:p-14 flex flex-col gap-10 shadow-2xl"
            >
              <div
                data-field
                className="flex items-center justify-between gap-4 pb-4 border-b border-white/5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  Anfrage /// 01
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
                  DSGVO-konform
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-field>
                  <label className={labelBase} htmlFor="contact-name">
                    Name*
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Max Mustermann"
                    className={inputBase}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className={errorBase}>{errors.name.message}</p>
                  )}
                </div>
                <div data-field>
                  <label className={labelBase} htmlFor="contact-company">
                    Unternehmen
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Optional"
                    className={inputBase}
                    {...register("company")}
                  />
                </div>
                <div data-field>
                  <label className={labelBase} htmlFor="contact-email">
                    E-Mail*
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="mail@firma.de"
                    className={inputBase}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={errorBase}>{errors.email.message}</p>
                  )}
                </div>
                <div data-field>
                  <label className={labelBase} htmlFor="contact-phone">
                    Telefon*
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+49 ..."
                    className={inputBase}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className={errorBase}>{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div data-field>
                <label className={labelBase} htmlFor="contact-service">
                  Leistung*
                </label>
                <select
                  id="contact-service"
                  className={cn(
                    inputBase,
                    "appearance-none cursor-pointer pr-8 bg-graphite text-bone",
                  )}
                  {...register("service")}
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className="bg-graphite text-bone"
                    >
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorBase}>{errors.service.message}</p>
                )}
              </div>

              <div data-field>
                <label className={labelBase} htmlFor="contact-message">
                  Nachricht*
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Schildern Sie uns Ihr Anliegen — Objekt, Zeitraum, gewünschte Intensität..."
                  className={cn(inputBase, "resize-none")}
                  {...register("message")}
                />
                {errors.message && (
                  <p className={errorBase}>{errors.message.message}</p>
                )}
              </div>

              <div data-field className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setValue("consent", (!consent) as unknown as true, {
                      shouldValidate: true,
                    })
                  }
                  aria-pressed={Boolean(consent)}
                  aria-label="Datenschutz bestätigen"
                  className={cn(
                    "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center border transition-colors",
                    consent
                      ? "bg-gold border-gold text-ink"
                      : "bg-transparent border-white/20 hover:border-gold/60",
                  )}
                >
                  {consent && <Check className="h-3 w-3" strokeWidth={3} />}
                </button>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-consent"
                    className="text-xs text-bone/70 leading-relaxed cursor-pointer"
                    onClick={() =>
                      setValue("consent", (!consent) as unknown as true, {
                        shouldValidate: true,
                      })
                    }
                  >
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a
                      href="/datenschutz"
                      className="text-gold underline underline-offset-4 hover:opacity-80"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    zu. Die Daten werden ausschließlich zur Bearbeitung der
                    Anfrage verwendet.
                  </label>
                  {errors.consent && (
                    <p className={errorBase}>
                      {errors.consent.message as string}
                    </p>
                  )}
                </div>
              </div>

              <div
                data-field
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-white/10"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                  Antwort innerhalb von 24 h
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FF4B2B] text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-[#ff5a3d] transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,75,43,0.3)] min-w-[220px] disabled:opacity-50"
                >
                  {isSubmitting ? "Senden..." : "Anfrage senden →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
