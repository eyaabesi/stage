'use client';

import React from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { ShieldCheck, Video, BatteryMedium, Gauge, AlertCircle, Wifi } from 'lucide-react';

interface MockupSlideProps {
  currentSubStep: number;
}

export function MockupSlide({ currentSubStep }: MockupSlideProps) {
  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <SlideHeader
        section="DÉMONSTRATION PRODUIT"
        title="Interface de Supervision & IA Embarquée"
        highlightWords={['Supervision & IA Embarquée']}
        subtitle="Visualisation en direct du flux vidéo annoté par YOLOv8 et télémétrie IoT synchronisée."
        badge="Démo en direct"
      />

      {/* macOS Window Mockup Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-2xl border border-px-line shadow-card overflow-hidden my-auto flex flex-col"
      >
        {/* macOS Window Titlebar */}
        <div className="h-9 bg-slate-100/90 border-b border-px-line px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          <div className="bg-white px-6 py-0.5 rounded-md border border-slate-200 text-[11px] font-mono text-px-muted flex items-center gap-1.5 shadow-xs">
            <span className="text-px-teal font-bold">https://</span>
            <span>app.pixii.ai/flotte/scooter-042/telemetrie</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>DIRECT 60 IPS</span>
          </div>
        </div>

        {/* Window Content: Split View */}
        <div className="grid grid-cols-12 h-[340px]">
          {/* Left: Video / AI Vision Stream */}
          <div className="col-span-7 bg-slate-900 relative p-4 flex flex-col justify-between overflow-hidden">
            {/* Real YOLO Camera Stream Image */}
            <img
              src="/images/detection-yolo.png"
              alt="Flux Caméra Détection YOLO"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />

            {/* Top HUD */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
                <Video className="w-3.5 h-3.5 text-px-teal" /> CAM-01 AVANT-RGB
              </span>
              <span className="text-emerald-400 font-bold bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                LATENCE : 32ms
              </span>
            </div>

            {/* Center Dynamic AI Overlay */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-black/65 backdrop-blur-md border border-px-teal/60 rounded-xl px-4 py-2 flex items-center gap-3 shadow-[0_0_20px_rgba(0,184,179,0.35)]"
              >
                <div className="w-8 h-8 rounded-lg bg-px-teal/20 text-px-teal flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-px-teal" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-bold">CASQUE & OBSTACLES DÉTECTÉS</div>
                  <div className="text-xs font-bold text-white">YOLOv8n : 4 Objets en Temps Réel</div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Stream Status */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
              <span>YOLOv8n-TensorRT FP16</span>
              <span className="text-px-teal font-semibold">1920x1080 · 60 IPS</span>
            </div>
          </div>

          {/* Right: Real-time Telemetry Dashboard */}
          <div className="col-span-5 bg-white p-5 flex flex-col justify-between border-l border-px-line">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-px-line">
                <div>
                  <h4 className="font-bold text-sm text-px-navy">Trottinette #042</h4>
                  <p className="text-[10px] font-mono text-px-muted">Zone : Esprit Technopôle</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-mono font-bold border border-emerald-200">
                  ACTIF
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-px-line">
                  <div className="flex items-center gap-1.5 text-xs text-px-muted font-medium mb-1">
                    <Gauge className="w-3.5 h-3.5 text-px-teal" />
                    <span>Vitesse</span>
                  </div>
                  <div className="text-xl font-black text-px-navy font-mono">
                    21.4 <span className="text-xs font-normal text-slate-400">km/h</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-px-line">
                  <div className="flex items-center gap-1.5 text-xs text-px-muted font-medium mb-1">
                    <BatteryMedium className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Batterie</span>
                  </div>
                  <div className="text-xl font-black text-px-navy font-mono">
                    84% <span className="text-xs font-normal text-slate-400">38V</span>
                  </div>
                </div>
              </div>

              {/* Safety Score Bar */}
              <div className="p-3 rounded-xl bg-px-teal-lt/50 border border-px-teal/20 mb-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-px-navy">Score de Conduite</span>
                  <span className="font-mono font-bold text-px-teal-dk">96 / 100</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-px-teal/20">
                  <div className="w-[96%] h-full bg-px-teal rounded-full" />
                </div>
              </div>
            </div>

            {/* Event log snippet */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-px-line text-[11px] font-mono text-px-muted flex items-center justify-between">
              <span className="text-emerald-600 font-bold">● Casque Détecté</span>
              <span className="text-slate-400">Il y a 2s</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Plateforme déployée sur conteneur Docker avec passerelle MQTT et WebSocket pour télémétrie ultra-basse latence
      </div>
    </div>
  );
}
