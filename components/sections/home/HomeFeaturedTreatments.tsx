import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#20252B] block mb-2 font-medium uppercase tracking-wider">Serviços de Alvenaria e Construção</span>
          <h2 className="font-display text-33 md:text-41 text-[#20252B]">Support for dia a dia alvenaria needs</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#20252B] uppercase tracking-wider block mb-2 font-medium">Serviços de alvenaria</span>
              <h3 className="font-display text-26 md:text-33 text-[#20252B] mb-4">Discuss a alvenaria issue</h3>
              <p className="font-body text-15 md:text-17 text-[#20252B]/80 leading-relaxed mb-6">Conte à equipe sobre o serviço e os reparos que seu imóvel precisa.</p>
              <div className="p-4 bg-[#F3F7FA] border-l-4 border-[#009FE3] mb-6 rounded-sm"><span className="font-body text-13 text-[#20252B]/80"><strong className="text-[#20252B] font-semibold">Antes de começar:</strong> Discuss the scope, price and timing with a equipe.</span></div>
              <Button href="/pequenos-reparos/" variant="ghost" size="md">Conheça os serviços</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roof-repair.png" alt="Serviços de alvenaria work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/roof-with-tiles.png" alt="Projeto de construção" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#20252B] uppercase tracking-wider block mb-2 font-medium">Reformas residenciais</span>
              <h3 className="font-display text-26 md:text-33 text-[#20252B] mb-4">Reformas residenciais options for your property</h3>
              <p className="font-body text-15 md:text-17 text-[#20252B]/80 leading-relaxed mb-6">Discuss a new reforma, repair or maintenance and the materials that suit your building.</p>
              <div className="p-4 bg-[#F3F7FA] border-l-4 border-[#009FE3] mb-6 rounded-sm"><span className="font-body text-13 text-[#20252B]/80"><strong className="text-[#20252B] font-semibold">Discuss your needs:</strong> The team can talk through the work and next steps.</span></div>
              <Button href="/pintura-residencial/" variant="ghost" size="md">Conheça as reformas</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
