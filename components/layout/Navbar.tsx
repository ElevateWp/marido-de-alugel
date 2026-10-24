'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      data-site-header
      className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#DCE5EB] shadow-sm"
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-4 sm:px-6 md:px-12">
        {/* Brand Logo - compact on mobile */}
        <Link
          href="/"
          className="group flex items-center no-underline focus-visible:outline-offset-4 flex-shrink-0 min-w-0"
          aria-label="Marido de Aluguel Campo Engenharia"
        >
          <Image
            src="/images/logo.png"
            alt="Marido de Aluguel Campo Engenharia logo"
            width={240}
            height={88}
            priority
            className="h-[62px] w-[170px] flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[72px] sm:w-[197px] md:h-[78px] md:w-[214px]"
          />
        </Link>

        {/* Desktop Primary Navigation (Active on xl screens >= 1200px) */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8" aria-label="Main navigation">
          {/* Serviços Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`font-body text-15 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                SERVICES.some((service) => pathname?.startsWith(`/${service.slug}/`))
                  ? 'text-[#20252B] font-semibold'
                  : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Serviços</span>
              <span
                className={`w-1.5 h-1.5 border-r border-b border-[#20252B]/60 transition-transform duration-200 ${
                  servicesDropdownOpen ? '-rotate-135 -translate-y-0.5' : 'rotate-45 translate-y-[-2px]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel with Pure White Background and Smooth Shadow */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 z-50 animate-fade-in">
                <div className="p-2 bg-paper border border-[#DCE5EB] shadow-[0_12px_36px_rgba(17,17,17,0.08)] rounded-2xl">
                  <div className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}/`}
                        className={`block px-3.5 py-2 text-14 font-body transition-all duration-200 rounded-xl ${
                          pathname === `/${s.slug}/`
                            ? 'bg-[#F3F7FA] text-[#20252B] font-semibold shadow-xs'
                            : 'text-[#20252B]/85 hover:bg-[#F3F7FA]/50 hover:text-[#69747F] hover:translate-x-1'
                        }`}
                      >
                        <span className="block font-medium">{s.navLabel}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/sobre/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/sobre/'
                ? 'text-[#20252B] font-semibold'
                : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
            }`}
          >
            Sobre
          </Link>

          <Link
            href="/servicos/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/servicos')
                ? 'text-[#20252B] font-semibold'
                : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
            }`}
          >
            Serviços
          </Link>

          <Link
            href="/equipe/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/equipe')
                ? 'text-[#20252B] font-semibold'
                : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
            }`}
          >
            Nossa Equipe
          </Link>

          <Link
            href="/dicas/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/dicas')
                ? 'text-[#20252B] font-semibold'
                : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
            }`}
          >
            Dicas de Construção
          </Link>

          <Link
            href="/contato/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/contato/'
                ? 'text-[#20252B] font-semibold'
                : 'text-[#20252B]/80 hover:text-[#69747F] font-medium'
            }`}
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/solicitar-orcamento/"
            className="hidden xl:inline-flex h-10 w-[176px] items-center justify-center rounded-md border border-[#009FE3] bg-[#009FE3] px-3 font-body text-13 font-semibold text-white transition-colors hover:border-[#18B8F2] hover:bg-[#18B8F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009FE3] whitespace-nowrap"
          >
            <span>Fale sobre seu projeto</span>
          </Link>

          <Button
            href="/solicitar-orcamento/"
            variant="forest"
            size="sm"
            className="h-9 w-[160px] hidden xl:inline-flex items-center justify-center gap-2 px-2 text-12 sm:text-13 font-semibold whitespace-nowrap"
          >
            <span>Solicite um orçamento</span>
          </Button>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#20252B] focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer rounded-lg hover:bg-[#F3F7FA] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#20252B] transition-transform duration-250 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#20252B] transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#20252B] transition-transform duration-250 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`xl:hidden fixed inset-x-0 top-[95px] sm:top-[110px] md:top-[121px] bottom-0 bg-paper border-t border-[#DCE5EB] overflow-y-auto overscroll-contain px-4 sm:px-6 py-5 sm:py-6 flex flex-col justify-between z-[999] transition-all duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-list"
              className="flex min-h-12 w-full items-center justify-between py-2 text-left font-body text-13 font-bold uppercase tracking-wider text-[#20252B]"
            >
              <span>Serviços</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className={`mr-1 h-4 w-4 text-[#20252B]/70 transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services-list" className="grid grid-cols-1 gap-1.5 pb-2 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}/`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className={`flex min-h-11 items-center rounded-md px-3 font-body text-15 transition-colors ${
                      pathname === `/${s.slug}/`
                        ? 'bg-[#D9F1FA] font-semibold text-[#20252B]'
                        : 'text-[#20252B] hover:bg-[#F3F7FA] hover:text-[#69747F]'
                    }`}
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#DCE5EB] flex flex-col space-y-3">
            <Link
              href="/sobre/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/sobre/' ? 'text-[#20252B] font-semibold' : 'text-[#20252B] hover:text-[#69747F]'
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/servicos/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/servicos') ? 'text-[#20252B] font-semibold' : 'text-[#20252B] hover:text-[#69747F]'
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/equipe/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/equipe') ? 'text-[#20252B] font-semibold' : 'text-[#20252B] hover:text-[#69747F]'
              }`}
            >
              Nossa Equipe
            </Link>
            <Link
              href="/solicitar-orcamento/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 font-semibold text-[#20252B] hover:underline`}
            >
              Fale sobre seu projeto
            </Link>
            <Link
              href="/dicas/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/dicas') ? 'text-[#20252B] font-semibold' : 'text-[#20252B] hover:text-[#69747F]'
              }`}
            >
              Dicas de Construção
            </Link>
            <Link
              href="/contato/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/contato/' ? 'text-[#20252B] font-semibold' : 'text-[#20252B] hover:text-[#69747F]'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#DCE5EB] flex flex-col gap-3 pb-8">
          <Button
            href="/solicitar-orcamento/"
            variant="forest"
            size="lg"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solicite um orçamento
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-center font-body text-15 text-[#20252B] py-2 font-semibold hover:text-[#69747F] transition-colors"
          >
            Telefone: {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    </>
  );
}
