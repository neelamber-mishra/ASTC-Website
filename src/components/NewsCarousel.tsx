import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsCarouselProps {
  news: NewsItem[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === news.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? news.length - 1 : current - 1);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [current]);
  
  if (news.length === 0) return null;
  
  return (
    <div className="relative h-[400px] md:h-[500px] w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={news[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="h-full bg-cover bg-center rounded-lg overflow-hidden" 
            style={{ backgroundImage: `url(${news[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-space-dark/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <p className="text-space-accent font-medium mb-2">{news[current].date}</p>
              <h3 className="text-white text-xl md:text-2xl font-display font-bold mb-2">{news[current].title}</h3>
              <p className="text-gray-300 mb-4 max-w-2xl">{news[current].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-space-dark/50 hover:bg-space-dark/70 p-2 rounded-full text-white focus:outline-none"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-space-dark/50 hover:bg-space-dark/70 p-2 rounded-full text-white focus:outline-none"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {news.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-space-accent w-5" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;