'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { CheckCircle, Rocket, Github, Mail, Globe, MessageSquareQuote } from 'lucide-react';

export function ConclusionSlide() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="CONCLUSION & PERSPECTIVES"
        title="Bilan du Projet & Évolutions Futures"
        highlightWords={['Bilan du Projet']}
        subtitle="Synthèse des livrables techniques et opportunités d'industrialisation à grande échelle."
        badge="Conclusion"
      />

      <div className="grid grid-cols-2 gap-6 my-auto">
        {/* Left: Contributions & Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl border border-px-line shadow-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-px-navy">Livrables Majeurs Réalisés</h4>
            </div>

            <ul className="space-y-2.5 text-xs text-px-muted">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                <span>Modèle IA optimisé YOLOv8n (mAP 96.4%, 32ms) pour détection du port de casque.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                <span>Système embarqué Edge autonome avec alertes sonores et visuelles temps réel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                <span>Plateforme SaaS Next.js avec streaming WebSocket de télémétrie de flotte.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                <span>Architecture cloud résiliente conforme RGPD avec pipeline CI/CD automatisé.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 mt-4 border-t border-px-line flex items-center justify-between text-xs font-mono text-px-teal-dk">
            <span>PROJET VALIDÉ</span>
            <span>CODE 100% OPÉRATIONNEL</span>
          </div>
        </motion.div>

        {/* Right: Perspectives & Q&A */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl border border-px-line shadow-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-px-teal-lt text-px-teal flex items-center justify-center">
                <Rocket className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-px-navy">Perspectives & Déploiement</h4>
            </div>

            <ul className="space-y-2.5 text-xs text-px-muted mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>Intégration de communication V2X (Vehicle-to-Everything) pour feux intelligents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>Apprentissage fédéré (Federated Learning) sur les boîtiers de trottinettes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span>Pilote commercial avec flotte de 50 trottinettes sur campus connecté.</span>
              </li>
            </ul>
          </div>

          {/* Q&A Callout */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-px-teal" />
              <div>
                <span className="text-xs font-bold text-px-navy block">Merci de votre attention</span>
                <span className="text-[10px] text-px-muted">Place aux questions du Jury</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500">
              <span className="p-1.5 rounded-md bg-white border border-slate-200">
                <Github className="w-3.5 h-3.5" />
              </span>
              <span className="p-1.5 rounded-md bg-white border border-slate-200">
                <Globe className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Dépôt GitHub du projet : github.com/pixii-scooter/pixii-scooter-ai · ESPRIT 2026
      </div>
    </div>
  );
}
