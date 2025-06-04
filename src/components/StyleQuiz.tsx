
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const StyleQuiz = () => {
  return (
    <section className="py-16 mx-4 md:mx-20">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Descubrí tu estilo ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nuestro quiz inteligente encuentra outfits perfectos para vos. 
            Solo 5 minutos para conocer tu estilo único.
          </p>
        </div>

        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => {
            // Preparado para futura ruta /quiz
            console.log('Navegando a /quiz');
          }}
        >
          Hacer el quiz
        </Button>
      </div>
    </section>
  );
};

export default StyleQuiz;
