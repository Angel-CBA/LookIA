
import React from 'react';
import { Search, Palette, ShoppingBag } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Elegí tu estilo",
    description: "Descubrí outfits que se adaptan a tu personalidad y ocasión",
    icon: Search
  },
  {
    id: 2,
    title: "Personalizá tu outfit",
    description: "Ajustá colores, tallas y accesorios según tus preferencias",
    icon: Palette
  },
  {
    id: 3,
    title: "Comprá fácil",
    description: "Finalizá tu compra de forma segura y recibí todo junto",
    icon: ShoppingBag
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 mx-4 md:mx-20 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona LookIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu estilo perfecto en solo 3 simples pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
