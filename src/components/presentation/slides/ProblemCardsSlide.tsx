'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { AlertOctagon, ShieldAlert, Activity, ArrowUpRight } from 'lucide-react';

interface ProblemCardsSlideProps {
  currentSubStep: number;
}

const challenges = [
  {
    tag: 'Accidentalité Critique',
    color: '#E11D48',
    bg: '#FFF1F2',
    icon: AlertOctagon,
    metric: '+42%',
    metricLabel: 'Hausse annuelle des collisions urbaines',
    title: 'Vulnérabilité des Usagers',
    desc: 'L\'essor rapide des flottes en libre-service s\'accompagne d\'une multiplication alarmante des traumatismes graves et collisions avec piétons.',
  },
  {
    tag: 'Non-Conformité & Risque',
    color: '#D97706',
    bg: '#FEF3C7',
    icon: ShieldAlert,
    metric: '78%',
    metricLabel: 'Usagers sans casque de protection',
    title: 'Défaut d\'Équipement Passif',
    desc: 'La législation impose des règles rarement respectées faute de contrôle automatisé et d\'incitations directes embarquées sur le véhicule.',
  },
  {
    tag: 'Temps de Réaction',
    color: '#00B8B3',
    bg: '#E6FAF9',
    icon: Activity,
    metric: '< 1.2s',
    metricLabel: 'Fenêtre critique avant impact frontal',
    title: 'Angles Morts & Réactivité',
    desc: 'Les conducteurs disposent d\'un délai d\'évitement trop court lors d\'une intrusion soudaine d\'obstacle ou d\'ouverture de portière.',
  },
];

export function ProblemCardsSlide({ currentSubStep }: ProblemCardsSlideProps) {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="CONTEXTE & ENJEUX"
        title="3 Défis Majeurs de la Mobilité Urbaine"
        highlightWords={['3 Défis Majeurs']}
        subtitle="Constat chiffré justifiant le besoin d'une assistance active embarquée basée sur l'intelligence artificielle."
        badge="Problématique"
      />

      <div className="grid grid-cols-3 gap-6 my-auto">
        {challenges.map((card, index) => {
          const isVisible = currentSubStep >= index + 1;
          const Icon = card.icon;

          return (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: isVisible ? 1 : 0.25,
                y: isVisible ? 0 : 12,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                isVisible
                  ? 'bg-white shadow-card border-px-line'
                  : 'bg-slate-50/50 border-slate-200/50'
              }`}
            >
              {/* Top Tag & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-mono uppercase font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: card.bg, color: card.color }}
                  >
                    {card.tag}
                  </span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: card.bg, color: card.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="mb-4">
                  <div
                    className="text-4xl font-black tracking-tight"
                    style={{ color: card.color }}
                  >
                    {card.metric}
                  </div>
                  <div className="text-xs font-mono text-px-muted font-medium mt-0.5">
                    {card.metricLabel}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-px-navy mb-2">{card.title}</h3>
                <p className="text-xs text-px-muted leading-relaxed">{card.desc}</p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Indice #{index + 1}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Source : Rapports Sécurité Routière et Données Télématiques Micro-mobilité 2024-2025
      </div>
    </div>
  );
}
