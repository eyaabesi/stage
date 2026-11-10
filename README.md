# PIXII SCOOTER AI — Soutenance de Projet de Fin d'Études (PFE)

> **Système Embarqué Intelligent de Sécurité Routière et Détection Multimodale en Temps Réel pour Micro-mobilité Urbaine**

---

## 🎓 Informations Générales

- **Candidate :** Eya Abessi (Élève Ingénieure)
- **Institution :** ESPRIT (Tunis, Tunisie) — Filière Informatique & Systèmes Embarqués / IA
- **Entreprise d'Accueil :** PIXII SAS (Mobilité Intelligente)
- **Année Académique :** 2025 - 2026 (Session Officielle)

---

## 📌 Présentation du Projet

**PIXII SCOOTER AI** est une solution complète d'assistance active et de supervision temps réel conçue pour réduire l'accidentalité des trottinettes électriques en milieu urbain. Le système combine l'intelligence artificielle embarquée (Edge AI) et une plateforme cloud pour offrir une détection préventive et une analyse comportementale avancée.

### 🌟 Fonctionnalités Clés

- **Détection Visuelle Edge :** Modèle optimisé YOLOv8n pour la détection en temps réel du port du casque, des piétons, véhicules et obstacles sur la chaussée (< 35 ms de latence).
- **Analyse Multimodale de Conduite :** Fusion des données vidéo RGB et des signaux télématiques IMU (50 Hz) via un réseau GRU pour identifier l'état de la route (nids-de-poule, ralentisseurs).
- **Génération d'Alertes Intelligentes :** Conseiller d'alerte contextuel assisté par LLM (Gemini 1.5 Flash) avec bascule instantanée sur un moteur de règles déterministes.
- **Plateforme de Supervision de Flotte :** Tableau de bord Next.js 14 connecté en WebSocket/MQTT pour le suivi cartographique, les scores de conduite et la télémétrie de la batterie.
- **Support Hors-Ligne & RGPD :** Tampon SQLite local en cas de rupture réseau et floutage automatique des visages et plaques d'immatriculation à la source.

---

## 🏛️ Architecture du Système (5 Couches)

```
[ Caméra RGB & Capteurs IMU ] ──► [ YOLOv8n + GRU ] ──► [ Graphe de Scène & Score de Risque ]
                                                              │
                                                              ▼
[ Tableau de Bord Next.js ] ◄── [ WebSocket / MQTT ] ◄── [ Passerelle API FastAPI & NestJS ]
```

1. **Couche Présentation & Client :** Tableau de bord Next.js 14, UI Tailwind CSS, PWA mobile.
2. **Passerelle API & Sécurité :** Proxy Nginx/Traefik, authentification JWT, flux WebSockets.
3. **Moteur IA & Inférence :** YOLOv8n TensorRT FP16, estimation de trajectoire, détection d'anomalies.
4. **Microservices & Métier :** Hub télémétrique FastAPI, gestionnaire d'incidents Celery.
5. **Persistance & Courtier :** TimescaleDB/PostgreSQL, Redis Pub/Sub, MinIO Object Storage.

---

## 🚀 Installation et Lancement

### Prérequis
- **Node.js** 18+ ou 20+
- **npm** ou **yarn** / **pnpm**

### Commandes

```bash
# 1. Cloner le projet
git clone https://github.com/eyaabesi/stage.git
cd stage

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Compiler pour la production
npm run build
npm start

# 5. Lancer les tests End-to-End Playwright
npm run test:e2e
```

La présentation est accessible sur `http://localhost:3000`.

---

## ⌨️ Raccourcis Clavier de la Présentation

- <kbd>→</kbd> ou <kbd>Espace</kbd> ou <kbd>PageDown</kbd> : Avancer à la sous-étape / diapositive suivante
- <kbd>←</kbd> ou <kbd>PageUp</kbd> : Revenir à l'étape / diapositive précédente
- <kbd>F</kbd> : Basculer en mode Plein Écran (16:9 responsive auto-adaptatif)
- <kbd>Début (Home)</kbd> : Première diapositive (Couverture)
- <kbd>Fin (End)</kbd> : Dernière diapositive (Conclusion)

---

## 🧪 Tests & Validation

La suite de tests automatisés Playwright valide le cycle complet des diapositives, les animations et la conformité de tous les indicateurs du cahier des charges.

Pour afficher le rapport interactif de test :
```bash
npx playwright show-report
```

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus d'informations.
Copyright (c) 2026 Eya Abessi - ESPRIT / PIXII SAS.
