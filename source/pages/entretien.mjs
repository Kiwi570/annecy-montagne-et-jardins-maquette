/* Entretien : ouverture scindée (texte à gauche, grande image à droite, tampon 50 %). */
import { html } from '../../outils/gabarit.mjs';
import { tete, tampon, calculateur, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'entretien', fichier: 'entretien', imagePartage: 'grok/entretien-ouverture-1280.webp' };

const travaux = [
  { cle: 'tonte', image: 'entretien-pin', cadrage: '55% 60%' },
  { cle: 'taille', image: 'entretien-copro', cadrage: '45% 50%' },
  { cle: 'debroussaillage', image: 'entretien-talus', cadrage: '50% 50%' },
];
const pourqui = ['particuliers', 'coproprietes', 'entreprises'];
const galerie = [
  { image: 'metier-entretien', alt: 'Pelouse entretenue, arbustes en fleurs et allée bordée', cadrage: '42% 50%' },
  { image: 'entretien-allee', alt: 'Massif entretenu le long d’une allée de résidence', cadrage: '41% 45%' },
  { image: 'real-bambous', alt: 'Jardinier qui prépare une plate-bande le long d’une haie de bambous', cadrage: '80% 30%' },
  { image: 'entretien-broyeur', alt: 'Broyeur de végétaux dans un jardin en pente', cadrage: '35% 58%' },
  { image: 'accueil-ouverture', alt: 'Pelouse tondue au pied de la montagne, le lac en contrebas', cadrage: '50% 60%' },
];

export default (c) => html`
<section class="ouverture-scindee" id="debut">
  <div class="conteneur ouverture-scindee-grille">
    <div class="ouverture-texte">
      <p class="surtitre"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t('entretien.ouverture.surtitre')}</p>
      <h1 data-anime="lignes">${c.tb('entretien.ouverture.titre')}</h1>
      <p class="masque-ecran-tres-bas masque-petit" data-anime>${c.t('entretien.ouverture.texte')}</p>
      <p class="actions" data-anime>${c.lien('contact', { ancre: 'devis', params: 'sujet=entretien', classe: 'bouton', texte: c.t('entretien.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-info-cle>${c.t('entretien.ouverture.info')}</p>
    </div>
    <div class="ouverture-visuel">
      ${c.media({ nom: 'grok/entretien-ouverture', alt: 'Pelouse fraîchement tondue en bandes, haie taillée et montagnes au loin', cadrage: '60% 55%', priorite: true, classe: 'ouverture-scindee-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      ${tampon(c, { attrs: 'data-tampon' })}
    </div>
  </div>
</section>

<section class="section travaux" id="travaux">
  <div class="conteneur">
    ${tete(c, 'entretien.travaux')}
    <ul class="travaux-grille" data-anime="cascade">
      ${travaux.map((t, i) => html`<li class="travail" data-fx="vitesse" data-fx-force="2">
        ${c.media({ nom: t.image, alt: '', cadrage: t.cadrage, classe: 'travail-media', sizes: '(max-width: 760px) 90vw, 30vw' })}
        <p class="travail-num">0${i + 1}</p>
        <h3>${c.t(`entretien.travaux.${t.cle}.titre`)}</h3>
        <p>${c.t(`entretien.travaux.${t.cle}.texte`)}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="section pourqui" id="pour-qui">
  <div class="conteneur pourqui-grille">
    <div>
      ${tete(c, 'entretien.pourqui')}
      <dl class="pourqui-liste" data-anime="cascade">
        ${pourqui.map((p) => html`<div><dt>${c.t(`entretien.pourqui.${p}.titre`)}</dt><dd>${c.t(`entretien.pourqui.${p}.texte`)}</dd></div>`)}
      </dl>
    </div>
    ${c.media({ nom: 'equipe-terrain', alt: 'L’équipe et son camion-benne au travail dans une résidence', cadrage: '40% 40%', classe: 'pourqui-photo', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="section section--sapin budget" id="calcul">
  <div class="conteneur budget-grille">
    <div>
      ${tete(c, 'entretien.calcul', { classe: 'tete--clair' })}
      <p data-anime>${c.t('entretien.calcul.texte')}</p>
      <ol class="etapes-credit" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li><span class="etapes-credit-num">${i}</span><strong>${c.t(`entretien.calcul.etape${i}Titre`)}</strong><span>${c.t(`entretien.calcul.etape${i}Texte`)}</span></li>`)}
      </ol>
      <div class="sap" data-anime>
        ${c.media({ nom: 'sap', alt: 'Logo Services à la personne', cadrage: '50% 50%', classe: 'sap-logo', sizes: '96px' })}
        <p>${c.t('calcul.sap')}</p>
      </div>
    </div>
    ${calculateur(c, 'calcul-entretien')}
  </div>
</section>

<section class="section elagage" id="elagage">
  <div class="conteneur elagage-grille">
    <div class="elagage-photos">
      ${c.media({ nom: 'metier-elagage', alt: 'Élagueur encordé dans la couronne d’un chêne, ciel bleu', cadrage: '62% 42%', classe: 'elagage-grande', sizes: '(max-width: 760px) 70vw, 28vw', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'elagueur-tronc', alt: 'Élagueur encordé le long d’un tronc', cadrage: '50% 35%', classe: 'elagage-petite', sizes: '(max-width: 760px) 45vw, 18vw', attrs: 'data-fx="vitesse" data-fx-force="3"' })}
    </div>
    <div>
      ${tete(c, 'entretien.elagage')}
      <p data-anime>${c.t('entretien.elagage.texte')}</p>
      <p class="actions" data-anime>${c.lien('contact', { ancre: 'devis', params: 'sujet=elagage', classe: 'bouton', texte: c.t('entretien.elagage.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
</section>

<section class="section mosaique-section" id="realisations">
  <div class="conteneur">
    ${tete(c, 'entretien.galerie')}
    <ul class="mosaique" data-anime="cascade">
      ${galerie.map((g) => html`<li>${c.media({ nom: g.image, alt: g.alt, cadrage: g.cadrage, classe: 'mosaique-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}</li>`)}
    </ul>
  </div>
</section>

${fin(c, { params: 'sujet=entretien' })}
`;
