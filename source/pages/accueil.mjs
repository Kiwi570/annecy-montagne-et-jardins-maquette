/* Accueil d'AMJ, direction « Lac et crêtes ». */
import { html, brut } from '../../outils/gabarit.mjs';
import { tete, tampon, calculateur, carte, broutage, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-ouverture-1280.webp' };

const metiers = [
  { cle: 'entretien', image: 'metier-entretien', cadrage: '42% 50%', page: 'entretien' },
  { cle: 'creation', image: 'metier-creation', cadrage: '45% 55%', page: 'creation' },
  { cle: 'elagage', image: 'metier-elagage', cadrage: '62% 42%', page: 'entretien', ancre: 'elagage' },
  { cle: 'eco', image: 'metier-eco', cadrage: '50% 55%', page: 'eco-paturage' },
];
const matieres = [
  { cle: 'paillage', image: 'grok/matiere-paillage' },
  { cle: 'bois', image: 'grok/matiere-bois' },
  { cle: 'pierre', image: 'grok/matiere-pierre' },
  { cle: 'vegetal', image: 'grok/matiere-vegetal' },
];
const avantages = ['patrimoine', 'ecologie', 'tranquillite', 'dechets'];

/* Calque « pelouse » : la pelouse détourée de la photo, mêmes recadrages que l'image d'ouverture. */
const pelouse = (c) => html`<picture class="hero-pelouse" data-hero-pelouse aria-hidden="true">
  <source media="(max-width: 760px) and (orientation: portrait)" srcset="/assets/images/accueil-pelouse-mobile-640.webp 640w, /assets/images/accueil-pelouse-mobile-1080.webp 1080w" sizes="100vw">
  <img src="/assets/images/accueil-pelouse-1280.webp" srcset="/assets/images/accueil-pelouse-640.webp 640w, /assets/images/accueil-pelouse-1280.webp 1280w, /assets/images/accueil-pelouse-1920.webp 1920w" sizes="100vw" alt="" width="1280" height="720" fetchpriority="high" loading="eager" decoding="async">
</picture>`;

export default (c) => html`
<section class="hero" id="debut" data-effet="calques">
  <div class="hero-scene" data-hero-scene>
    ${c.media({ nom: 'accueil-ouverture', alt: c.s('pages.accueil.partageAlt'), cadrage: '50% 50%', priorite: true, classe: 'hero-fond', sizes: '100vw' })}
    ${pelouse(c)}
    <div class="hero-voile" aria-hidden="true"></div>
  </div>
  <div class="conteneur hero-contenu">
    <div class="hero-texte" data-hero-texte>
      <p class="surtitre surtitre--clair hero-surtitre" data-anime="gsap"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t('accueil.hero.surtitre')}</p>
      <h1 class="hero-titre" data-anime="gsap"><span class="ligne"><span class="ligne-in">${c.t('accueil.hero.l1')}</span></span> <span class="ligne"><span class="ligne-in">${c.tb('accueil.hero.l2')}</span></span> <span class="ligne"><span class="ligne-in">${c.t('accueil.hero.l3')}</span></span></h1>
      <p class="hero-intro masque-ecran-tres-bas masque-petit" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
      <p class="actions hero-actions" data-anime="gsap">
        ${c.lien('contact', { ancre: 'devis', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <a class="bouton bouton--clair masque-ecran-tres-bas" href="#metiers" data-sans-transition>${c.t('accueil.hero.secondaire')}</a>
      </p>
      <p class="hero-info" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
    </div>
    ${tampon(c, { attrs: 'data-tampon' })}
  </div>
</section>

<section class="section metiers" id="metiers">
  <div class="conteneur">
    <div class="tete-ligne">
      ${tete(c, 'accueil.metiers')}
      <p class="tete-texte" data-anime>${c.t('accueil.metiers.texte')}</p>
    </div>
    <ul class="metiers-grille" data-anime="cascade">
      ${metiers.map((m) => html`<li class="carte-metier" data-fx="vitesse" data-fx-force="2">
        <a href="${c.url(m.page, m.ancre || '')}" data-libelle="${c.libelle(m.page)}" data-survol="incline" data-survol-force="5">
          ${c.media({ nom: m.image, alt: '', cadrage: m.cadrage, classe: 'carte-metier-media', sizes: '(max-width: 760px) 90vw, (max-width: 1100px) 45vw, 23vw' })}
          <span class="carte-metier-texte"><strong>${c.t(`accueil.metiers.${m.cle}.titre`)}</strong><span>${c.t(`accueil.metiers.${m.cle}.texte`)}</span><span class="carte-metier-lien">${c.t(`accueil.metiers.${m.cle}.lien`)} <span aria-hidden="true">→</span></span></span>
        </a>
      </li>`)}
    </ul>
  </div>
</section>

<section class="section section--sapin budget" id="budget">
  <div class="conteneur budget-grille">
    <div>
      ${tete(c, 'accueil.budget', { classe: 'tete--clair' })}
      <p data-anime>${c.t('accueil.budget.texte')}</p>
      <p data-anime>${c.lien('entretien', { classe: 'lien-fleche', texte: c.t('accueil.budget.lien') })}</p>
      ${c.media({ nom: 'sap', alt: c.s('pages.entretien.nav') + ' : logo Services à la personne', cadrage: '50% 50%', classe: 'budget-sap', sizes: '160px', attrs: 'data-anime="rideau"' })}
    </div>
    ${calculateur(c, 'calcul-accueil')}
  </div>
</section>

<section class="eco-bloc" id="eco">
  ${c.media({ nom: 'eco-troupeau', alt: 'Troupeau de moutons blancs, bruns et noirs dans une prairie au soleil du matin', cadrage: '55% 45%', classe: 'eco-bloc-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  <div class="conteneur eco-bloc-contenu">
    <div class="eco-bloc-carte">
      ${tete(c, 'accueil.eco')}
      <p data-anime>${c.t('accueil.eco.texte')}</p>
      <ul class="avantages-mini" data-anime="cascade">
        ${avantages.map((a) => html`<li><strong>${c.t(`avantages.${a}.titre`)}</strong> ${c.t(`avantages.${a}.texte`)}</li>`)}
      </ul>
      <p>${c.lien('eco-paturage', { classe: 'bouton', texte: c.t('accueil.eco.lien'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
  ${broutage()}
</section>

<section class="section matieres" id="matieres">
  <div class="conteneur matieres-grille">
    <div class="matieres-tete">
      ${tete(c, 'accueil.matieres')}
      <p data-anime>${c.t('accueil.matieres.texte')}</p>
      <p data-anime>${c.lien('creation', { classe: 'lien-fleche', texte: c.t('accueil.matieres.lien') })}</p>
      ${c.media({ nom: 'real-graminees', alt: 'Massif de graminées et bordure en bois le long d’une allée', cadrage: '45% 45%', classe: 'matieres-photo', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="zoom"' })}
    </div>
    <ul class="echantillons" data-anime="cascade">
      ${matieres.map((m) => html`<li class="echantillon" data-fx="vitesse" data-fx-force="2">
        ${c.media({ nom: m.image, alt: c.s(`matieres.${m.cle}.titre`), cadrage: '50% 50%', classe: 'echantillon-media', sizes: '(max-width: 760px) 45vw, 22vw' })}
        <h3>${c.t(`matieres.${m.cle}.titre`)}</h3>
        <p>${c.t(`matieres.${m.cle}.texte`)}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="section realisations ecran epingle" id="realisations" data-entete-cache data-fx="galerie" data-plein-ecran>
  <div class="conteneur realisations-tete">
    ${tete(c, 'accueil.realisations')}
    <p class="masque-ecran-bas">${c.t('accueil.realisations.texte')}</p>
  </div>
  <div class="piste galerie-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.realisations.region')}">
    ${c.donnees.realisations.map((r, i) => html`<article class="carte-real" id="realisation-${i + 1}">
      ${c.media({ nom: r.image, alt: r.titre, cadrage: r.cadrage, classe: 'carte-real-media', sizes: '(max-width: 760px) 78vw, 30vw' })}
      <p class="carte-real-metier">${r.metier}</p>
      <h3>${r.titre}</h3>
    </article>`)}
  </div>
  <div class="galerie-progres" aria-hidden="true"><span></span></div>
</section>

<section class="section equipe" id="equipe">
  <div class="conteneur equipe-grille">
    ${c.media({ nom: 'equipe-benoit', alt: 'Benoit, gérant d’Annecy Montagne et Jardins', cadrage: '50% 35%', classe: 'equipe-portrait', sizes: '(max-width: 760px) 70vw, 30vw', attrs: 'data-anime="rideau"' })}
    <div>
      ${tete(c, 'accueil.equipe')}
      <p data-anime>${c.t('accueil.equipe.texte')}</p>
      <ul class="trio" data-anime="cascade">
        <li><strong>Benoit</strong><span>${c.t('accueil.equipe.benoit')}</span></li>
        <li><strong>Eddy</strong><span>${c.t('accueil.equipe.eddy')}</span></li>
        <li><strong>William</strong><span>${c.t('accueil.equipe.william')}</span></li>
      </ul>
      <div class="frise">
        <svg class="frise-trait" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M4 30 L120 22 L170 26 L250 10 L290 16 L340 6 L400 20 L470 14 L596 28" fill="none" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round"/></svg>
        <ol data-anime="cascade">
          <li><strong>2018</strong><span>${c.t('accueil.equipe.f2018')}</span></li>
          <li><strong>2023</strong><span>${c.t('accueil.equipe.f2023')}</span></li>
          <li><strong>${c.t('accueil.equipe.aujourdhui')}</strong><span>${c.t('accueil.equipe.fAujourdhui')}</span></li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="section confiance" id="references">
  <div class="conteneur confiance-grille">
    <div>
      ${tete(c, 'accueil.confiance')}
      <blockquote class="avis">
        <p data-anime="mots">« ${c.t('accueil.confiance.avis')} »</p>
        <footer data-anime>${c.t('accueil.confiance.auteur')}</footer>
      </blockquote>
    </div>
    ${c.media({ nom: 'equipe-terrain', alt: 'L’équipe et son camion-benne au travail dans une résidence', cadrage: '40% 40%', classe: 'confiance-photo', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
  </div>
  <div class="ruban-section">
    <div class="ruban" id="ruban-references" data-boucle-css data-ruban><p>${[...c.donnees.references, ...c.donnees.references].map((r) => html`<span>${r}</span>`)}</p></div>
    <button type="button" class="ruban-pause" data-pause-pour="ruban-references" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
  </div>
</section>

<section class="section zone" id="zone">
  <div class="conteneur zone-grille">
    <div>
      ${tete(c, 'accueil.zone')}
      <p data-anime>${c.t('accueil.zone.texte')}</p>
      <p class="actions" data-anime><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a></p>
    </div>
    ${carte(c)}
  </div>
</section>

${fin(c)}
`;
