'use client';

import React from 'react';
import { usePresentation } from '@/hooks/usePresentation';
import { presentationSlides } from '@/data/slides';
import { StageFrame } from '@/components/presentation/StageFrame';
import { AnimatePresence, motion } from 'framer-motion';

// Slides
import { CoverSlide } from '@/components/presentation/slides/CoverSlide';
import { AgendaSlide } from '@/components/presentation/slides/AgendaSlide';
import { ProblemCardsSlide } from '@/components/presentation/slides/ProblemCardsSlide';
import { MethodologySlide } from '@/components/presentation/slides/MethodologySlide';
import { ArchitectureSlide } from '@/components/presentation/slides/ArchitectureSlide';
import { MockupSlide } from '@/components/presentation/slides/MockupSlide';
import { EvidenceMatchSlide } from '@/components/presentation/slides/EvidenceMatchSlide';
import { ConclusionSlide } from '@/components/presentation/slides/ConclusionSlide';

export default function PresentationPage() {
  const {
    currentSlide,
    currentSlideIndex,
    currentSubStep,
    totalSlides,
    isFullscreen,
    goToNext,
    goToPrev,
    goToSlide,
    toggleFullscreen,
  } = usePresentation(presentationSlides);

  const renderSlideContent = () => {
    switch (currentSlide.type) {
      case 'cover':
        return <CoverSlide />;
      case 'agenda':
        return <AgendaSlide currentSubStep={currentSubStep} />;
      case 'problem':
        return <ProblemCardsSlide currentSubStep={currentSubStep} />;
      case 'methodology':
        return <MethodologySlide currentSubStep={currentSubStep} />;
      case 'architecture':
        return <ArchitectureSlide currentSubStep={currentSubStep} />;
      case 'mockup':
        return <MockupSlide currentSubStep={currentSubStep} />;
      case 'evidence':
        return <EvidenceMatchSlide currentSubStep={currentSubStep} />;
      case 'conclusion':
        return <ConclusionSlide />;
      default:
        return <div>Slide {currentSlide.title}</div>;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#020B18] flex items-center justify-center">
      <StageFrame
        currentSlide={currentSlide}
        currentSlideIndex={currentSlideIndex}
        currentSubStep={currentSubStep}
        totalSlides={totalSlides}
        slides={presentationSlides}
        isFullscreen={isFullscreen}
        goToNext={goToNext}
        goToPrev={goToPrev}
        goToSlide={goToSlide}
        toggleFullscreen={toggleFullscreen}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              y: -16,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            className="flex-1 flex flex-col justify-between h-full"
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </StageFrame>
    </div>
  );
}
