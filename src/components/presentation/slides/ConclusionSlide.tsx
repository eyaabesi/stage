'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, MessageSquareQuote, Github, Award, ArrowUpRight } from 'lucide-react';

export function ConclusionSlide() {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="CONCLUSION & PERSPECTIVES"
        title="Bilan du Projet & Évolutions Futures"
        highlightWords={['Bilan du Projet']}
        subtitle="Synthèse générale des réalisations et clôture officielle de la soutenance."
        badge="Conclusion"
      />

      <div className="flex-1 flex flex-col justify-center gap-4 my-auto">
        {/* 2-Sentence Coherent Conclusion Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-gradient-to-r from-px-navy via-[#0A2540] to-px-navy text-white p-5 rounded-2xl border border-px-teal/30 shadow-card relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(#00B8B3_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

          <div className="relative z-10 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-px-teal/20 border border-px-teal/40 text-px-teal flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <Sparkles className="w-5 h-5 text-px-teal" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-px-teal bg-px-teal/15 px-2 py-0.5 rounded border border-px-teal/30">
                  Conclusion du Projet
                </span>
                <span className="text-xs text-slate-300 font-mono">Synthèse en 2 phrases</span>
              </div>

              <p className="text-sm md:text-[14.5px] leading-relaxed text-slate-100 font-medium">
                <strong>PIXII SCOOTER AI</strong> concrétise un système embarqué intelligent associant vision par ordinateur et fusion multimodale pour renforcer activement la sécurité des usagers en milieu urbain.
                Grâce à une architecture logicielle modulaire et performante en 5 couches, le projet valide avec succès la faisabilité d&apos;une assistance proactive et d&apos;une supervision connectée de flotte, fiable et respectueuse de la vie privée.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Grid: Livrables & Remerciements */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left: Key Deliverables (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 bg-white p-4 rounded-xl border border-px-line shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-px-navy font-mono">
                  Livrables Techniques Majeurs
                </h4>
              </div>

              <ul className="space-y-2 text-xs text-px-muted">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                  <span>Modèle IA YOLOv8n optimisé TensorRT (96.4% mAP@50, 32ms) pour casque & obstacles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                  <span>Classification d&apos;état de chaussée par réseau GRU sur signaux IMU 50 Hz.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-px-teal mt-1.5 shrink-0" />
                  <span>Plateforme SaaS Next.js 14 et streaming WebSocket/MQTT ultra-basse latence.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2.5 mt-2.5 border-t border-px-line flex items-center justify-between text-[11px] font-mono text-px-teal-dk font-bold">
              <span>PROJET VALIDÉ</span>
              <span className="text-emerald-600 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> 100% OPÉRATIONNEL
              </span>
            </div>
          </motion.div>

          {/* Right: Merci pour votre attention & Q&A (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-6 bg-gradient-to-br from-px-teal-lt/40 via-white to-slate-50 p-4 rounded-xl border border-px-teal/30 shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-px-teal-lt text-px-teal flex items-center justify-center shrink-0">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono uppercase font-bold text-px-teal-dk tracking-wide">
                  Clôture de la Soutenance
                </span>
              </div>

              <div className="my-1.5">
                <h3 className="text-xl font-black text-px-navy tracking-tight leading-tight">
                  Merci pour votre attention
                </h3>
                <p className="text-xs text-px-muted mt-1 leading-snug">
                  Je suis désormais à votre entière disposition pour répondre aux questions du Jury.
                </p>
              </div>
            </div>

            <div className="pt-2.5 mt-2.5 border-t border-px-teal/20 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="font-semibold text-px-navy">Eya Abessi · ESPRIT 2026</span>
              <a
                href="https://github.com/eyaabesi/stage"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-px-teal hover:underline font-bold"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/eyaabesi/stage</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Dépôt officiel du projet : github.com/eyaabesi/stage · PIXII SCOOTER AI © 2026
      </div>
    </div>
  );
}
