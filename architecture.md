# Architecture technique proposée

- **Frontend** : React (avec TypeScript pour la robustesse)
  - Pages principales : Accueil, Modules, Quiz, Synthèses, Notes, Historique, Glossaire
  - Composants : Navbar, Carte Module, Fiche pédagogique, Exercices interactifs, Badge, Carte mentale, AudioPlayer, etc.
- **Backend** : Node.js (Express) ou Django (Python)
  - Gestion des utilisateurs, progression, exercices, badges, contenus dynamiques
  - API RESTful pour communication avec le frontend
- **Base de données** : PostgreSQL (relationnelle, robuste)
- **Stockage média** : Cloud (ex : AWS S3 pour fichiers audio/vidéo)
- **Déploiement** : Vercel / Netlify (frontend), Heroku / Render / Railway (backend)