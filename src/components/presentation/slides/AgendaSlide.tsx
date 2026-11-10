'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { AlertTriangle, Lightbulb, GitBranch, Cpu, Smartphone, CheckCircle2, Compass } from 'lucide-react';

interface AgendaSlideProps {
  currentSubStep: number;
}

const agendaItems = [
  {
    num: '01',
    title: 'Contexte & Problématique',
    desc: 'L\'essor de la micro-mobilité et les défis critiques de sécurité routière.',
    icon: AlertTriangle,
  },
  {
    num: '02',
    title: 'Étude de l\'Existant & Objectifs',
    desc: 'Analyse comparative des systèmes ADAS et cahier des charges.',
    icon: Lightbulb,
  },
  {
    num: '03',
    title: 'Méthodologie & Architecture',
    desc: 'Cycle Scrum adapté et architecture logicielle modulaire en 5 couches.',
    icon: GitBranch,
  },
  {
    num: '04',
    title: 'Intelligence Artificielle & Edge Computing',
    desc: 'Entraînement YOLOv8, optimisation TensorRT et détection de port du casque.',
    icon: Cpu,
  },
  {
    num: '05',
    title: 'Plateforme Web & Application Mobile',
    desc: 'Supervision de flotte en temps réel, alertes instantanées et télémétrie.',
    icon: Smartphone,
  },
  {
    num: '06',
    title: 'Tests, Validation & Résultats',
    desc: 'Benchmarks de latence, précision mAP@50 et tests en conditions réelles.',
    icon: CheckCircle2,
  },
];

export function AgendaSlide({ currentSubStep }: AgendaSlideProps) {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="PLAN DE PRÉSENTATION"
        title="Structure de la Soutenance"
        highlightWords={['Soutenance']}
        subtitle="Un parcours structuré en 6 axes stratégiques, de la modélisation à la validation expérimentale."
        badge="6 Sections"
      />

      <div className="grid grid-cols-3 gap-4 my-auto">
        {agendaItems.map((item, index) => {
          const isVisible = currentSubStep >= index + 1;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: isVisible ? 1 : 0.25,
                y: isVisible ? 0 : 8,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isVisible
                  ? 'bg-white shadow-card border-px-line hover:border-px-teal/40'
                  : 'bg-slate-50/50 border-slate-200/40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm font-black text-px-teal">
                  {item.num}
                </span>
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isVisible ? 'bg-px-teal-lt text-px-teal' : 'bg-slate-100 text-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-px-navy mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-px-muted line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Durée estimée : 25 minutes de présentation + 15 minutes d'échanges avec le jury
      </div>
    </div>
  );
}
