# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 20:04:10 · 1 min · 2 page(s) · audit standard ciblé sur /,/eco-paturage (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-190320-standard-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (22), balayage (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182029-standard | standard | toutes | toutes | 58 | 53 | 1 | échecs |
| 20261120-184308-standard | standard | toutes | toutes | 3 | 14 | 1 | échecs |
| **20261120-190320-standard-cible-partiel** (celle-ci) | standard | /,/eco-paturage | fichiers, mesures | 1 | 3 | 0 | échecs |

## Échecs

### contraste sur image (1)

- **contraste sur image** — `/` — div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.actions.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander un devis » — 1.42:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/eco-paturage` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 41 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /eco-paturage.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/ --seulement=fichiers,mesures
```
