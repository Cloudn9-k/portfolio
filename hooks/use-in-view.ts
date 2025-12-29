/**
 * @file src/hooks/use-in-view.ts
 * @description A custom React hook that detects when an element is visible in the viewport.
 * It uses the Intersection Observer API for efficient detection.
 * @note This is a client-side hook because it uses browser-specific APIs.
 */
"use client"

import { useState, useEffect, RefObject } from 'react';

/**
 * A custom hook to track if a referenced element is in the viewport.
 * @param {RefObject<Element>} ref - A React ref attached to the element to observe.
 * @param {IntersectionObserverInit} [options] - Optional configuration for the Intersection Observer.
 * @returns {boolean} `true` if the element is in view, otherwise `false`.
 */
export function useInView(ref: RefObject<Element | null>, options?: IntersectionObserverInit): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Copy ref.current to a variable to ensure cleanup works correctly
    // even if ref.current changes or becomes null later.
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Unobserve immediately after it becomes visible (trigger once)
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      // Cleanup using the captured variable
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return isInView;
}