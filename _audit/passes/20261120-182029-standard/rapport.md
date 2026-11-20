# Rapport d’audit

Projet : `annecy-montagne-et-jardins-maquette` · 20/11/2026 19:38:22 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **58 échec(s)**
- Passe : `20261120-182029-standard` · version ?v=1
- Échecs : **58**
- À regarder : **53**
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

## Échecs

### image de partage (5)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `creation.html` — fichier introuvable : /assets/partage/creation-fr.jpg
- **image de partage** — `eco-paturage.html` — fichier introuvable : /assets/partage/eco-paturage-fr.jpg
- **image de partage** — `entretien.html` — fichier introuvable : /assets/partage/entretien-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### premier écran : information clé hors de l’écran (6)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Albanais · bassins annécien et aixois » _(320×568 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouverture-contact-grille > div.ouverture-texte > p.info-cle:nth-of-type(4) « 06 70 54 93 24 » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ouverture-contact-grille > div.ouverture-texte > p.info-cle:nth-of-type(4) « Albanais · bassins annécien et aixois » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/creation` — section#debut > div.conteneur.ouverture-croquis-grille > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Matériaux locaux, paillages sans plastique » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/eco-paturage` — section#debut > div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Copropriétés, collectivités et entreprises » _(844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, +2)_
- **premier écran : information clé hors de l’écran** — `/entretien` — section#debut > div.conteneur.ouverture-scindee-grille > div.ouverture-texte:nth-of-type(1) > p.info-cle:nth-of-type(4) « Crédit d'impôt de 50 % pour les particuliers » _(320×568 normal, 320×568 sansJs)_

### texte coupé (4)

- **texte coupé** — `/` — div#calcul-accueil-outil > div.calcul-barre:nth-of-type(2) > div.calcul-part.calcul-part--reste:nth-of-type(1) > span « Reste à votre charge » — le contenu dépasse de son cadre _(768×1024 normal, 320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/` — figure.carte-zone > svg > g.etiquettes:nth-of-type(5) > text.etiquette-lac:nth-of-type(4) — coupé par section#zone > div.conteneur.zone-grille > figure.carte-zone > svg _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/contact` — figure.carte-zone > svg > g.etiquettes:nth-of-type(5) > text.etiquette-lac:nth-of-type(4) — coupé par section#zone > div.conteneur.zone-grille > figure.carte-zone > svg _(390×844 normal, 320×568 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte coupé** — `/entretien` — div#calcul-entretien-outil > div.calcul-barre:nth-of-type(2) > div.calcul-part.calcul-part--reste:nth-of-type(1) > span « Reste à votre charge » — le contenu dépasse de son cadre _(320×568 normal, 768×1024 normal, 320×568 sansJs)_

### textes qui se chevauchent (17)

- **textes qui se chevauchent** — `/` — div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath — avec div.conteneur.hero-contenu:nth-of-type(2) > div.tampon:nth-of-type(2) > span.tampon-coeur > strong « 50 % » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, 1366×768 normal, +4)_
- **textes qui se chevauchent** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — avec div.conteneur.hero-contenu:nth-of-type(2) > div.tampon:nth-of-type(2) > span.tampon-coeur > strong « 50 % » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne:nth-of-type(1) > span.ligne-in « Vos jardins, » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne:nth-of-type(2) > span.ligne-in « au pied des » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/creation` — div > div.tete > h2 > em « et les » — avec div.tete > h2 > span.nobr > em « collectivités » _(320×568 normal, 768×1024 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/creation` — div > div.tete > h2 > em « et les » — avec div > div.tete > h2 > span.nobr « collectivités. » _(320×568 normal, 768×1024 normal, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/eco-paturage` — section#debut > div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > h1 « Des moutons pour vos pelouses. » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/eco-paturage` — div.ouverture-texte:nth-of-type(1) > h1 > span.nobr > em « pelouses » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal)_
- **textes qui se chevauchent** — `/eco-paturage` — div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > h1 > span.nobr « pelouses. » — avec div.tampon:nth-of-type(2) > svg.tampon-texte > text > textpath _(320×568 normal)_
- **textes qui se chevauchent** — `/eco-paturage` — div > div.tete > h2 > em « au pas du » — avec div.tete > h2 > span.nobr > em « troupeau » _(320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, +2)_
- **textes qui se chevauchent** — `/eco-paturage` — div > div.tete > h2 > em « au pas du » — avec div > div.tete > h2 > span.nobr « troupeau. » _(320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, +2)_
- **textes qui se chevauchent** — `/eco-paturage` — div.conteneur > div.tete > h2 > em « clé en » — avec div.tete > h2 > span.nobr > em « main » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/eco-paturage` — div.conteneur > div.tete > h2 > em « clé en » — avec div.conteneur > div.tete > h2 > span.nobr « main, » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/entretien` — div.conteneur.ouverture-scindee-grille > div.ouverture-visuel:nth-of-type(2) > figure.media.ouverture-scindee-media > figcaption.mention-ia « Illustration générée » — avec div.tampon > svg.tampon-texte > text > textpath _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/entretien` — div.conteneur.ouverture-scindee-grille > div.ouverture-visuel:nth-of-type(2) > figure.media.ouverture-scindee-media > figcaption.mention-ia « Illustration générée » — avec div.ouverture-visuel:nth-of-type(2) > div.tampon > span.tampon-coeur > strong « 50 % » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/entretien` — div.tampon > svg.tampon-texte > text > textpath — avec div.ouverture-visuel:nth-of-type(2) > div.tampon > span.tampon-coeur > strong « 50 % » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### élément sans nom accessible (6)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/contact` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/creation` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/eco-paturage` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/entretien` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/` — article#realisation-2 > figure.media.carte-real-media > picture > img « Élagueur encordé le long du tronc » — elagueur-tronc (3/5, faible, 37 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.confiance-grille:nth-of-type(1) > figure.media.confiance-photo > picture > img « L’équipe et son camion-benne au travail dans une r » — equipe-terrain (3/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/entretien` — li:nth-of-type(4) > figure.media.mosaique-media > picture > img « Broyeur de végétaux dans un jardin en pente » — entretien-broyeur (3/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### élément recouvert (6)

