# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 20:42:08 · 3 min · 6 page(s) · audit standard (étapes : fichiers, ecran, films)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-193913-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), films d’ouverture (10), films de transition (10), tient dans l’écran (5), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182029-standard | standard | toutes | toutes | 58 | 53 | 1 | échecs |
| 20261120-184308-standard | standard | toutes | toutes | 3 | 14 | 1 | échecs |
| 20261120-190320-standard-cible-partiel | standard | /,/eco-paturage | fichiers, mesures | 1 | 3 | 0 | échecs |
| 20261120-190422-standard-cible-partiel | standard | / | fichiers, mesures | 0 | 2 | 0 | complet |
| 20261120-190455-complet-partiel | complet | toutes | mesures, ecran | 4 | 4 | 0 | échecs |
| 20261120-191241-complet-cible-partiel | complet | /,/creation,/eco-paturage,/entretien | fichiers, mesures | 1 | 5 | 0 | échecs |
| 20261120-191652-complet-cible-partiel | complet | / | fichiers, mesures | 1 | 2 | 0 | échecs |
| 20261120-191820-complet-cible-partiel | complet | /,/eco-paturage | fichiers, mesures | 0 | 3 | 0 | complet |
| 20261120-192035-standard | standard | toutes | toutes | 2 | 13 | 2 | échecs |
| **20261120-193913-standard-partiel** (celle-ci) | standard | toutes | fichiers, ecran, films | 0 | 3 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/entretien` — à 73 ms (différence 49 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/entretien` — à 72 ms (différence 36 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 41 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /creation, /eco-paturage, /entretien.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2714 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2492 ms depuis le premier octet
- Ouverture /creation (1366×768) : 2491 ms depuis le premier octet
- Ouverture /eco-paturage (1366×768) : 2482 ms depuis le premier octet
- film de l'ouverture /eco-paturage 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /entretien (1366×768) : 2474 ms depuis le premier octet
- Ouverture / (390×844) : 2612 ms depuis le premier octet
- Ouverture /contact (390×844) : 2455 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /creation (390×844) : 2457 ms depuis le premier octet
- film de l'ouverture /creation 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /eco-paturage (390×844) : 2478 ms depuis le premier octet
- Ouverture /entretien (390×844) : 2479 ms depuis le premier octet
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creation : aucune section épinglée ou plein écran.
- Tient dans l'écran /eco-paturage : aucune section épinglée ou plein écran.
- Tient dans l'écran /entretien : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
