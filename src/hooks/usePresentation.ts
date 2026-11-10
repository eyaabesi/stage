'use client';

import { useState, useEffect, useCallback } from 'react';
import { Slide } from '@/types/presentation';

export function usePresentation(slides: Slide[]) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slides[currentSlideIndex] || slides[0];

  // Dynamic 16:9 stage scaling
  useEffect(() => {
    function updateScale() {
      const stageW = 1280;
      const stageH = 720;
      const windowW = window.innerWidth;
      const windowH = window.innerHeight;
      const scale = Math.min(windowW / stageW, windowH / stageH);
      document.documentElement.style.setProperty('--stage-scale', scale.toString());
    }

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Fullscreen sync
  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const goToNext = useCallback(() => {
    const maxSubSteps = currentSlide?.totalSubSteps || 1;
    if (currentSubStep < maxSubSteps) {
      setCurrentSubStep((prev) => prev + 1);
    } else if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setCurrentSubStep(1);
    }
  }, [currentSlide, currentSlideIndex, currentSubStep, slides.length]);

  const goToPrev = useCallback(() => {
    if (currentSubStep > 1) {
      setCurrentSubStep((prev) => prev - 1);
    } else if (currentSlideIndex > 0) {
      const prevSlide = slides[currentSlideIndex - 1];
      setCurrentSlideIndex((prev) => prev - 1);
      setCurrentSubStep(prevSlide?.totalSubSteps || 1);
    }
  }, [currentSlideIndex, currentSubStep, slides]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlideIndex(index);
      setCurrentSubStep(1);
    }
  }, [slides.length]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.warn('Exit fullscreen failed:', err);
      });
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (['ArrowRight', 'Space', 'PageDown'].includes(e.code) || ['ArrowRight', ' ', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        goToNext();
      } else if (['ArrowLeft', 'PageUp'].includes(e.code) || ['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goToPrev();
      } else if (e.code === 'KeyF' || e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.code === 'Home' || e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.code === 'End' || e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToSlide, toggleFullscreen, slides.length]);

  return {
    currentSlide,
    currentSlideIndex,
    currentSubStep,
    totalSlides: slides.length,
    isFullscreen,
    goToNext,
    goToPrev,
    goToSlide,
    toggleFullscreen,
  };
}
