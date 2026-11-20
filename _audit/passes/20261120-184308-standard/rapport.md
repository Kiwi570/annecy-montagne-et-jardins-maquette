# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 20:00:55 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261120-184308-standard` · version ?v=1
- Échecs : **3**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (5), souris immobile (8), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-182029-standard | standard | toutes | toutes | 58 | 53 | 1 | échecs |
| **20261120-184308-standard** (celle-ci) | standard | toutes | toutes | 3 | 14 | 1 | échecs |

## Échecs

### contraste sur image (2)

- **contraste sur image** — `/` — div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.actions.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander un devis » — 1.46:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — 3.77:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/eco-paturage` — section#debut > div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Copropriétés, collectivités et entreprises » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (4)

- **section sans visuel** — `/` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/creation` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/eco-paturage` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/entretien` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/entretien` — à 72 ms (différence 49 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/entretien` — à 76 ms (différence 36 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 86 ms (différence 36 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/entretien` — écran différent à la même position après rechargement (5.0 %), voir comparaisons/rechargement-entretien-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 11 min de travail pour 30 min de budget, 13 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /creation, /eco-paturage, /entretien.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2669 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2492 ms depuis le premier octet
- Ouverture /creation (1366×768) : 2459 ms depuis le premier octet
- Ouverture /eco-paturage (1366×768) : 2477 ms depuis le premier octet
- Ouverture /entretien (1366×768) : 2492 ms depuis le premier octet
- film de l'ouverture /entretien 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2615 ms depuis le premier octet
- Ouverture /contact (390×844) : 2461 ms depuis le premier octet
- Ouverture /creation (390×844) : 2463 ms depuis le premier octet
- Ouverture /eco-paturage (390×844) : 2475 ms depuis le premier octet
- Ouverture /entretien (390×844) : 2458 ms depuis le premier octet
- bords de l’écran /creation 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 387 images d’intro, 18 de voile et 136 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creation : aucune section épinglée ou plein écran.
- Tient dans l'écran /eco-paturage : aucune section épinglée ou plein écran.
- Tient dans l'écran /entretien : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 428, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 172, tâche la plus longue 0 ms
- Fluidité /creation 1366×768 (molette) : 0 % d'images lentes sur 270, tâche la plus longue 0 ms
- Fluidité /eco-paturage 1366×768 (molette) : 0 % d'images lentes sur 280, tâche la plus longue 0 ms
- Fluidité /entretien 1366×768 (molette) : 0 % d'images lentes sur 283, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1356, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /creation 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /eco-paturage 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /entretien 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /creation : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /eco-paturage : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /entretien : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/eco-paturage --seulement=fichiers,mesures
```
