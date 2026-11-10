'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { ClipboardList, Hammer, SearchCheck, MessageSquare } from 'lucide-react';

interface MethodologySlideProps {
  currentSubStep: number;
}

const steps = [
  {
    number: 1,
    title: 'Backlog Produit',
    subtitle: 'Cadrage et priorisation des exigences',
    icon: ClipboardList,
  },
  {
    number: 2,
    title: 'Sprint',
    subtitle: 'Développement itératif d\'incréments testés',
    icon: Hammer,
  },
  {
    number: 3,
    title: 'Revue',
    subtitle: 'Contrôle et validation des livrables',
    icon: SearchCheck,
  },
  {
    number: 4,
    title: 'Rétrospective',
    subtitle: 'Optimisation continue du processus',
    icon: MessageSquare,
  },
];

export function MethodologySlide({ currentSubStep }: MethodologySlideProps) {
  return (
    <div className="flex-1 flex flex-col justify-between py-2">
      <SlideHeader
        section="MÉTHODOLOGIE"
        title="Scrum, adapté au travail individuel"
        highlightWords={['adapté au travail individuel']}
        subtitle="Un rythme agile et rigoureux adapté à un PFE individuel avec validation continue de la qualité."
      />

      {/* Stepper Flow Area */}
      <div className="flex-1 flex flex-col justify-center relative my-6">
        {/* Horizontal Connecting Base Line */}
        <div className="absolute top-[38%] left-[12%] right-[12%] h-[3px] bg-slate-200 -z-0 rounded-full" />
        
        {/* Animated Active Line */}
        <motion.div
          className="absolute top-[38%] left-[12%] h-[3px] bg-px-teal -z-0 rounded-full"
          initial={{ width: '0%' }}
          animate={{
            width: `${Math.min(100, Math.max(0, (currentSubStep - 1) * 33.33))}%`,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="grid grid-cols-4 gap-6 relative z-10 px-8">
          {steps.map((step, idx) => {
            const isVisible = currentSubStep >= idx + 1;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0.35,
                  y: isVisible ? 0 : 10,
                  scale: isVisible ? 1 : 0.95,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Circle Container with Number Badge */}
                <div className="relative mb-5">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isVisible
                        ? 'bg-white border-2 border-px-teal shadow-[0_4px_20px_rgba(0,184,179,0.25)]'
                        : 'bg-slate-100 border-2 border-slate-300'
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 transition-colors ${
                        isVisible ? 'text-px-teal' : 'text-slate-400'
                      }`}
                    />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-px-navy text-white text-xs font-mono font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-px-navy mb-1">{step.title}</h3>
                <p className="text-sm text-px-muted font-normal max-w-[180px]">
                  {step.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Loop Back Arrow (Retrospective -> Sprint) */}
        {currentSubStep >= 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center mt-6"
          >
            <div className="relative w-3/5 h-12">
              <svg
                viewBox="0 0 600 50"
                className="w-full h-full stroke-px-teal fill-none"
                style={{ strokeWidth: 2.5 }}
              >
                <path
                  d="M 520,5 Q 300,50 80,5"
                  strokeLinecap="round"
                />
                <polygon points="76,14 80,5 90,8" fill="#00B8B3" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-px-teal-dk font-mono -mt-2">
              Sprint après sprint
            </span>
          </motion.div>
        )}
      </div>

      <div className="text-xs text-slate-400 font-mono text-center">
        Cycle itératif : Sprints cadencés de 2 semaines avec jalons de validation et tests automatisés
      </div>
    </div>
  );
}
