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

## 🎙️ Guide de Soutenance & Script Oral (Speech par Slide)

Ce guide fournit le **discours mot-à-mot** recommandé pour une soutenance de **15 à 20 minutes** devant le Jury ESPRIT. Il inclut les transitions fluides, les temps indicatifs et les indications d'interaction scénique (clavier / fragments).

```
⏱️ Timing global recommandé : ~15 à 18 minutes de présentation + 10 à 15 minutes de questions/réponses
```

---

### 🟢 Slide 01 — Couverture (Page de Garde)
- **Titre affiché :** *PIXII SCOOTER AI — Système Embarqué Intelligent de Sécurité Routière et Détection Multimodale en Temps Réel pour Micro-mobilité Urbaine*
- **Durée estimée :** ~1 min 30 s
- **Objectif :** Poser le cadre institutionnel, capter l'attention du jury, formuler l'intitulé avec assurance et annoncer la collaboration avec l'entreprise d'accueil.

#### 🗣️ Discours oral :
> « Bonjour à toutes et à tous.  
> Monsieur le Président du jury, chers membres du jury, chers encadrants et invités.  
> 
> Je m'appelle **Eya Abessi**, élève ingénieure en dernière année à **ESPRIT** au sein de la filière Informatique et Systèmes Embarqués / Intelligence Artificielle.  
> J'ai le grand plaisir de vous présenter aujourd'hui les résultats de mon projet de fin d'études mené en partenariat avec l'entreprise **PIXII SAS**, spécialisée dans les solutions de mobilité urbaine intelligente.  
> 
> Ce projet s'intitule **PIXII SCOOTER AI : Système Embarqué Intelligent de Sécurité Routière et Détection Multimodale en Temps Réel pour la Micro-mobilité Urbaine**.  
> L'objectif central de ce travail d'ingénieur a été de concevoir, développer et valider un écosystème technologique complet — depuis l'intelligence artificielle embarquée sur la trottinette jusqu'à la plateforme cloud de supervision — capable d'anticiper les dangers routiers, de protéger le conducteur et d'optimiser la gestion des flottes partagées.  
> 
> Permettez-moi dès à présent de vous présenter la structure de cette soutenance. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour passer à la diapositive suivante.*

---

### 🟢 Slide 02 — Plan de Présentation (Agenda)
- **Titre affiché :** *Structure de la Soutenance (6 Sections)*
- **Durée estimée :** ~1 min 15 s
- **Objectif :** Donner de la lisibilité au discours et montrer une démarche scientifique et d'ingénierie rigoureuse.

#### 🗣️ Discours oral :
> « Notre présentation s'articulera autour de six axes stratégiques :  
> 
> *(Clic 1)* **Premièrement**, nous aborderons le **Contexte et la Problématique**, en analysant les défis critiques de sécurité induits par l'explosion des trottinettes électriques en ville.  
> *(Clic 2)* **Deuxièmement**, nous examinerons l'**Étude de l'Existant et les Objectifs**, afin de mettre en lumière les limites des solutions actuelles et de fixer notre cahier des charges.  
> *(Clic 3)* **Troisièmement**, nous détaillerons notre **Méthodologie Agile et l'Architecture Système**, articulée en cinq couches modulaires et événementielles.  
> *(Clic 4)* **Quatrièmement**, nous plongerons au cœur de l'**Intelligence Artificielle et de l'Edge Computing**, avec l'entraînement du modèle YOLOv8, son optimisation TensorRT et la fusion multimodale.  
> *(Clic 5)* **Cinquièmement**, nous ferons la démonstration de notre **Plateforme Web et Application Mobile** de supervision télématique en temps réel.  
> *(Clic 6)* **Enfin**, nous conclurons avec les **Tests, la Validation expérimentale** des performances et le bilan des livrables. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> après le 6ᵉ fragment pour accéder à la problématique.*

---

### 🟢 Slide 03 — Contexte & Enjeux (Les 3 Défis Majeurs)
- **Titre affiché :** *3 Défis Majeurs de la Mobilité Urbaine*
- **Durée estimée :** ~2 min 15 s
- **Objectif :** Légitimer la raison d'être du projet avec des constats chiffrés réels et créer une tension narrative sur le besoin d'aide active.

