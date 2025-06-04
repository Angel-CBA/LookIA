
import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredOutfits = [
  {
    id: 1,
    name: "Elegancia Casual",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 249.99,
    rating: 4.9
  },
  {
    id: 2,
    name: "Estilo Urbano",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 199.99,
    rating: 4.8
  },
  {
    id: 3,
    name: "Look Minimalista",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 179.99,
    rating: 4.7
  },
  {
    id: 4,
    name: "Tendencia Moderna",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: 219.99,
    rating: 4.9
  }
];

const FeaturedOutfits = () => {
  return (
    <section className="py-16 mx-4 md:mx-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Destacados del mes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los outfits más populares seleccionados especialmente para ti
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredOutfits.map((outfit) => (
            <Card 
              key={outfit.id} 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={outfit.image} 
                  alt={outfit.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{outfit.rating}</span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {outfit.name}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-primary">
                    €{outfit.price}
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Ver outfit</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOutfits;
