
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: "item-1",
    question: "¿Puedo comprar solo una prenda?",
    answer: "Sí, aunque nos especializamos en outfits completos, puedes comprar prendas individuales. Sin embargo, recomendamos los combos completos para obtener el mejor estilo y precio."
  },
  {
    id: "item-2",
    question: "¿Los outfits son personalizables?",
    answer: "¡Absolutamente! Puedes cambiar tallas, colores y accesorios. Nuestro sistema te permite adaptar cada outfit a tus preferencias y medidas específicas."
  },
  {
    id: "item-3",
    question: "¿Cómo funciona el envío?",
    answer: "Ofrecemos envío gratuito en compras superiores a €50. Los pedidos se procesan en 24-48 horas y la entrega toma entre 2-5 días hábiles según tu ubicación."
  },
  {
    id: "item-4",
    question: "¿Qué pasa si no me gusta el outfit?",
    answer: "Tienes 30 días para devolver cualquier prenda sin costo. Nuestro equipo de atención al cliente te ayudará con el proceso de cambio o devolución."
  },
  {
    id: "item-5",
    question: "¿Hay asesoría de estilo personalizada?",
    answer: "Sí, ofrecemos consultas virtuales con nuestros estilistas profesionales. Puedes agendar una sesión para recibir recomendaciones personalizadas según tu estilo de vida."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 mx-4 md:mx-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre OUTFITECH
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-gray-800 hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
