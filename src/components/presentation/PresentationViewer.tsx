import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideNavigation } from "./SlideNavigation";
import { SlideCover } from "./slides/SlideCover";
import { SlideObjetivo } from "./slides/SlideObjetivo";
import { SlideParticipantes } from "./slides/SlideParticipantes";
import { SlideAgenda1 } from "./slides/SlideAgenda1";
import { SlideAgenda2 } from "./slides/SlideAgenda2";
import { SlideRetrospectiva } from "./slides/SlideRetrospectiva";
import { SlideMatriz } from "./slides/SlideMatriz";
import { SlideProximosPassos } from "./slides/SlideProximosPassos";
import { SlideObrigado } from "./slides/SlideObrigado";

const slides = [
  { id: 1, component: SlideCover },
  { id: 2, component: SlideObjetivo },
  { id: 3, component: SlideParticipantes },
  { id: 4, component: SlideAgenda1 },
  { id: 5, component: SlideAgenda2 },
  { id: 6, component: SlideRetrospectiva },
  { id: 7, component: SlideMatriz },
  { id: 8, component: SlideProximosPassos },
  { id: 9, component: SlideObrigado },
];

export const PresentationViewer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />
    </div>
  );
};
