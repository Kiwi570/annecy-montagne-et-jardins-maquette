/* Création : ouverture « du croquis au jardin » (le croquis glisse et découvre la photo, effet « croquis »). */
import { html } from '../../outils/gabarit.mjs';
import { tete, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'creation', fichier: 'creation', imagePartage: 'creation-piscine-1280.webp' };

const prestations = [
  { cle: 'gazon', image: 'real-escalier-traverses', cadrage: '45% 60%' },
  { cle: 'clotures', image: 'metier-creation', cadrage: '45% 40%' },
  { cle: 'vivaces', image: 'real-massif', cadrage: '45% 45%' },
  { cle: 'arbres', image: 'metier-entretien', cadrage: '42% 50%' },
  { cle: 'terrasses', image: 'real-bacs', cadrage: '54% 48%' },
];
const matieres = ['paillage', 'bois', 'pierre', 'vegetal'];
const galerie = [
  { image: 'real-escalier-dalles', alt: 'Escalier en dalles de pierre et massif paillé en arc de cercle', cadrage: '56% 52%' },
  { image: 'real-terrasse', alt: 'Terrasse en toit avec bacs en bois plantés de graminées et de lavande', cadrage: '56% 43%' },
  { image: 'real-bassin', alt: 'Bassin carré en acier corten entouré de graminées', cadrage: '47% 45%' },
  { image: 'real-graminees', alt: 'Massif de graminées et bordure en bois le long d’une allée', cadrage: '45% 45%' },
];

export default (c) => html`
<section class="ouverture-croquis" id="debut">
  <div class="conteneur ouverture-croquis-grille">
    <div class="ouverture-texte">
      <p class="surtitre"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t('creation.ouverture.surtitre')}</p>
      <h1 data-anime="lignes">${c.tb('creation.ouverture.titre')}</h1>
      <p class="masque-ecran-tres-bas masque-petit" data-anime>${c.t('creation.ouverture.texte')}</p>
      <p class="actions" data-anime>${c.lien('contact', { ancre: 'devis', params: 'sujet=creation', classe: 'bouton', texte: c.t('creation.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-info-cle>${c.t('creation.ouverture.info')}</p>
    </div>
    <div class="croquis-scene" data-effet="croquis" data-superpose>
      ${c.media({ nom: 'creation-piscine', alt: 'Piscine bordée d’un mur en bois et d’un massif de palmiers et de graminées', cadrage: '51% 47%', priorite: true, classe: 'croquis-photo', sizes: '(max-width: 760px) 100vw, 55vw' })}
      <div class="croquis-feuille" data-croquis-feuille data-iris-centre>
        ${c.media({ nom: 'creation-croquis', alt: c.s('creation.ouverture.croquis'), cadrage: '54% 37%', priorite: true, classe: 'croquis-media', sizes: '(max-width: 760px) 70vw, 30vw' })}
      </div>
    </div>
  </div>
</section>

<section class="section prestations" id="prestations">
  <div class="conteneur prestations-grille">
    <div class="prestations-tete">
      ${tete(c, 'creation.prestations')}
    </div>
    <ol class="prestations-liste" data-anime="cascade">
      ${prestations.map((p, i) => html`<li class="prestation" data-fx="vitesse" data-fx-force="1.5">
        <span class="prestation-num">0${i + 1}</span>
        <h3>${c.t(`creation.prestations.${p.cle}`)}</h3>
        ${c.media({ nom: p.image, alt: '', cadrage: p.cadrage, classe: 'prestation-media', sizes: '(max-width: 760px) 30vw, 14vw' })}
      </li>`)}
    </ol>
  </div>
</section>

<section class="section matieres matieres--page" id="matieres">
  <div class="conteneur">
    <div class="tete-ligne">
      ${tete(c, 'creation.matieres')}
      <p class="tete-texte" data-anime>${c.t('creation.matieres.texte')}</p>
    </div>
    <ul class="echantillons echantillons--ligne" data-anime="cascade">
      ${matieres.map((m) => html`<li class="echantillon" data-fx="vitesse" data-fx-force="2">
        ${c.media({ nom: `grok/matiere-${m}`, alt: c.s(`matieres.${m}.titre`), cadrage: '50% 50%', classe: 'echantillon-media', sizes: '(max-width: 760px) 45vw, 22vw' })}
        <h3>${c.t(`matieres.${m}.titre`)}</h3>
        <p>${c.t(`matieres.${m}.texte`)}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="section mosaique-section" id="realisations">
  <div class="conteneur">
    ${tete(c, 'creation.galerie')}
    <ul class="mosaique" data-anime="cascade">
      ${galerie.map((g) => html`<li>${c.media({ nom: g.image, alt: g.alt, cadrage: g.cadrage, classe: 'mosaique-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}</li>`)}
    </ul>
  </div>
</section>

<section class="section pourqui-creation" id="pour-qui">
  <div class="conteneur pourqui-creation-grille">
    ${c.media({ nom: 'real-equipement', alt: 'Plantation d\u2019arbres protégée par une ganivelle devant un bâtiment rose et bois', cadrage: '60% 70%', classe: 'pourqui-photo', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
    <div>
      ${tete(c, 'creation.pourqui')}
      <p data-anime>${c.t('creation.pourqui.texte')}</p>
      <ul class="profils" data-anime="cascade"><li>Particuliers</li><li>Entreprises</li><li>Collectivités</li></ul>
    </div>
  </div>
</section>

${fin(c, { params: 'sujet=creation' })}
`;
