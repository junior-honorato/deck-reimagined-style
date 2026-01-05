import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-card flex items-center gap-4 px-6 py-3 rounded-full shadow-lg bg-card/80 backdrop-blur-xl border border-border/50">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="h-10 w-10 rounded-full hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="h-10 w-10 rounded-full hover:bg-primary/10 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="ml-4 pl-4 border-l border-border/50 text-sm font-body text-muted-foreground">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};
