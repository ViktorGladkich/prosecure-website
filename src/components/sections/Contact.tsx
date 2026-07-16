"use client";

import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { gsap, registerScrollTrigger, useGSAP } from "@/hooks/useGSAP";

import { cn } from "@/lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(2, "Vorname erforderlich"),
  lastName: z.string().min(2, "Nachname erforderlich"),
  company: z.string().optional(),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Nachricht zu kurz"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Bitte stimmen Sie der Datenschutzerklärung zu",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      budget: "Budget anfragen",
      message: "",
      privacyPolicy: false,
    },
  });

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ email?: string }>;
      if (customEvent.detail?.email) {
        setValue("email", customEvent.detail.email);
        
        // Optionally focus the next field
        setTimeout(() => {
          const firstNameInput = document.querySelector('input[name="firstName"]') as HTMLInputElement;
          if (firstNameInput) firstNameInput.focus();
        }, 500); // Wait a bit for scroll to finish
      }
    };
    
    window.addEventListener("prefill-contact", handlePrefill);
    return () => window.removeEventListener("prefill-contact", handlePrefill);
  }, [setValue]);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      const mm = gsap.matchMedia();

      // Desktop Animations
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        });

        tl.from(".contact-title", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
          .from(
            ".contact-left-block",
            {
              x: -120,
              opacity: 0,
              duration: 1.6,
              ease: "expo.out",
            },
            "-=0.8",
          )
          .from(
            ".contact-right-block",
            {
              x: 120,
              opacity: 0,
              duration: 1.6,
              ease: "expo.out",
            },
            "-=1.4",
          )
          .from(
            ".contact-inner",
            {
              y: 30,
              opacity: 0,
              duration: 1,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=1.0",
          );
      });

      // Mobile Animations
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".contact-mobile-reveal", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fehler beim Senden");
      }

      toast.success("Anfrage gesendet", {
        description: "Wir melden uns in Kürze bei Ihnen.",
      });
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Fehler beim Senden", {
        description:
          "Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per E-Mail.",
      });
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-white/60 py-4 text-white placeholder:text-white/50 focus:border-brand focus:outline-none transition-colors font-display text-lg";
  const labelClasses = "block text-white text-sm font-display mb-1";

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="relative bg-black text-white py-24 lg:py-40 overflow-hidden z-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Giant Title */}
        <div className="contact-title contact-mobile-reveal mb-16 lg:mb-24 text-center w-full px-2">
          <h2 className="font-display font-black uppercase text-[12vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85] tracking-[-0.05em] text-white wrap-break-word hyphens-auto">
            KONTAKT AUFNEHMEN
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column: Info & Socials */}
          <div className="contact-left-block contact-mobile-reveal relative flex flex-col justify-between py-12 px-8 lg:p-12 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
            {/* Background Image */}
            <Image
              src="/images/contact/contact2.png"
              alt="Security Guards"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-0" />
            <div className="absolute inset-0  z-0" />

            <div className="relative z-10 space-y-12">
              <div className="contact-inner contact-mobile-reveal">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight max-w-md italic font-light opacity-90">
                  Lassen Sie uns gemeinsam das nächste Level Ihrer Sicherheit
                  erreichen.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-right-block contact-mobile-reveal relative">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              <div className="relative">
                <label htmlFor="firstName" className={labelClasses}>Vorname</label>
                <input
                  type="text"
                  {...register("firstName")}
                  id="firstName"
                  aria-label="Vorname"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="lastName" className={labelClasses}>Nachname</label>
                <input
                  type="text"
                  {...register("lastName")}
                  id="lastName"
                  aria-label="Nachname"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="company" className={labelClasses}>Unternehmen (Optional)</label>
                <input
                  type="text"
                  {...register("company")}
                  id="company"
                  aria-label="Unternehmen"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className={labelClasses}>E-Mail</label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  aria-label="E-Mail-Adresse"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="phone" className={labelClasses}>Telefon (Optional)</label>
                <input
                  type="tel"
                  {...register("phone")}
                  id="phone"
                  aria-label="Telefonnummer"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="budget" className={labelClasses}>Leistung</label>
                <select
                  {...register("budget")}
                  id="budget"
                  aria-label="Gewünschte Leistung auswählen"
                  className={cn(inputClasses, "appearance-none bg-black")}
                >
                  <option>Objektschutz</option>
                  <option>Baustellenbewachung</option>
                  <option>Eventsicherheit</option>
                  <option>Sonstiges</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="white"
                      strokeOpacity="0.4"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <label htmlFor="message" className={labelClasses}>Nachricht</label>
                <textarea
                  rows={1}
                  {...register("message")}
                  id="message"
                  aria-label="Ihre Nachricht"
                  className={cn(
                    inputClasses,
                    "resize-none h-auto min-h-[60px] pb-2",
                  )}
                />
              </div>

              <div className="md:col-span-2 pt-4 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  {...register("privacyPolicy")}
                  className="mt-1 shrink-0 w-4 h-4 rounded border-white/60 bg-transparent text-brand focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-sm text-white/50 leading-relaxed cursor-pointer select-none">
                  Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden. Weitere Informationen finden Sie in der{" "}
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7CB3D1] underline underline-offset-2 transition-colors">
                    Datenschutzerklärung
                  </a>
                  .
                </label>
              </div>

              <div className="md:col-span-2 pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "group relative flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]",
                    isSubmitting && "opacity-80 pointer-events-none",
                  )}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,39,64,0.9) 0%, rgba(27,53,80,0.85) 50%, rgba(15,39,64,0.95) 100%)",
                    boxShadow:
                      "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 8px 24px -4px rgba(27,53,80,0.4), 0 2px 8px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Glass shine highlight */}
                  <span
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                      maskImage:
                        "linear-gradient(180deg, black 0%, transparent 60%)",
                      WebkitMaskImage:
                        "linear-gradient(180deg, black 0%, transparent 60%)",
                    }}
                  />
                  <span className="relative z-10 text-white text-base font-display uppercase tracking-wide">
                    {isSubmitting ? "Bitte Warten..." : "Senden"}
                  </span>
                  <span
                    className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full group-hover:-rotate-45 transition-transform duration-500"
                    style={{
                      background: "black",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.3) inset",
                    }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
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
