"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  gsap,
  registerScrollTrigger,
  useGSAP,
} from "@/hooks/useGSAP";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  firstName: z.string().min(2, "Vorname erforderlich"),
  lastName: z.string().min(2, "Nachname erforderlich"),
  company: z.string().optional(),
  email: z.string().email("Ungültige E-Mail"),
  budget: z.string().optional(),
  message: z.string().min(10, "Nachricht zu kurz"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      budget: "Budget anfragen",
      message: "",
    },
  });

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      
      gsap.from(".contact-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    },
    { scope: sectionRef },
  );

  const onSubmit = async (values: ContactFormValues): Promise<void> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Anfrage gesendet", {
        description: "Wir melden uns in Kürze bei Ihnen.",
      });
      reset();
      void values;
    } catch {
      toast.error("Fehler beim Senden");
    }
  };

  const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/20 focus:border-brand focus:outline-none transition-colors font-display text-lg";
  const labelClasses = "block text-white/40 text-sm font-display mb-1";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-black text-white py-24 lg:py-40 overflow-hidden z-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* Giant Title */}
        <div className="contact-reveal mb-16 lg:mb-24 text-center w-full">
          <h2 className="font-display font-black uppercase text-[7vw] sm:text-[8vw] lg:text-[8.5vw] leading-[0.85] tracking-[-0.05em] text-white">
            KONTAKT AUFNEHMEN<span className="text-brand"> .</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column: Info & Socials */}
          <div className="relative flex flex-col justify-between py-12 px-8 lg:p-12 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
            {/* Background Image */}
            <Image
              src="/images/contact/contact.jpeg"
              alt="Security Guards"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-0" />
            <div className="absolute inset-0  z-0" />

            <div className="relative z-10 space-y-12">
              <div className="contact-reveal">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight max-w-md italic font-light opacity-90">
                  Lassen Sie uns gemeinsam das nächste Level Ihrer Sicherheit erreichen.
                </p>
                <div className="mt-8 font-display text-3xl md:text-4xl text-white hover:text-brand transition-colors cursor-pointer inline-block">
                  Schreiben Sie uns.
                </div>
              </div>

              <div className="contact-reveal space-y-2">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-display">Social Media</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-display text-sm uppercase tracking-wider">
                  <a href="#" className="hover:text-brand transition-colors">Instagram</a>
                  <span className="text-white/20">—</span>
                  <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
                  <span className="text-white/20">—</span>
                  <a href="#" className="hover:text-brand transition-colors">Facebook</a>
                </div>
              </div>
            </div>

            <div className="relative z-10 contact-reveal mt-24 lg:mt-0 grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-display">In Kontakt treten</p>
                <a href={`mailto:${siteConfig.email}`} className="block font-display text-sm md:text-base hover:text-brand transition-colors lowercase">
                  {siteConfig.email}
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-display">Standort</p>
                <p className="font-display text-sm md:text-base leading-relaxed opacity-80">
                  Dresden — Deutschland
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-reveal relative">
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              <div className="relative">
                <label className={labelClasses}>Vorname</label>
                <input
                  type="text"
                  {...register("firstName")}
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label className={labelClasses}>Nachname</label>
                <input
                  type="text"
                  {...register("lastName")}
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label className={labelClasses}>Unternehmen</label>
                <input
                  type="text"
                  {...register("company")}
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label className={labelClasses}>E-Mail</label>
                <input
                  type="email"
                  {...register("email")}
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label className={labelClasses}>Leistung</label>
                <select
                  {...register("budget")}
                  className={cn(inputClasses, "appearance-none bg-black")}
                >
                  <option>Objektschutz</option>
                  <option>Personenschutz</option>
                  <option>Eventsicherheit</option>
                  <option>Sonstiges</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none">
                   <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
                   </svg>
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <label className={labelClasses}>Nachricht</label>
                <textarea
                  rows={1}
                  {...register("message")}
                  className={cn(inputClasses, "resize-none h-auto min-h-[60px] pb-2")}
                />
              </div>

              <div className="md:col-span-2 pt-12 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-end gap-x-4 transition-transform active:scale-95 cursor-pointer"
                >
                  <span className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none group-hover:text-brand transition-colors">
                    {isSubmitting ? "BITTE WARTEN" : "SENDEN"}
                  </span>
                  <div className={cn(
                    "mb-2 p-3 sm:p-5 rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500",
                    isSubmitting && "animate-pulse"
                  )}>
                    <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-white group-hover:text-black transition-all duration-500 group-hover:-rotate-45" />
                  </div>
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
