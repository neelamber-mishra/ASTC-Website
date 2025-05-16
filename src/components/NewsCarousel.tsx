import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsItem } from "../types";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface NewsCarouselProps {
  news: NewsItem[];
  autoPlayInterval?: number;
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({
  news,
  autoPlayInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [dragging, setDragging] = useState(false);

  const nextSlide = () => {
    setDirection("right");
    setCurrent(current === news.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent(current === 0 ? news.length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? "right" : "left");
    setCurrent(index);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      // Swiped right
      prevSlide();
    } else if (info.offset.x < -50) {
      // Swiped left
      nextSlide();
    }
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) return; // Pause auto-play while dragging

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [current, dragging]);

  if (news.length === 0) return null;

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={news[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          <div
            className="h-full bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${news[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-space-dark/90 via-transparent to-transparent"></div>
            <motion.div
              className="absolute bottom-0 left-0 p-6 md:p-8 w-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: dragging ? 20 : 0,
                opacity: dragging ? 0.7 : 1,
              }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-space-accent font-medium mb-2">
                {news[current].date}
              </p>
              <h3 className="text-white text-xl md:text-2xl font-display font-bold mb-2">
                {news[current].title}
              </h3>
              <p className="text-gray-300 mb-4 max-w-2xl">
                {news[current].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - hidden while dragging */}
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-space-dark/50 hover:bg-space-dark/70 p-2 rounded-full text-white focus:outline-none z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: dragging ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-space-dark/50 hover:bg-space-dark/70 p-2 rounded-full text-white focus:outline-none z-10"
        onClick={nextSlide}
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ opacity: dragging ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Indicators - hidden while dragging */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"
        animate={{ opacity: dragging ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {news.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-space-accent" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            animate={{
              width: index === current ? 20 : 10,
              opacity: index === current ? 1 : 0.7,
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default NewsCarousel;
