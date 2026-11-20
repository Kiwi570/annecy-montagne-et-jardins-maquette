# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 20:11:23 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261120-190455-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182029-standard | standard | toutes | toutes | 58 | 53 | 1 | échecs |
| 20261120-184308-standard | standard | toutes | toutes | 3 | 14 | 1 | échecs |
| 20261120-190320-standard-cible-partiel | standard | /,/eco-paturage | fichiers, mesures | 1 | 3 | 0 | échecs |
| 20261120-190422-standard-cible-partiel | standard | / | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261120-190455-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 4 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Albanais · bassins annécien et aixois » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/creation` — section#debut > div.conteneur.ouverture-croquis-grille > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Matériaux locaux, paillages sans plastique » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/entretien` — section#debut > div.conteneur.ouverture-scindee-grille > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Crédit d'impôt de 50 % pour les particuliers » _(1000×560 sansJs)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/eco-paturage` — li:nth-of-type(4) > figure.media.mosaique-media > picture > img « Moutons dans un pré fleuri au pied d’un bâtiment » — eco-pre (3/5, faible, 36 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

## À regarder

### section sans visuel (4)

- **section sans visuel** — `/` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/creation` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/eco-paturage` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/entretien` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creation : aucune section épinglée ou plein écran.
- Tient dans l'écran /eco-paturage : aucune section épinglée ou plein écran.
- Tient dans l'écran /entretien : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/creation,/eco-paturage,/entretien --seulement=fichiers,mesures
```
