# Annecy Montagne et Jardins : maquette v2

Maquette de démonstration du futur site d'AMJ (direction « Lac et crêtes »), en ligne sur https://annecy-montagne-et-jardins-maquette.vercel.app

Pages : accueil, Entretien, Création, Éco-pâturage, Contact (devis en 4 étapes), 404.
Site statique (HTML, CSS, JavaScript), généré par `node outils/generer.mjs` à partir de `donnees/` (textes dans `donnees/textes/fr.json`) et de `source/`. Ne jamais modifier les pages `.html` à la main.

## Informations à fournir par le client

| Information | Où | État |
|---|---|---|
| Mentions légales (éditeur, SIRET, capital, directeur de la publication, RCS) | pied de page | à compléter |
| Politique de confidentialité | pied de page, formulaire de devis | à compléter |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse de Vercel dans ses documents juridiques, vérifiée le 20 novembre 2026) | mentions légales | à compléter |
| Assurances et qualifications (responsabilité civile, décennale si besoin, numéro de déclaration de service à la personne) | page Entretien | à compléter |
| Horaires d'ouverture ou de joignabilité | contact | non affichés (aucun horaire sur le site actuel) |
| Tarifs ou fourchettes de prix | pages métiers | non affichés (aucun prix sur le site actuel) |
| Races des moutons, taille du troupeau, déroulé d'une mise en place d'éco-pâturage | page Éco-pâturage | non affichés (absents du site actuel) |
| Photos d'Eddy et de William | accueil (équipe) | seuls les noms et rôles sont affichés |
| Logos haute définition de Gerimalp, Peak Immobilier et Fischer, et accord des clients pour les citer | accueil (références) | noms écrits en texte |
| Liste des communes desservies | carte de la zone | la carte montre l'Albanais et les bassins annécien et aixois, sans liste de communes |
| Logo en vectoriel (SVG ou PDF) | en-tête, pied, intro | logo détouré depuis un JPG de 500 px |
| Contenu d'une page Élagage dédiée | entretien#elagage | une seule phrase sur le site actuel : bloc dans la page Entretien |

## Crédits des illustrations générées

Six images ont été créées avec Grok et portent la mention « Illustration générée », à garder sur le site final :
- ouverture de la page Entretien (pelouse tondue en bandes), versions ordinateur et téléphone ;
- les quatre cartes « matières » (paillages naturels, bois local, pierre sèche, vivaces sobres en eau), sur l'accueil et la page Création.
Toutes les autres photos viennent du site actuel du client.

## Vérification réglementaire

Crédit d'impôt services à la personne : 50 % des dépenses, petits travaux de jardinage plafonnés à 5 000 € de dépenses par an et par foyer, soit 2 500 € de crédit au plus (service-public.gouv.fr, fiche F12, vérifiée en avril 2026 ; impots.gouv.fr). Le calculateur l'applique et précise « selon la réglementation en vigueur » : à revérifier à chaque loi de finances.

## À retirer à la mise en ligne définitive

- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`.
- Formulaire de devis simulé (rien n'est envoyé) : le brancher sur un vrai service d'envoi.
- Mention « Maquette de démonstration » du pied de page.
- « à compléter » derrière les mentions légales et la politique de confidentialité, une fois les textes fournis.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Points relevés sur le site actuel

- Fautes : « Un équipe expérimentée » (page Équipe), « Nous nous occupent » (accueil).
- Zone d'intervention qui varie selon les pages (avec ou sans le bassin aixois) : la maquette retient l'Albanais et les bassins annécien et aixois (page Entretien).
- « BREAM » écrit pour la certification BREEAM (page Éco-pâturage).
- L'élagage figure sur l'accueil mais n'a pas de page.
- Adresses de pages sans sens (general-6, copie-de-création, projects-7) et images sans texte alternatif.

## Commandes utiles

```
node outils/generer.mjs          pages HTML à partir des données
node _audit/audit.mjs            audit standard
```