- **élément recouvert** — `/` — figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-albanais:nth-of-type(1) — par figure.carte-zone > svg > g.villes:nth-of-type(4) > text:nth-of-type(3) _(768×1024 normal, 390×844 normal)_
- **élément recouvert** — `/` — figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-aixois:nth-of-type(3) — par figure.carte-zone > svg > g.lacs:nth-of-type(3) > path.lac-eau:nth-of-type(4) _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/` — div.conteneur.zone-grille > figure.carte-zone > svg > g.siege:nth-of-type(6) — par figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-albanais:nth-of-type(1) _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/contact` — figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-albanais:nth-of-type(1) — par figure.carte-zone > svg > g.villes:nth-of-type(4) > text:nth-of-type(3) _(390×844 normal, 768×1024 normal)_
- **élément recouvert** — `/contact` — figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-aixois:nth-of-type(3) — par figure.carte-zone > svg > g.lacs:nth-of-type(3) > path.lac-eau:nth-of-type(4) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/contact` — div.conteneur.zone-grille > figure.carte-zone > svg > g.siege:nth-of-type(6) — par figure.carte-zone > svg > g.zones:nth-of-type(2) > path.zone.zone-albanais:nth-of-type(1) _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### contraste sur image (4)

- **contraste sur image** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — 4.30:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.actions.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander un devis » — 1.47:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — 2.68:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/eco-paturage` — section#debut > div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « ÉCO-PÂTURAGE » — 2.62:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.actions.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Demander un devis » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — div.conteneur.ouverture-contact-grille > div.ouverture-texte > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/eco-paturage` — div.conteneur.ouverture-plein-contenu > div.ouverture-texte:nth-of-type(1) > p.actions:nth-of-type(3) > a.bouton « Demander un devis » _(1366×768 sansJs)_

### texte sous 12 px (4)

