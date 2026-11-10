'use client';

import React, { useState } from 'react';
import { SlideHeader } from '../SlideHeader';
import { motion } from 'framer-motion';
import { Layout, Shield, Cpu, Server, Database, Image as ImageIcon, Layers } from 'lucide-react';

interface ArchitectureSlideProps {
  currentSubStep: number;
}

const layers = [
  {
    name: 'Couche Présentation & Client',
    badge: 'Application',
    color: '#E11D48',
    bg: '#FFF1F2',
    icon: Layout,
    components: ['Tableau de bord Next.js 14', 'Interface Tailwind CSS', 'Cartographie dynamique', 'Application Mobile PWA'],
  },
  {
    name: 'Passerelle API & Sécurité',
    badge: 'Passerelle',
    color: '#475569',
    bg: '#F8FAFC',
    icon: Shield,
    components: ['Proxy Nginx / Traefik', 'Authentification JWT', 'Limitation de débit', 'Flux WebSocket temps réel'],
  },
  {
    name: 'Moteur IA & Inférence',
    badge: 'Intelligence Centrale',
    color: '#00B8B3',
    bg: '#E6FAF9',
    icon: Cpu,
    components: ['Détection de casque YOLOv8', 'Estimation de trajectoire', 'TensorRT embarqué', 'Détection d\'anomalies'],
  },
  {
    name: 'Microservices & Logique Métier',
    badge: 'Services',
    color: '#2563EB',
    bg: '#EFF6FF',
    icon: Server,
    components: ['Hub télémétrique FastAPI', 'Gestion de flotte NestJS', 'Tâches asynchrones Celery', 'Répartiteur d\'alertes'],
  },
  {
    name: 'Persistance & Courtier de Messages',
    badge: 'Données',
    color: '#059669',
    bg: '#ECFDF5',
    icon: Database,
    components: ['PostgreSQL / TimescaleDB', 'Pub/Sub Redis temps réel', 'Stockage d\'objets MinIO', 'Journaux chronologiques'],
  },
];

export function ArchitectureSlide({ currentSubStep }: ArchitectureSlideProps) {
  const [viewDiagram, setViewDiagram] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between py-1">
      <div className="flex items-start justify-between">
        <SlideHeader
          section="ARCHITECTURE SYSTÈME"
          title="Architecture Modulaire et Événementielle en 5 Couches"
          highlightWords={['Modulaire et Événementielle']}
          subtitle="Conçue pour une télémétrie ultra-rapide (< 100 ms) et la synchronisation IA Edge-Cloud."
          badge="Conception Système"
        />

        {/* View Switcher Toggle */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 shrink-0 mt-1">
          <button
            onClick={() => setViewDiagram(false)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition ${
              !viewDiagram ? 'bg-white text-px-navy shadow-xs font-bold' : 'text-slate-500 hover:text-px-navy'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>5 Couches</span>
          </button>
          <button
            onClick={() => setViewDiagram(true)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition ${
              viewDiagram ? 'bg-white text-px-navy shadow-xs font-bold' : 'text-slate-500 hover:text-px-navy'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Schéma Global</span>
          </button>
        </div>
      </div>

      {viewDiagram ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-1 my-2 bg-white rounded-xl border border-px-line shadow-card p-4 flex flex-col items-center justify-center overflow-hidden"
        >
          <img
            src="/images/architecture-globale.png"
            alt="Schéma d'Architecture Globale du Système"
            className="max-h-[360px] w-auto object-contain rounded-lg shadow-sm"
          />
        </motion.div>
      ) : (
        <div className="flex-1 flex flex-col justify-center gap-2.5 my-2">
          {layers.map((layer, idx) => {
            const isVisible = currentSubStep >= idx + 1;
            const Icon = layer.icon;

            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isVisible ? 1 : 0.25,
                  x: isVisible ? 0 : -10,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                  isVisible
                    ? 'bg-white shadow-card border-px-line'
                    : 'bg-slate-50/50 border-slate-200/50'
                }`}
              >
                {/* Left Layer Badge & Name */}
                <div className="flex items-center gap-3 w-1/3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: layer.bg, color: layer.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded"
                        style={{ backgroundColor: layer.bg, color: layer.color }}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-px-navy">{layer.name}</h4>
                  </div>
                </div>

                {/* Right Component Chips */}
                <div className="flex items-center gap-2 flex-wrap justify-end flex-1">
                  {layer.components.map((comp, cIdx) => (
                    <span
                      key={cIdx}
                      className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-colors ${
                        isVisible
                          ? 'bg-slate-50 border-slate-200 text-px-navy font-medium shadow-sm'
                          : 'bg-transparent border-transparent text-slate-300'
                      }`}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="text-[11px] text-slate-400 font-mono text-center">
        Flux de données : Caméra & Capteurs Edge → MQTT / WebSockets → Moteur FastAPI → Tableau de bord Next.js
      </div>
    </div>
  );
}