#### 🗣️ Discours oral :
> « Ces dernières années, la micro-mobilité a profondément transformé nos centres urbains, offrant une alternative écologique et rapide. Cependant, cette adoption massive s'est heurtée à une réalité alarmante, illustrée par trois constats majeurs :  
> 
> *(Clic 1 — Accidentalité)* **Le premier défi est l'accidentalité critique** : nous constatons une augmentation annuelle de **+42%** des collisions impliquant des engins de déplacement personnel. La trottinette ne possède aucune carrosserie de protection : en cas d'impact avec un piéton ou un véhicule, l'usager subit directement le choc, conduisant à des traumatismes corporels sévères.  
> 
> *(Clic 2 — Non-Conformité)* **Le deuxième défi réside dans le défaut d'équipement passif** : plus de **78%** des conducteurs en libre-service ne portent pas de casque. Bien que les réglementations locales l'encouragent ou l'imposent, il n'existe aujourd'hui aucun moyen automatisé et dissuasif pour vérifier ce port avant le déverrouillage de l'engin.  
> 
> *(Clic 3 — Temps de Réaction)* **Le troisième défi est la fenêtre critique de réaction** : dans le trafic dense, un conducteur dispose souvent de **moins de 1,2 seconde** pour éviter une portière qui s'ouvre brusquement, un obstacle au sol ou un piéton masqué. L'œil humain ne suffit plus ; une assistance technologique proactive est indispensable.  
> 
> Face à cette triple problématique, notre mission a été de doter la trottinette d'une vision intelligente et d'une capacité d'anticipation active. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour aborder la méthodologie.*

---

### 🟢 Slide 04 — Méthodologie (Scrum Adapté au PFE Individuel)
- **Titre affiché :** *Scrum, adapté au travail individuel (Cycle itératif en 4 phases)*
- **Durée estimée :** ~2 min
- **Objectif :** Démontrer sa rigueur de gestion de projet en solo, son autonomie et l'application stricte des principes agiles.

#### 🗣️ Discours oral :
> « Pour mener à bien un projet d'une telle envergure combinant hardware, IA, backend et frontend dans un cadre individuel, j'ai adapté les principes du framework **Scrum** à une dynamique d'ingénieur solo :  
> 
> *(Clic 1 — Backlog)* Tout d'abord, le **Backlog Produit** : j'ai décomposé le cahier des charges en *User Stories* précises, classées par valeur métier et complexité technique, garantissant que chaque développement répond à une exigence mesurable.  
> 
> *(Clic 2 — Sprint)* Ensuite, des **Sprints cadencés de deux semaines** : chaque sprint était dédié à la production d'un incrément logiciel ou matériel fonctionnel et testable, qu'il s'agisse de l'inférence TensorRT, des microservices FastAPI ou de l'interface client.  
> 
> *(Clic 3 — Revue)* À la fin de chaque itération, la **Revue de Sprint** me permettait de valider les performances obtenues sur banc d'essai matériel et de faire des points d'étape réguliers avec mon encadrant industriel et académique.  
> 
> *(Clic 4 — Rétrospective)* Enfin, la **Rétrospective** : un temps d'analyse essentiel pour identifier les goulots d'étranglement — comme la consommation thermique du Jetson ou la latence réseau — afin d'ajuster immédiatement la stratégie du sprint suivant.  
> 
> Cette discipline itérative a permis de sécuriser le calendrier et de maintenir un niveau de qualité constant grâce à des tests automatisés continus. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour passer à l'architecture système.*

---

### 🟢 Slide 05 — Architecture Système (5 Couches Événementielles)
- **Titre affiché :** *Architecture Modulaire et Événementielle en 5 Couches*
- **Durée estimée :** ~2 min 45 s
- **Objectif :** Démontrer une solide compétence d'architecture logicielle distribuée (Edge-to-Cloud), résiliente et conforme aux standards industriels.

