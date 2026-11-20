# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 20:16:42 · 4 min · 4 page(s) · audit complet ciblé sur /,/creation,/eco-paturage,/entretien (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-191241-complet-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (156), balayage (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182029-standard | standard | toutes | toutes | 58 | 53 | 1 | échecs |
| 20261120-184308-standard | standard | toutes | toutes | 3 | 14 | 1 | échecs |
| 20261120-190320-standard-cible-partiel | standard | /,/eco-paturage | fichiers, mesures | 1 | 3 | 0 | échecs |
| 20261120-190422-standard-cible-partiel | standard | / | fichiers, mesures | 0 | 2 | 0 | complet |
| 20261120-190455-complet-partiel | complet | toutes | mesures, ecran | 4 | 4 | 0 | échecs |
| **20261120-191241-complet-cible-partiel** (celle-ci) | complet | /,/creation,/eco-paturage,/entretien | fichiers, mesures | 1 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Albanais · bassins annécien et aixois » _(1000×560 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/creation` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/eco-paturage` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/entretien` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 41 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
