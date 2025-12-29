"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Cat, X } from 'lucide-react';
import { Button } from './ui/button';
import { tourSteps, TourStep } from '@/lib/tour-data';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export const TOUR_STORAGE_KEY = 'hasCompletedQuantumTour_v2';

type TourStatus = 'inactive' | 'running' | 'completed';
type TourDisplayState = 'closed' | 'open';

export default function GuidedTour() {
  const [status, setStatus] = useState<TourStatus>('inactive');
  const [displayState, setDisplayState] = useState<TourDisplayState>('closed');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  
  const pathname = usePathname();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentStep: TourStep | null = tourSteps[stepIndex] || null;
  const isFinalStep = stepIndex === tourSteps.length - 1;

  const cleanup = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const highlightedElement = document.querySelector('.animate-tour-glow');
    highlightedElement?.classList.remove('animate-tour-glow');
  }, []);

  const advanceTour = useCallback((forceNextStep?: number) => {
    cleanup();
    const nextStepIndex = typeof forceNextStep === 'number' ? forceNextStep : stepIndex + 1;
    
    if (nextStepIndex >= tourSteps.length) {
      setStatus('completed');
      setStepIndex(tourSteps.length - 1);
      try {
        localStorage.setItem(TOUR_STORAGE_KEY, 'true');
      } catch (error) { console.error("Could not write to localStorage:", error); }
    } else {
      setStepIndex(nextStepIndex);
    }
  }, [stepIndex, cleanup]);

  const handleAction = useCallback((action?: TourStep['action']) => {
    if (!action) {
      advanceTour();
      return;
    }

    if (action.type === 'scroll_to') {
      const element = document.getElementById(action.elementId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      const targetButton = document.getElementById(action.pointTo);
      targetButton?.classList.add('animate-tour-glow');
      setDisplayState('closed'); 
    }
  }, [advanceTour]);

  const restartTour = () => {
    cleanup();
    setStepIndex(0);
    setStatus('running');
    setDisplayState('open');
  };

  const handleOpen = () => {
    setIsTransitioning(true);
    setDisplayState('open');
    setTimeout(() => setIsTransitioning(false), 1000);
  }
  
  useEffect(() => {
    if (status !== 'running' || !currentStep) return;

    setDisplayState('open');
    setIsTransitioning(true);
    const transitionTimeout = setTimeout(() => setIsTransitioning(false), 1000);

    if (currentStep.autoAdvanceAfter) {
      timerRef.current = setTimeout(() => {
        advanceTour();
      }, currentStep.autoAdvanceAfter);
    }

    if (currentStep.awaits === 'click') {
      const targetId = currentStep.action?.pointTo;
      if (!targetId) return;
      
      const target = document.getElementById(targetId);
      const listener = () => {
        cleanup();
        if(targetId === 'begin-experiment-button') {
          setDisplayState('closed');
          timerRef.current = setTimeout(() => {
            advanceTour();
          }, 25000);
        }
      };
      
      target?.addEventListener('click', listener, { once: true });
      return () => target?.removeEventListener('click', listener);
    }

    if (currentStep.awaits === 'path_change') {
      const targetId = currentStep.action?.pointTo;
      if(targetId) {
        const targetButton = document.getElementById(targetId);
        targetButton?.classList.add('animate-tour-glow');
      }

      if(pathname === currentStep.action?.path) {
        cleanup();
        timerRef.current = setTimeout(() => {
          advanceTour();
        }, 500);
      }
    }

    if (isFinalStep) {
      timerRef.current = setTimeout(() => {
         setDisplayState('closed');
      }, 5000);
    }

    return () => {
      cleanup();
      clearTimeout(transitionTimeout);
    };
  }, [status, currentStep, advanceTour, pathname, handleAction, cleanup, isFinalStep]);

  useEffect(() => {
    try {
      const hasCompletedTour = localStorage.getItem(TOUR_STORAGE_KEY);
      if (hasCompletedTour) {
        setStatus('completed');
      } else {
        const startTimeout = setTimeout(() => {
          setStatus('running');
        }, 1500); 
        return () => clearTimeout(startTimeout);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const gameContainer = document.getElementById('quantum-conundrum-section');
    if (!gameContainer) return;
    
    const observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          setIsGameActive(target.classList.contains('fixed'));
        }
      }
    });
    observer.observe(gameContainer, { attributes: true });

    const gameCompletedListener = () => advanceTour();
    window.addEventListener('gameCompleted', gameCompletedListener);

    return () => {
      observer.disconnect();
      window.removeEventListener('gameCompleted', gameCompletedListener);
    };
  }, [advanceTour]);

  const handleClose = () => {
    cleanup();
    setDisplayState('closed');
    if (status !== 'completed') {
      try {
        localStorage.setItem(TOUR_STORAGE_KEY, 'true');
      } catch (error) {
        console.error("Could not write to localStorage:", error);
      }
      setStatus('completed');
    }
  };

  if (status === 'inactive' || isGameActive) {
    return null;
  }
  
  if (displayState !== 'open') {
     return (
        <div className="fixed bottom-4 left-4 z-[100]">
             <Button
                variant="outline"
                size="icon"
                className="rounded-full h-14 w-14 bg-card/70 backdrop-blur-md border-border/60 shadow-lg hover:scale-110 transition-transform p-3 sm:p-0"
                onClick={handleOpen}
              >
                <Cat className="h-7 w-7 text-primary" />
                <span className="sr-only">Open Tour Guide</span>
            </Button>
        </div>
    );
  }

  if (displayState === 'open' && currentStep) {
     return (
      <div 
        className={cn(
          "fixed bottom-4 left-4 z-[100] w-[calc(100%-2rem)] sm:max-w-sm rounded-xl border p-4 shadow-2xl backdrop-blur-lg bg-card/80",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-bottom-and-left data-[state=closed]:slide-out-to-bottom-and-left",
           isTransitioning && "animate-border-glow-fade"
        )}
        data-state={displayState === 'open' ? 'open' : 'closed'}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Cat className="h-6 w-6" />
            </div>
          </div>
          <div className="flex-grow space-y-3">
            <h3 className="font-bold text-primary">{currentStep.title}</h3>
            <div className="text-sm text-foreground/80 leading-relaxed">
              {currentStep.content}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-foreground/60">
                {isFinalStep ? `Final Step` : `${stepIndex + 1} / ${tourSteps.length}`}
              </span>
               {currentStep.action && !isFinalStep ? (
                <Button onClick={() => handleAction(currentStep.action)} size="sm">
                  {currentStep.action.label}
                </Button>
              ) : !currentStep.autoAdvanceAfter && !isFinalStep ? (
                <Button onClick={() => advanceTour()} size="sm">
                  Next
                </Button>
              ) : null}
            </div>
             {isFinalStep && (
                 <Button onClick={restartTour} size="sm" variant="outline" className="w-full mt-2">
                  Restart Tour
                </Button>
             )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 hover:bg-muted sm:h-7 sm:w-7 sm:-top-2 sm:-right-2"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close Tour</span>
          </Button>
      </div>
      </div>
    );
  }

  return null;
}