#### 🗣️ Discours oral :
> « Pour répondre à la contrainte d'une latence inférieure à 100 millisecondes et garantir la tolérance aux pannes réseau, j'ai conçu une **architecture modulaire en 5 couches**, articulée autour du paradigme événementiel :  
> 
> *(Clic 1 — Présentation)* **En couche 1, la Présentation & Client** : un tableau de bord Next.js 14 pour la supervision de flotte par les opérateurs, couplé à une Progressive Web App pour le conducteur.  
> 
> *(Clic 2 — Passerelle)* **En couche 2, la Passerelle API & Sécurité** : protégée par Traefik et Nginx, elle gère l'authentification par tokens JWT, le filtrage de requêtes et les connexions bidirectionnelles WebSocket et MQTT pour le streaming des métriques.  
> 
> *(Clic 3 — IA & Inférence)* **En couche 3, le Cœur IA & Inférence** : exécuté sur le matériel embarqué NVIDIA Jetson, ce module intègre notre modèle YOLOv8 optimisé en demi-précision FP16 via TensorRT pour la détection instantanée du casque et des obstacles urbains.  
> 
> *(Clic 4 — Microservices)* **En couche 4, les Microservices Métier** : développés sous FastAPI et NestJS, ils orchestrent le calcul des scores de risque, la détection des comportements imprudents et la distribution instantanée des alertes via des workers asynchrones Celery.  
> 
> *(Clic 5 — Données)* **En couche 5, la Persistance** : combinant TimescaleDB pour les séries temporelles de vitesse et de position, PostgreSQL pour les entités métier, Redis pour le cache en mémoire et MinIO pour le stockage sécurisé des journaux vidéo.  
> 
> *(Optionnel : bascule sur le Schéma Global)* Le flux s'exécute ainsi de manière fluide : la caméra et l'IMU alimentent l'IA locale, qui transmet les événements filtrés aux microservices cloud, immédiatement restitués sur le tableau de bord des superviseurs. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour lancer la démonstration produit.*

---

### 🟢 Slide 06 — Démonstration Produit (Supervision & IA Embarquée)
- **Titre affiché :** *Interface de Supervision & IA Embarquée (Démo en direct)*
- **Durée estimée :** ~3 min
- **Objectif :** Présenter les preuves concrètes du prototype opérationnel, la capture caméra réelle avec boîtes englobantes et la synchronisation télématique.

#### 🗣️ Discours oral :
> « Passons maintenant à la concrétisation visuelle du projet avec l'interface de supervision connectée à notre véhicule de test.  
> 
> Comme vous pouvez l'observer sur cette vue en direct scindée en deux panneaux :  
> 
> **Sur la partie gauche**, vous observez le flux capturé par la caméra grand-angle avant de la trottinette. Le modèle YOLOv8n fonctionne ici à **60 images par seconde** avec une résolution Full HD et une latence de traitement ultra-réduite de **32 millisecondes seulement**.  
> Vous constatez que le système identifie avec succès les différents usagers de la scène : le bus avec une confiance de **87%**, ainsi que les piétons situés sur la trajectoire avec une précision supérieure à **85%**. L'algorithme vérifie simultanément la conformité du port du casque en temps réel.  
> 
> **Sur la partie droite**, nous visualisons le jumeau numérique de la trottinette numéro 042 géolocalisée sur le campus de l'Esprit Technopôle :  
> - La vitesse instantanée est de **21,4 km/h**.  
> - La tension de batterie et l'autonomie restante sont monitorées en temps réel.  
> - Le **Score de Conduite global** est calculé dynamiquement — ici à **96/100** — en pondérant les accélérations brusques, le respect des zones piétonnes et le port du casque.  
> Dès qu'une anomalie survient, un journal d'événements horodaté consigne l'alerte à la fois localement et sur le cloud pour les gestionnaires de flotte. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour analyser la matrice de conformité.*

---

### 🟢 Slide 07 — Validation & Résultats (Matrice du Cahier des Charges)
- **Titre affiché :** *Matrice de Conformité du Cahier des Charges (KPIs & Validation)*
- **Durée estimée :** ~2 min 30 s
- **Objectif :** Rassurer le jury sur la rigueur scientifique avec des métriques chiffrées (mAP, FPS, latence, RGPD) et prouver la validation à 100%.

