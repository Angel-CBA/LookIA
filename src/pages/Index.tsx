
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import FeaturedOutfits from '../components/FeaturedOutfits';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import StyleQuiz from '../components/StyleQuiz';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <div id="featured">
        <FeaturedOutfits />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="outfits">
        <ProductList />
      </div>
      <div id="quiz">
        <StyleQuiz />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
