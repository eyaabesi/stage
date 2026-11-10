'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, User, Award, Calendar, Building2 } from 'lucide-react';

export function CoverSlide() {
  return (
    <div className="flex-1 flex flex-col justify-between py-4 relative">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-px-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <span className="px-3 py-1 rounded-full bg-px-teal-lt text-px-teal-dk font-mono text-xs font-bold border border-px-teal/20 flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          SOUTENANCE DE PROJET DE FIN D'ÉTUDES
        </span>
        <span className="text-xs font-mono text-px-muted uppercase tracking-wider">
          Filière Informatique & Systèmes Embarqués / IA
        </span>
      </motion.div>

      {/* Center Hero Title */}
      <div className="my-auto py-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-px-navy tracking-tight leading-[1.1] mb-4"
        >
          PIXII SCOOTER <span className="text-px-teal">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-px-muted max-w-3xl font-medium leading-snug"
        >
          Système Embarqué Intelligent de Sécurité Routière et Détection Multimodale en Temps Réel pour Micro-mobilité Urbaine
        </motion.p>
      </div>

      {/* Bottom Metadata Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-4 gap-4 pt-6 border-t border-px-line"
      >
        {/* Presenter */}
        <div className="bg-white p-3.5 rounded-xl border border-px-line shadow-card flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-px-teal-lt text-px-teal flex items-center justify-center shrink-0">
            <User className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Candidat</div>
            <div className="text-xs font-bold text-px-navy">Eya Abessi</div>
            <div className="text-[10px] text-px-muted">Élève Ingénieur</div>
          </div>
        </div>

        {/* Institution */}
        <div className="bg-white p-3.5 rounded-xl border border-px-line shadow-card flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Institution</div>
            <div className="text-xs font-bold text-px-navy">ESPRIT</div>
            <div className="text-[10px] text-px-muted">Tunis, Tunisie</div>
          </div>
        </div>

        {/* Industry Partner */}
        <div className="bg-white p-3.5 rounded-xl border border-px-line shadow-card flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Entreprise d'Accueil</div>
            <div className="text-xs font-bold text-px-navy">PIXII SAS</div>
            <div className="text-[10px] text-px-muted">Mobilité Intelligente</div>
          </div>
        </div>

        {/* Academic Year */}
        <div className="bg-white p-3.5 rounded-xl border border-px-line shadow-card flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">Année Académique</div>
            <div className="text-xs font-bold text-px-navy">2025 - 2026</div>
            <div className="text-[10px] text-px-muted">Session Officielle</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
