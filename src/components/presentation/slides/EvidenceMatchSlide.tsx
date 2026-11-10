'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Database, EyeOff } from 'lucide-react';

interface EvidenceMatchSlideProps {
  currentSubStep: number;
}

const requirements = [
  {
    icon: ShieldCheck,
    title: 'Détection Haute Précision du Casque',
    target: 'mAP@50 > 90% en conditions lumineuses variées',
    actual: '96.4% mAP@50',
    status: 'Satisfait',
    statusColor: '#059669',
    statusBg: '#ECFDF5',
  },
  {
    icon: Zap,
    title: 'Fréquence & Latence d\'Inférence Edge',
    target: 'Débit > 25 IPS et latence d\'alerte < 50ms',
    actual: '31.2 IPS (32ms)',
    status: 'Satisfait',
    statusColor: '#059669',
    statusBg: '#ECFDF5',
  },
  {
    icon: Database,
    title: 'Tolérance aux Pannes Réseau (Mode Hors-ligne)',
    target: 'Buffer SQLite local avec resynchronisation automatique',
    actual: '100% des données préservées',
    status: 'Satisfait',
    statusColor: '#059669',
    statusBg: '#ECFDF5',
  },
  {
    icon: EyeOff,
    title: 'Conformité RGPD & Anonymisation Edge',
    target: 'Floutage des visages et plaques avant téléversement cloud',
    actual: 'Floutage Edge natif',
    status: 'Satisfait',
    statusColor: '#059669',
    statusBg: '#ECFDF5',
  },
];

export function EvidenceMatchSlide({ currentSubStep }: EvidenceMatchSlideProps) {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="VALIDATION & RÉSULTATS"
        title="Matrice de Conformité du Cahier des Charges"
        highlightWords={['Matrice de Conformité']}
        subtitle="Confrontation rigoureuse entre les exigences initiales et les résultats expérimentaux mesurés."
        badge="KPIs & Validation"
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Donut Score Widget */}
        <div className="col-span-4 bg-white p-6 rounded-2xl border border-px-line shadow-card flex flex-col items-center justify-center text-center">
          <div className="relative w-36 h-36 flex items-center justify-center mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                className="stroke-slate-100 fill-none"
                strokeWidth="10"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                className="stroke-px-teal fill-none"
                strokeWidth="10"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 * (1 - 0.964) }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black text-px-navy font-mono">96.4%</span>
              <span className="text-[10px] uppercase font-bold text-slate-400">Taux Global</span>
            </div>
          </div>

          <h4 className="text-base font-bold text-px-navy">Exigences Validées</h4>
          <p className="text-xs text-px-muted mt-1">
            4 / 4 objectifs fonctionnels et de performance atteints avec succès.
          </p>
        </div>

        {/* Right: Requirements List */}
        <div className="col-span-8 flex flex-col gap-2.5">
          {requirements.map((req, idx) => {
            const isVisible = currentSubStep >= idx + 1;
            const Icon = req.icon;

            return (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0.25,
                  x: isVisible ? 0 : 10,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  isVisible
                    ? 'bg-white shadow-card border-px-line'
                    : 'bg-slate-50/50 border-slate-200/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-px-teal-lt text-px-teal flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-px-navy">{req.title}</h5>
                    <p className="text-[11px] text-px-muted">{req.target}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-px-navy px-2 py-1 bg-slate-50 rounded border border-slate-200">
                    {req.actual}
                  </span>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{ backgroundColor: req.statusBg, color: req.statusColor }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {req.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Mesures effectuées sur banc d'essai matériel NVIDIA Jetson Nano avec capteur Sony IMX219
      </div>
    </div>
  );
}
