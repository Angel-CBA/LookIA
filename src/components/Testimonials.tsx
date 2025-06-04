
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "María González",
    city: "Buenos Aires",
    rating: 5,
    text: "LookIA cambió completamente mi forma de vestirme. Ahora tengo outfits increíbles sin perder tiempo eligiendo.",
    avatar: "MG"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    city: "Córdoba",
    rating: 5,
    text: "Los combos son perfectos y la calidad es excelente. Me encanta la variedad de estilos que ofrecen.",
    avatar: "CM"
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    city: "México DF",
    rating: 5,
    text: "Súper recomendado. El servicio es impecable y siempre encuentro outfits que van con mi personalidad.",
    avatar: "AR"
  },
  {
    id: 4,
    name: "Diego Silva",
    city: "Colombia",
    rating: 5,
    text: "La mejor inversión en mi guardarropa. Outfits armados por profesionales que realmente saben de moda.",
    avatar: "DS"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 mx-4 md:mx-20 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lo que dicen nuestras usuarias/os
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de personas ya transformaron su estilo con LookIA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
