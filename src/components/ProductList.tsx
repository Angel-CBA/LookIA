
import React from 'react';
import { Shirt, Users, Star, Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const outfits = [
  {
    id: 1,
    name: "Look Casual Urbano",
    image: "https://images.pexels.com/photos/18289232/pexels-photo-18289232/free-photo-of-modelo-pelirroja-posando-con-botas-blancas.jpeg?auto=compress&cs=tinysrgb&w=600",
    totalPrice: 34999,
    items: [
      { name: "Camisa", price: 13999, icon: Shirt },
      { name: "Pantalón", price: 17999, icon: Users },
      { name: "Accesorios", price: 4999, icon: Star }
    ],
    rating: 4.8
  },
  {
    id: 2,
    name: "Elegancia Profesional",
    image: "https://images.pexels.com/photos/27308637/pexels-photo-27308637/free-photo-of-elegante.png?auto=compress&cs=tinysrgb&w=600",
    totalPrice: 29900,
    items: [
      { name: "Blazer", price: 12.999, icon: Shirt },
      { name: "Pantalón", price: 10.999, icon: Users },
      { name: "Camisa", price: 6.999, icon: Star }
    ],
    rating: 4.9
  },
  {
    id: 3,
    name: "Estilo Relajado",
    image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=600",
    totalPrice: 65000,
    items: [
      { name: "Sudadera", price: 9999, icon: Shirt },
      { name: "Jeans", price: 16999, icon: Users },
      { name: "Zapatillas", price: 45999, icon: Star }
    ],
    rating: 4.7
  }
];

const ProductList = () => {
  return (
    <section id="outfits" className="py-16 mx-4 md:mx-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Outfits Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras combinaciones más populares, cuidadosamente seleccionadas por nuestros expertos en moda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outfits.map((outfit) => (
            <Card 
              key={outfit.id} 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={outfit.image} 
                  alt={outfit.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{outfit.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {outfit.name}
                </h3>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-primary">
                      ${outfit.totalPrice}
                    </span>
                    <span className="text-sm text-gray-500">
                      Precio total
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {outfit.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-600">{item.name}</span>
                      </div>
                      <span className="font-medium text-gray-800">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-blue-600 text-white py-2 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Ver detalles</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botón Ver más outfits */}
        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-blue-600 text-white py-3 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
            onClick={() => {
              // Preparado para futura funcionalidad
              console.log('Ver más outfits');
            }}
          >
            <Plus className="w-5 h-5" />
            <span>Ver más outfits</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