- **texte sous 12 px** — `/contact` — div.devis-grille:nth-of-type(2) > form.formulaire.devis-form > ol.devis-progres > li.courant:nth-of-type(1) « 1 Votre besoin » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/contact` — div.devis-grille:nth-of-type(2) > form.formulaire.devis-form > ol.devis-progres > li:nth-of-type(2) « 2 Vous êtes » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/contact` — div.devis-grille:nth-of-type(2) > form.formulaire.devis-form > ol.devis-progres > li:nth-of-type(3) « 3 Votre terrain » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/contact` — div.devis-grille:nth-of-type(2) > form.formulaire.devis-form > ol.devis-progres > li:nth-of-type(4) « 4 Vos coordonnées » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 5 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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
- **section sans visuel** — `/creation` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/eco-paturage` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/entretien` — section#fin « Parlons de votre jardin. Entretien régulier, nouve » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### texte de contenu sous 13 px (ordinateur) (37)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(2) > div.hero-texte:nth-of-type(1) > p.surtitre.surtitre--clair:nth-of-type(1) « PAYSAGISTE · VALLIÈRES-SUR-FIER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.budget-grille > div:nth-of-type(1) > div.tete.tete--clair > p.surtitre « TRAVAIL SOIGNÉ, BUDGET ALLÉGÉ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.eco-bloc-contenu:nth-of-type(1) > div.eco-bloc-carte > div.tete > p.surtitre « ÉCO-PÂTURAGE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.matieres-grille > div.matieres-tete > div.tete > p.surtitre « CRÉATION PAYSAGÈRE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons.fx-fini > li.echantillon:nth-of-type(1) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons.fx-fini > li.echantillon:nth-of-type(2) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons.fx-fini > li.echantillon:nth-of-type(3) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons.fx-fini > li.echantillon:nth-of-type(4) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#realisations > div.conteneur.realisations-tete:nth-of-type(1) > div.tete > p.surtitre « RÉALISATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#realisation-5 > p.carte-real-metier « ÉCO-PÂTURAGE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.zone-grille > div > div.tete > p.surtitre « ZONE D'INTERVENTION » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons > li.echantillon:nth-of-type(1) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons > li.echantillon:nth-of-type(2) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons > li.echantillon:nth-of-type(3) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.echantillons > li.echantillon:nth-of-type(4) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.ouverture-contact-grille > div.ouverture-texte > p.surtitre:nth-of-type(1) « CONTACT ET DEVIS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#devis > div.conteneur > div.tete:nth-of-type(1) > p.surtitre « DEMANDE DE DEVIS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — aside.recap > dl > div:nth-of-type(1) > dt « VOTRE BESOIN » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — aside.recap > dl > div:nth-of-type(3) > dt « COMMUNE DU TERRAIN » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.zone-grille > div > div.tete > p.surtitre « ZONE D'INTERVENTION » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/creation` — section#debut > div.conteneur.ouverture-croquis-grille > div.ouverture-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « CRÉATION PAYSAGÈRE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/creation` — div.conteneur.prestations-grille > div.prestations-tete > div.tete > p.surtitre « NOS PRESTATIONS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/creation` — div.conteneur > div.tete-ligne > div.tete > p.surtitre « DÉMARCHE DURABLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/creation` — ul.echantillons.echantillons--ligne > li.echantillon:nth-of-type(1) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/creation` — ul.echantillons.echantillons--ligne > li.echantillon:nth-of-type(2) > figure.media.echantillon-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 12 autres (rapport.json)

### typographie française (2)

- **typographie française** — `/` — div.conteneur.confiance-grille:nth-of-type(1) > div > blockquote.avis > p « « Entreprise sérieuse et à l'écoute, travail soign » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/contact` — div.conteneur > div.devis-grille:nth-of-type(2) > aside.recap > p.recap-tel:nth-of-type(2) « Appeler : 06 70 54 93 24 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 89 ms (différence 58 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 81 ms (différence 46 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/entretien` — à 67 ms (différence 56 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/entretien` — écran différent à la même position après rechargement (6.3 %), voir comparaisons/rechargement-entretien-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2663 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2463 ms depuis le premier octet
- Ouverture /creation (1366×768) : 2486 ms depuis le premier octet
- Ouverture /eco-paturage (1366×768) : 2535 ms depuis le premier octet
- Ouverture /entretien (1366×768) : 2527 ms depuis le premier octet
- film de l'ouverture /entretien 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2624 ms depuis le premier octet
- Ouverture /contact (390×844) : 2457 ms depuis le premier octet
- Ouverture /creation (390×844) : 2503 ms depuis le premier octet
- Ouverture /eco-paturage (390×844) : 2475 ms depuis le premier octet
- Ouverture /entretien (390×844) : 2474 ms depuis le premier octet
- Bords de l’écran : 336 images d’intro, 19 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creation : aucune section épinglée ou plein écran.
- Tient dans l'écran /eco-paturage : aucune section épinglée ou plein écran.
- Tient dans l'écran /entretien : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 460, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité /creation 1366×768 (molette) : 0 % d'images lentes sur 277, tâche la plus longue 0 ms
- Fluidité /eco-paturage 1366×768 (molette) : 0 % d'images lentes sur 232, tâche la plus longue 0 ms
- Fluidité /entretien 1366×768 (molette) : 0 % d'images lentes sur 273, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1366, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /creation 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /eco-paturage 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /entretien 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.76 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /creation : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /eco-paturage : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /entretien : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures
```
