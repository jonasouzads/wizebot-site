'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";

const integrationIcons = [
  { src: "/images/integrations/tools1.png" },
  { src: "/images/integrations/tools2.png" },
  { src: "/images/integrations/tools3.png" },
  { src: "/images/integrations/tools4.png" },
  { src: "/images/integrations/tools5.png" },
  { src: "/images/integrations/tools6.png" },
  { src: "/images/integrations/tools7.png" },
  { src: "/images/integrations/tools8.png" },
  { src: "/images/integrations/tools9.png" },
  { src: "/images/integrations/tools10.png" },
  { src: "/images/integrations/tools11.png" },
  { src: "/images/integrations/tools12.png" },
];

export function Integrations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
            Integração com Dezenas
            <br />
            de Ferramentas
          </h2>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 px-8 whitespace-nowrap"
          >
            Ver mais integrações
          </Button>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {integrationIcons.map((icon, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group"
            >
              <div className="relative w-full aspect-square transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={icon.src}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