#### 🗣️ Discours oral :
> « Pour juger de la pertinence de ce système, nous avons confronté l'ensemble de nos exigences initiales à des mesures expérimentales rigoureuses :  
> 
> *(Clic 1 — Précision Casque)* **Première exigence : la précision de détection du casque.**  
> Le cahier des charges exigeait un mAP@50 supérieur à 90% dans des conditions météo variées. Notre modèle atteint **96,4% de mAP@50**, validant une discrimination parfaite même sous éclairage rasant ou de nuit.  
> 
> *(Clic 2 — Débit & Latence)* **Deuxième exigence : le temps réel embarqué.**  
> L'objectif était de dépasser 25 images par seconde avec une latence d'alerte inférieure à 50 millisecondes. Sur notre cible NVIDIA Jetson Nano, nous atteignons **31,2 IPS stables et 32 ms de latence totale**, garantissant une alerte bien avant le délai critique de collision.  
> 
> *(Clic 3 — Tolérance Réseau)* **Troisième exigence : la résilience hors-ligne (Offline-First).**  
> En cas de traversée de zone blanche ou de tunnel, le tampon local SQLite stocke l'intégralité des signaux télématiques et synchronise automatiquement les données dès le rétablissement de la 4G/5G, sans aucune perte d'information (**100% de données préservées**).  
> 
> *(Clic 4 — RGPD)* **Quatrième exigence : la conformité RGPD et la confidentialité.**  
> Grâce à notre pipeline d'anonymisation directement exécuté en bordure de réseau (Edge Blur), les visages et plaques d'immatriculation sont floutés avant tout téléversement cloud, garantissant un respect absolu de la vie privée.  
> 
> Avec un **taux de validation global de 96,4%**, les quatre piliers du projet sont pleinement validés. »

*👉 Action scénique : Appuyer sur <kbd>→</kbd> pour atteindre la slide de conclusion.*

---

### 🟢 Slide 08 — Conclusion & Bilan (Clôture Officielle)
- **Titre affiché :** *Bilan du Projet & Évolutions Futures*
- **Durée estimée :** ~1 min 30 s
- **Objectif :** Résumer le projet en 2 phrases fortes, remercier chaleureusement le jury et ouvrir la session de questions avec confiance.

#### 🗣️ Discours oral :
> « Pour conclure cette présentation, j'aimerais synthétiser l'apport de ce projet en deux points fondamentaux :  
> 
> **En premier lieu**, **PIXII SCOOTER AI concrétise un système embarqué intelligent associant vision par ordinateur et fusion multimodale pour renforcer activement la sécurité des usagers en milieu urbain.**  
> **En second lieu**, **grâce à une architecture logicielle modulaire et performante en 5 couches, ce travail démontre avec succès la faisabilité d'une assistance proactive et d'une supervision connectée de flotte, à la fois fiable, économique et respectueuse de la vie privée.**  
> 
> Ce projet de fin d'études m'a permis de consolider une double compétence en ingénierie de l'intelligence artificielle appliquée et en développement de systèmes distribués de bout en bout.  
> 
> L'ensemble du code source, de la suite de tests et de la documentation technique est disponible publiquement sur mon dépôt GitHub.  
> 
> **Je vous remercie chaleureusement pour votre bienveillante attention, et je suis désormais à votre entière disposition pour répondre à toutes vos questions.** »

---

### 💡 Conseils Clés pour la Prestation Orale d'Eya :
1. **Regard & Posture :** Balayez du regard tous les membres du jury équitablement. Évitez de lire vos notes ou l'écran ; les diapositives servent de support visuel dynamique, votre parole apporte l'expertise.
2. **Rythme & Silences :** Marquez une pause nette de 2 secondes avant et après chaque transition majeure (par exemple avant d'aborder l'Architecture ou la Démonstration).
3. **Maniement des touches :** Utilisez une télécommande de présentation sans fil ou la touche <kbd>Espace</kbd> pour faire progresser les fragments avec assurance.
4. **Questions du jury :** Écoutez chaque question jusqu'au bout sans interrompre, reformulez brièvement (« *Si j'ai bien compris, votre question porte sur l'optimisation TensorRT en mémoire...* ») et appuyez-vous sur les slides pour illustrer votre réponse technique.

---

## 📄 Licence


Ce projet est sous licence MIT - voir le fichier LICENSE pour plus d'informations.
Copyright (c) 2026 Eya Abessi - ESPRIT / PIXII SAS.
