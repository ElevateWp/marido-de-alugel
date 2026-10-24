"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { CLINIC_INFO } from "@/lib/clinic-data";

const family = '"Glyph Portal Jakarta", Arial, sans-serif';
let fontLoad: Promise<void> | undefined;

export default function HomeHero() {
  const [face, setFace] = useState<string | null>(null);

  const phone = CLINIC_INFO.contact.phone;

  useEffect(() => {
    let settled = false;
    const finish = (value: string) => {
      if (!settled) {
        settled = true;
        setFace(value);
      }
    };

    fontLoad ??= new FontFace(
      "Glyph Portal Jakarta",
      'url("https://cdn.21st.dev/assets/mirror/15/153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79.woff2")',
      { weight: "100 900" }
    )
      .load()
      .then((font) => {
        document.fonts.add(font);
      });

    const timeout = window.setTimeout(() => finish("Arial, sans-serif"), 1600);
    void fontLoad.then(
      () => finish(family),
      () => finish("Arial, sans-serif")
    );

    return () => {
      settled = true;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      data-slipstream-demo
      className="-mt-[88px] sm:-mt-[100px] md:-mt-[112px] relative w-full bg-white border-b border-[#DCE5EB] overflow-clip"
      style={{
        width: "100%",
        containerType: "inline-size",
        fontFamily: face ?? "Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes heroImgZoom{
          from{transform:scale(1.0);}
          to{transform:scale(1.14);}
        }
        [data-hero-bg-img]{
          animation:heroImgZoom 12s ease-in-out infinite alternate;
          transform-origin:center center;
        }
        [data-slipstream-demo] [data-gp-caption]{
          inset:calc(var(--gp-word-bottom,50%) + 102px) 24px auto;
          justify-content:center;
        }
        [data-slipstream-demo] [data-gp-hint]{display:none;}
        [data-slipstream-demo] [data-gp-enter]{
          min-height:48px;
          padding:0 28px;
          gap:20px;
          background:#009FE3;
          border:1px solid #00C5E8;
          border-radius:9999px;
          color:#ffffff;
          font-size:14px;
          font-weight:600;
          letter-spacing:0.01em;
          box-shadow:0 6px 20px rgba(0,159,227,0.32);
          transition:all .2s ease;
        }
        [data-slipstream-demo] [data-gp-enter]:hover{
          background:#18B8F2;
          box-shadow:0 8px 26px rgba(0,159,227,0.45);
          transform:translateY(-1px);
        }
        [data-slipstream-demo] [data-gp-enter]:focus-visible{
          outline:2px solid #17191D;
          outline-offset:4px;
        }
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{
          border:1px solid #DCE5EB;
          border-radius:8px;
          font-size:12px;
          color:#20252B;
          background:#ffffff;
        }
        [data-ch-hero-header]{position:absolute;inset:clamp(24px,4.5cqw,48px) clamp(24px,5cqw,64px) auto;display:flex;align-items:center;justify-content:space-between;gap:20px;color:#20252B;}
        [data-ch-hero-brand]{font-size:19px;font-weight:700;letter-spacing:-.045em;}
        [data-ch-hero-category]{font-size:12px;line-height:1.5;color:#69747F;text-align:right;}
        [data-ch-hero-intro]{position:absolute;inset:auto 24px calc(100% - var(--gp-word-top,35%) + 32px);margin:0;max-width:none;text-align:center;color:#69747F;font-size:13px;font-weight:500;line-height:1.5;letter-spacing:.01em;}
        [data-ch-hero-support]{position:absolute;inset:calc(var(--gp-word-bottom,50%) + 32px) 24px auto;margin:0 auto;max-width:42ch;text-align:center;color:#69747F;font-size:16px;font-weight:400;line-height:1.5;text-wrap:balance;}
        [data-sublime-scroll]{position:absolute;inset:auto 24px 7%;text-align:center;color:#69747F;font-size:11px;letter-spacing:.01em;}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:12%;}}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:13%;}}
        @container(max-width:450px){
          [data-ch-hero-category]{max-width:12ch;}
          [data-ch-hero-intro]{font-size:12px;}
          [data-ch-hero-support]{font-size:14px;}
          [data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 96px);}
        }
        @container(max-height:479px){
          [data-ch-hero-header]{top:18px;}
          [data-ch-hero-support]{top:calc(var(--gp-word-bottom,50%) + 16px);}
          [data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 78px);}
          [data-sublime-scroll]{display:none;}
        }
        [data-slipstream-demo] [data-gp-content]{
          padding:6rem clamp(1.25rem,5cqw,5rem) 6.5rem;
          font-family:inherit;
          background:#17191D;
          color:#ffffff;
        }
        [data-slipstream-demo] section,[data-slipstream-demo] [data-gp-caption]{font-family:inherit;}
        [data-slipstream-copy]{
          display:flex;
          width:min(100%,80rem);
          margin:auto;
          flex-direction:column;
          align-items:flex-start;
          gap:clamp(2rem,5svh,3.5rem);
        }
        [data-slipstream-copy] h2{
          max-width:48rem;
          margin:0;
          color:#ffffff;
          font-size:clamp(1.75rem,1.1rem + 2.1cqw,2.4rem);
          font-weight:700;
          line-height:1.2;
          letter-spacing:-0.02em;
          text-wrap:balance;
        }
        [data-slipstream-features]{
          display:grid;
          width:100%;
          grid-template-columns:1fr;
          gap:1.75rem;
        }
        [data-slipstream-feature]{
          border-top:1px solid rgba(220,228,237,0.22);
          padding-top:1.1rem;
        }
        [data-slipstream-feature] h3{
          margin:0;
          color:#ffffff;
          font-size:1.125rem;
          font-weight:600;
          line-height:1.2;
          letter-spacing:0;
        }
        [data-slipstream-feature] p{
          margin:.55rem 0 0;
          color:#DCE5EB;
          font-size:.9375rem;
          line-height:1.55;
        }
        [data-slipstream-no]{
          display:inline-block;
          margin-right:.7rem;
          color:#009FE3;
          font:700 .8125rem ui-monospace,monospace;
          letter-spacing:.08em;
          transform:translateY(-.1em);
        }
        @container(min-width:768px){
          [data-slipstream-features]{
            grid-template-columns:repeat(3,minmax(0,1fr));
            gap:3.5rem;
          }
        }
      `}</style>

      {face ? (
        <GlyphPortal
          word="CAMPO ENGENHARIA"
          fontFamily={face}
          fontWeight={700}
          style={{
            fontFamily: face,
            "--gp-paper": "#FFFFFF",
            "--gp-ink": "#20252B",
            "--gp-field": "#17191D",
            "--gp-foreground": "#FFFFFF",
          }}
          scrollLength={2.2}
          interactive={true}
          annotations={false}
          enterLabel="Step inside"
          underlay={
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/images/logo.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-contain"
                style={{ opacity: 0.1, transform: "scale(1.35)", objectPosition: "center 46%" }}
              />
            </div>
          }
          background={
            <div
              style={{
                position: "absolute",
                inset: 0,
                transform: "scale(var(--gp-field-scale,1))",
              }}
            >
              {/* Plumbing photo at low opacity inside the glyph zoom destination */}
              <Image
                src="/images/roofing-hero.png"
                alt=""
                fill
                className="object-cover object-center"
                style={{ opacity: 0.92 }}
              />
              {/* Dark gradient overlay for readability */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 18% 12%, rgba(0,159,227,0.28), transparent 38%), radial-gradient(circle at 82% 22%, rgba(0,197,232,0.35), transparent 32%), linear-gradient(135deg, rgba(36,18,27,0.94) 0%, rgba(36,18,27,0.9) 50%, rgba(36,18,27,0.96) 100%)",
                }}
              />
            </div>
          }
          front={
            <>
              <div data-ch-hero-header>
                <span data-ch-hero-brand>Marido de Aluguel Campo Engenharia</span>
                <span data-ch-hero-category>Serviços de Alvenaria e Construção, Vila Brasília, Aparecida de Goiânia<br />Goiás</span>
              </div>
              <p data-ch-hero-intro>Atendimento de segunda a sábado em Aparecida de Goiânia.</p>
              <p data-ch-hero-support>
                Serviços de alvenaria, construção e reformas em Aparecida de Goiânia.
              </p>
              <span data-sublime-scroll>Conheça nossos serviços ↓</span>
            </>
          }
        >
          <div data-slipstream-copy>
            <h2>
              Alvenaria, construção e reformas para o seu imóvel.
            </h2>

            <div data-slipstream-features>
              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>01</span>
                  Alvenaria e Construção
                </h3>
                <p>
                  Serviços de alvenaria, construção e reparos em Aparecida de Goiânia.
                </p>
              </div>

              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>02</span>
                  Reformas Residenciais
                </h3>
                <p>
                  Converse com a equipe sobre os reparos, acabamentos e reformas do seu imóvel.
                </p>
              </div>

              <div data-slipstream-feature>
                <h3>
                  <span data-slipstream-no>03</span>
                  Orçamentos Claros
                </h3>
                <p>
                  Converse sobre o escopo e receba um orçamento para o seu projeto.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="https://wa.me/5562982367515"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#009FE3] px-7 font-body text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,159,227,0.35)] transition-all hover:bg-[#18B8F2] hover:shadow-[0_8px_26px_rgba(0,159,227,0.45)]"
              >
                Fale pelo WhatsApp
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/5562982367515"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 font-body text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <Phone size={15} className="text-[#18B8F2]" />
                WhatsApp Campo Engenharia
              </a>
              <a
                href="#home-stats"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 font-body text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all"
              >
                <span>Ver serviços e avaliações</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </GlyphPortal>
      ) : (
        <div
          role="status"
          style={{
            height: "80vh",
            display: "grid",
            placeItems: "center",
            color: "#20252B",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Loading type…
        </div>
      )}
    </div>
  );
}
