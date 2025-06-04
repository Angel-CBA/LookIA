
import React from 'react';
import { Clock, Users, Heart } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Ahorro de tiempo",
    description: "No más horas perdidas eligiendo qué ponerte. Outfits listos en segundos.",
    icon: Clock
  },
  {
    id: 2,
    title: "Combos armados por expertos",
    description: "Nuestros estilistas profesionales crean combinaciones perfectas para ti.",
    icon: Users
  },
  {
    id: 3,
    title: "Inspiración diaria",
    description: "Descubrí nuevos estilos y tendencias que se adaptan a tu personalidad.",
    icon: Heart
  }
];

const Benefits = () => {
  return (
    <section className="py-16 mx-4 md:mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Beneficios de usar OUTFITECH
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubrí por qué miles de personas eligen OUTFITECH para su estilo diario
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
