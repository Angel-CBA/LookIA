
import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredOutfits = [
  {
    id: 1,
    name: "Elegancia Casual",
    image: "https://images.pexels.com/photos/19989010/pexels-photo-19989010/free-photo-of-moda-mujer-pared-muro.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 54999,
    rating: 4.9
  },
  {
    id: 2,
    name: "Estilo Urbano",
    image: "https://images.pexels.com/photos/32409058/pexels-photo-32409058/free-photo-of-retrato-de-un-hombre-a-la-moda-con-traje-urbano-rojo.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 43999,
    rating: 4.8
  },
  {
    id: 3,
    name: "Look Minimalista",
    image: "https://images.pexels.com/photos/32363103/pexels-photo-32363103/free-photo-of-mujer-elegante-posando-en-un-jardin-interior.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 27999,
    rating: 4.7
  },
  {
    id: 4,
    name: "Tendencia Moderna",
    image: "https://images.pexels.com/photos/32404690/pexels-photo-32404690/free-photo-of-modelo-elegante-con-chaqueta-vaquera-y-gafas-de-sol.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 61999,
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
                    ${outfit.price}
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
