
import React from 'react';

const partners = [
  { id: 1, name: "Zara", logo: "Z" },
  { id: 2, name: "H&M", logo: "H&M" },
  { id: 3, name: "Mango", logo: "M" },
  { id: 4, name: "Uniqlo", logo: "U" },
  { id: 5, name: "COS", logo: "C" },
  { id: 6, name: "Massimo", logo: "MD" }
];

const Partners = () => {
  return (
    <section className="py-16 mx-4 md:mx-20 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Aliados de estilo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las mejores marcas para ofrecerte la mejor calidad
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
