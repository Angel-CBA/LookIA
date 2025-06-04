
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateEmail(email);
    setIsValid(valid);
    
    if (valid) {
      console.log('Email registrado:', email);
      setEmail('');
    }
  };

  return (
    <section className="py-16 mx-4 md:mx-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Enterate antes que nadie!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sé el primero en conocer nuestros nuevos outfits, ofertas exclusivas y tendencias de moda.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email aquí..."
                className={`flex-1 px-4 py-3 rounded-lg border ${
                  isValid ? 'border-gray-300' : 'border-red-500'
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <Button 
                type="submit"
                className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Registrarme
              </Button>
            </div>
            {!isValid && (
              <p className="text-red-500 text-sm mt-2">
                Por favor, ingresa un email válido
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
