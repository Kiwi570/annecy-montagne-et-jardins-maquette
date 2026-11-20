/* Éco-pâturage : ouverture plein cadre (les vrais moutons), badge rond « toute l'année », herbe broutée. */
import { html, brut } from '../../outils/gabarit.mjs';
import { tete, tampon, broutage, fin } from '../gabarits/composants.mjs';

export const page = { cle: 'eco-paturage', fichier: 'eco-paturage', imagePartage: 'eco-troupeau-1280.webp' };

const avantages = [
  { cle: 'patrimoine', icone: '<path d="M10 40 C10 24 22 16 32 16 C42 16 54 24 54 40 Z"/><circle cx="20" cy="22" r="6"/><circle cx="31" cy="15" r="6"/><circle cx="43" cy="21" r="6"/><path d="M14 40 V50 M50 40 V50"/>' },
  { cle: 'ecologie', icone: '<path d="M32 54 V26"/><path d="M32 30 C18 30 12 20 12 10 C26 10 32 18 32 30 Z"/><path d="M32 38 C44 38 52 30 52 20 C40 20 32 28 32 38 Z"/>' },
  { cle: 'tranquillite', icone: '<path d="M14 26 H24 L36 14 V50 L24 38 H14 Z"/><path d="M44 24 L54 40 M54 24 L44 40"/>' },
  { cle: 'dechets', icone: '<path d="M16 20 H48 L44 54 H20 Z"/><path d="M12 20 H52 M26 20 V12 H38 V20"/><path d="M8 58 L56 8"/>' },
];
const galerie = [
  { image: 'eco-panorama', alt: 'Troupeau qui pâture une grande prairie, arbres en fleurs au fond', cadrage: '54% 42%', classe: 'mosaique-large' },
  { image: 'eco-residence', alt: 'Prairie pâturée au bord d’une résidence', cadrage: '52% 60%' },
  { image: 'metier-eco', alt: 'Deux agneaux à laine longue qui broutent l’herbe', cadrage: '50% 55%' },
];

export default (c) => html`
<section class="ouverture-plein" id="debut">
  ${c.media({ nom: 'eco-ouverture', alt: 'Deux moutons à laine longue dans l’herbe haute, la montagne derrière', cadrage: '41% 44%', cadrageMobile: '46% 51%', priorite: true, classe: 'ouverture-plein-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur ouverture-plein-contenu">
    <div class="ouverture-texte">
      <p class="surtitre surtitre--clair"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t('eco.ouverture.surtitre')}</p>
      <h1 data-anime="lignes">${c.tb('eco.ouverture.titre')}</h1>
      <p class="masque-ecran-bas masque-petit" data-anime>${c.t('eco.ouverture.texte')}</p>
      <p class="actions" data-anime>${c.lien('contact', { ancre: 'devis', params: 'sujet=eco-paturage', classe: 'bouton', texte: c.t('eco.ouverture.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="info-cle" data-info-cle>${c.t('eco.ouverture.info')}</p>
    </div>
    ${tampon(c, { texte: c.s('eco.ouverture.badge'), legende: c.s('eco.ouverture.badge').replace(/ · $/, ''), chiffre: '<svg class="tampon-mouton" viewBox="0 0 64 44" aria-hidden="true"><g fill="currentColor"><ellipse cx="30" cy="22" rx="20" ry="13"/><circle cx="16" cy="16" r="8"/><circle cx="27" cy="11" r="8"/><circle cx="39" cy="12" r="8"/><circle cx="46" cy="20" r="7"/><circle cx="20" cy="28" r="7"/><circle cx="38" cy="30" r="7"/></g><ellipse cx="54" cy="25" rx="7" ry="9" fill="#1b2a20"/></svg>', attrs: 'data-tampon' })}
  </div>
</section>

<section class="section principe" id="principe">
  <div class="conteneur principe-grille">
    <div>
      ${tete(c, 'eco.principe')}
      <p data-anime>${c.t('eco.principe.texte')}</p>
    </div>
    ${c.media({ nom: 'eco-troupeau', alt: 'Troupeau de moutons blancs, bruns et noirs dans une prairie au soleil du matin', cadrage: '55% 45%', classe: 'principe-photo', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
  </div>
  ${broutage()}
</section>

<section class="section section--sapin avantages" id="avantages">
  <div class="conteneur">
    ${tete(c, 'eco.avantages', { classe: 'tete--clair' })}
    <ul class="avantages-grille" data-anime="cascade">
      ${avantages.map((a) => html`<li class="avantage" data-fx="vitesse" data-fx-force="2">
        <svg class="avantage-icone" viewBox="0 0 64 64" aria-hidden="true" data-visuel><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${brut(a.icone)}</g></svg>
        <h3>${c.t(`avantages.${a.cle}.titre`)}</h3>
        <p>${c.t(`avantages.${a.cle}.texte`)}</p>
      </li>`)}
    </ul>
  </div>
</section>

<section class="section pourqui" id="pour-qui">
  <div class="conteneur pourqui-grille">
    <div>
      ${tete(c, 'eco.pourqui')}
      <p data-anime>${c.t('eco.pourqui.texte')}</p>
      <ul class="profils" data-anime="cascade"><li>Copropriétés</li><li>Collectivités</li><li>Entreprises</li></ul>
    </div>
    ${c.media({ nom: 'eco-arbre', alt: 'Moutons à l’ombre d’un arbre dans une prairie fleurie de pissenlits', cadrage: '40% 45%', classe: 'pourqui-photo', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="section mosaique-section" id="cle-en-main">
  <div class="conteneur">
    ${tete(c, 'eco.cle')}
    <ul class="mosaique mosaique--eco" data-anime="cascade">
      ${galerie.map((g) => html`<li class="${g.classe || ''}">${c.media({ nom: g.image, alt: g.alt, cadrage: g.cadrage, classe: 'mosaique-media', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}</li>`)}
    </ul>
  </div>
</section>

${fin(c, { params: 'sujet=eco-paturage' })}
`;
