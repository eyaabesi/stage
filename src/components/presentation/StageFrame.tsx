'use client';

import React from 'react';
import { Slide } from '@/types/presentation';
import { Maximize2, Minimize2, ChevronUp, ChevronDown } from 'lucide-react';

interface StageFrameProps {
  currentSlide: Slide;
  currentSlideIndex: number;
  currentSubStep: number;
  totalSlides: number;
  slides: Slide[];
  isFullscreen: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  toggleFullscreen: () => void;
  children: React.ReactNode;
}

export function StageFrame({
  currentSlide,
  currentSlideIndex,
  currentSubStep,
  totalSlides,
  slides,
  isFullscreen,
  goToNext,
  goToPrev,
  goToSlide,
  toggleFullscreen,
  children,
}: StageFrameProps) {
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div className="presentation-stage relative rounded-none shadow-stage select-none">
      {/* 1. Hairline Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200/50 z-50">
        <div
          className="h-full bg-px-teal transition-all duration-300 ease-out shadow-[0_0_8px_#00B8B3]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 2. Top Header Navigation */}
      <header className="h-[64px] px-8 flex items-center justify-between border-b border-px-line z-40 bg-white/70 backdrop-blur-md">
        {/* Left Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-px-navy text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
            AI
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-px-navy tracking-tight">PIXII SCOOTER</span>
            <span className="text-[10px] text-px-muted font-mono uppercase">Soutenance 2026</span>
          </div>
        </div>

        {/* Center Brand */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold tracking-widest text-lg text-px-navy">
            PIXII<span className="text-px-teal font-black">.</span>AI
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-px-teal-lt text-px-teal-dk font-semibold border border-px-teal/20">
            PFE
          </span>
        </div>

        {/* Right Partner / School Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-px-navy tracking-wide">ESPRIT</span>
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
        </div>
      </header>

      {/* 3. Main Slide Stage Body */}
      <main className="flex-1 relative overflow-hidden px-12 py-6 flex flex-col justify-between">
        {children}
      </main>

      {/* 4. Bottom Footer Status Bar */}
      <footer className="h-[52px] px-8 flex items-center justify-between border-t border-px-line bg-white/60 backdrop-blur-md z-40">
        <div className="flex items-center gap-4">
          {/* Slide Number & Section */}
          <div className="font-mono text-xs font-semibold text-px-navy flex items-center gap-2">
            <span>
              {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-px-muted font-sans uppercase tracking-wider text-[11px] font-bold">
              {currentSlide.section}
            </span>
          </div>

          {/* Sub-step Fragment Dots */}
          {currentSlide.totalSubSteps > 1 && (
            <div className="flex items-center gap-1.5 ml-2">
              {Array.from({ length: currentSlide.totalSubSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < currentSubStep
                      ? 'bg-px-teal scale-110 shadow-[0_0_6px_rgba(0,184,179,0.6)]'
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Context Disclaimer / Presenter Note */}
        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-3">
          <span>Appuyez sur Espace ou les flèches pour naviguer</span>
          <span>•</span>
          <span>Appuyez sur F pour le plein écran</span>
        </div>
      </footer>

      {/* 5. Right Slide Navigation Rail */}
      <aside className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 z-50 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-px-line shadow-lg">
        <button
          onClick={goToPrev}
          title="Diapositive précédente"
          className="p-1 rounded-full text-slate-400 hover:text-px-navy hover:bg-slate-100 transition"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>

        <div className="flex flex-col gap-1 max-h-[360px] overflow-y-auto px-1 py-0.5">
          {slides.map((s, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <div key={s.id} className="relative group flex items-center justify-center">
                <button
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-200 rounded-full ${
                    isActive
                      ? 'w-2.5 h-6 bg-px-teal shadow-[0_0_8px_#00B8B3]'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
                {/* Tooltip */}
                <div className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-px-navy text-white text-[10px] font-sans font-medium px-2 py-1 rounded shadow-md whitespace-nowrap z-50">
                  {String(idx + 1).padStart(2, '0')}. {s.title}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={goToNext}
          title="Diapositive suivante"
          className="p-1 rounded-full text-slate-400 hover:text-px-navy hover:bg-slate-100 transition"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>

        <div className="w-3.5 h-[1px] bg-slate-200 my-0.5" />

        <button
          onClick={toggleFullscreen}
          title="Basculer plein écran (F)"
          className="p-1 rounded-full text-slate-500 hover:text-px-teal hover:bg-slate-100 transition"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </aside>
    </div>
  );
}
