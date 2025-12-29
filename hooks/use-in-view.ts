/**
 * @file src/hooks/use-in-view.ts
 * @description A custom React hook that detects when an element is visible in the viewport.
 * It uses the Intersection Observer API for efficient detection.
 * @note This is a client-side hook because it uses browser-specific APIs.
 */
"use client"

import { useState, useEffect, RefObject } from 'react';
interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

/**
 * A custom hook to track if a referenced element is in the viewport.
 * @param {RefObject<Element>} ref - A React ref attached to the element to observe.
 * @param {UseInViewOptions} [options] - Configuration including threshold, rootMargin, and 'once'.
 * @returns {boolean} `true` if the element is in view, otherwise `false`.
 */
export function useInView(ref: RefObject<Element | null>, options?: UseInViewOptions): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options?.once) {
          observer.unobserve(element);
        }
      } else {
        if (!options?.once) {
           setIsInView(false);
        }
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]); 

  return isInView;
}