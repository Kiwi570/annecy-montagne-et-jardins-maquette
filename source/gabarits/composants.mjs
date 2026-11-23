/* Composants communs aux pages d'AMJ : un seul système pour tout le site. */
import { html, brut } from '../../outils/gabarit.mjs';
import { CRETE, CRETE_LONGUE } from './commun.mjs';

/* Surtitre + titre de section (h2 découpé en lignes par la bibliothèque du socle). */
export const tete = (c, cle, { niveau = 'h2', classe = '', anime = 'lignes' } = {}) => html`<div class="tete ${classe}">
  <p class="surtitre"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t(cle + '.surtitre')}</p>
  ${brut(`<${niveau} data-anime="${anime}">`)}${c.tb(cle + '.titre')}${brut(`</${niveau}>`)}
</div>`;

/* Tampon rond « 50 % » : objet d'ouverture (data-iris-centre="disque"), il tourne au défilement. */
export const tampon = (c, { chiffre, texte, legende, attrs = '' } = {}) => html`<div class="tampon" data-iris-centre="disque" data-superpose role="img" aria-label="${legende || c.s('commun.tamponLegende')}"${brut(attrs ? ' ' + attrs : '')}>
  <svg class="tampon-texte" viewBox="0 0 200 200" aria-hidden="true">
    <defs><path id="tampon-cercle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0"/></defs>
    <text><textPath href="#tampon-cercle" textLength="484" lengthAdjust="spacing">${texte || c.s('commun.tampon')}</textPath></text>
  </svg>
  <span class="tampon-coeur" aria-hidden="true">${chiffre ? brut(chiffre) : html`<strong>${c.t('commun.tamponChiffre')}</strong>`}</span>
</div>`;

/* Calculateur du crédit d'impôt : la facture se coupe en deux d'un coup de sécateur (effet « secateur »). */
export const calculateur = (c, id = 'calcul') => html`<div class="calcul" data-calcul data-effet="secateur" id="${id}-outil">
  <div class="calcul-champ">
    <label for="${id}-montant">${c.t('calcul.label')}</label>
    <output class="calcul-montant" for="${id}-montant" data-calcul-montant data-prix>1 200 €</output>
    <input type="range" id="${id}-montant" min="300" max="8000" step="100" value="1200" data-calcul-curseur aria-describedby="${id}-note">
  </div>
  <div class="calcul-barre" data-visuel aria-hidden="true">
    <div class="calcul-part calcul-part--reste" data-calcul-reste-barre><span>${c.t('calcul.resteCourt')}</span></div>
    <div class="calcul-part calcul-part--credit" data-calcul-credit-barre><span>${c.t('calcul.creditCourt')}</span></div>
    <svg class="calcul-coupe" viewBox="0 0 20 100" preserveAspectRatio="none" data-calcul-coupe><line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" stroke-width="3" stroke-dasharray="6 6" vector-effect="non-scaling-stroke"/></svg>
    <svg class="calcul-lame secateur" viewBox="0 0 56 80" data-calcul-lame>
      <g class="secateur-branche secateur-gauche" data-secateur-gauche><path class="secateur-manche" d="M28 34 C20 26 12 16 11 3 L18 2 C20 14 23 24 28 34 Z"/><path class="secateur-lame" d="M28 34 C33 44 34 58 30 77 L27 50 Z"/></g>
      <g class="secateur-branche secateur-droite" data-secateur-droite><path class="secateur-manche" d="M28 34 C36 26 44 16 45 3 L38 2 C36 14 33 24 28 34 Z"/><path class="secateur-lame" d="M28 34 C23 44 22 58 26 77 L29 50 Z"/></g>
      <circle class="secateur-axe" cx="28" cy="34" r="3.6"/>
    </svg>
  </div>
  <dl class="calcul-chiffres">
    <div><dt>${c.t('calcul.facture')}</dt><dd data-calcul-facture data-prix>1 200 €</dd></div>
    <div class="calcul-credit"><dt>${c.t('calcul.credit')}</dt><dd data-calcul-credit data-prix>600 €</dd></div>
    <div class="calcul-reste"><dt>${c.t('calcul.reste')}</dt><dd data-calcul-reste data-prix>600 €</dd></div>
  </dl>
  <p class="calcul-plafond" data-calcul-plafond>${c.t('calcul.plafond')}</p>
  <p class="calcul-note" id="${id}-note">${c.t('calcul.note')}</p>
  <p class="visuellement-cache" aria-live="polite" data-calcul-annonce></p>
</div>`;

/* Carte de la zone (effet « lacs ») : SVG simplifié, coordonnées approchées (longitude, latitude projetées). */
export const carte = (c) => html`<figure class="carte-zone" data-effet="lacs" data-visuel>
  <svg viewBox="-30 0 460 420" role="img" aria-labelledby="carte-titre">
    <title id="carte-titre">${c.s('accueil.zone.titreCarte')}</title>
    <defs>
      <pattern id="hachure" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" stroke-width="1.4"/></pattern>
      <linearGradient id="eau" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb6c4"/><stop offset="1" stop-color="#3f8394"/></linearGradient>
      <clipPath id="clip-annecy"><rect class="eau-niveau" x="230" y="90" width="110" height="140"/></clipPath>
      <clipPath id="clip-bourget"><rect class="eau-niveau" x="40" y="190" width="90" height="180"/></clipPath>
    </defs>
    <g class="relief" aria-hidden="true">
      <path d="M300 30 L330 6 L352 24 L372 4 L398 30" /><path d="M350 250 L372 222 L388 240 L400 228" /><path d="M150 330 L176 296 L196 318 L214 300 L236 330" /><path d="M10 160 L30 136 L46 150 L60 132 L80 160" />
    </g>
    <g class="zones">
      <path class="zone zone-albanais" d="M92 112 C120 70 205 76 222 118 C238 160 214 214 170 222 C128 230 92 200 86 168 C82 146 84 126 92 112 Z"/>
      <path class="zone zone-annecien" d="M226 92 C250 60 312 66 338 110 C358 146 352 210 330 236 C304 260 262 236 246 206 C230 176 214 122 226 92 Z"/>
      <path class="zone zone-aixois" d="M40 216 C52 184 112 180 132 214 C150 246 148 330 126 368 C104 398 56 392 44 352 C32 318 30 248 40 216 Z"/>
    </g>
    <g class="lacs">
      <path class="lac-fond" d="M270 96 L282 100 L295 118 L308 135 L322 152 L326 164 L318 176 L322 190 L328 210 L324 222 L316 220 L312 205 L305 190 L310 176 L300 165 L285 150 L272 140 L264 124 L262 108 Z"/>
      <path class="lac-eau" clip-path="url(#clip-annecy)" d="M270 96 L282 100 L295 118 L308 135 L322 152 L326 164 L318 176 L322 190 L328 210 L324 222 L316 220 L312 205 L305 190 L310 176 L300 165 L285 150 L272 140 L264 124 L262 108 Z"/>
      <path class="lac-fond" d="M78 198 L86 205 L92 225 L98 250 L104 275 L110 298 L108 318 L100 340 L90 358 L80 362 L74 350 L70 330 L64 305 L60 280 L62 255 L66 230 L72 210 Z"/>
      <path class="lac-eau" clip-path="url(#clip-bourget)" d="M78 198 L86 205 L92 225 L98 250 L104 275 L110 298 L108 318 L100 340 L90 358 L80 362 L74 350 L70 330 L64 305 L60 280 L62 255 L66 230 L72 210 Z"/>
    </g>
    <g class="villes">
      <circle cx="264" cy="101" r="4"/><text x="252" y="88" text-anchor="end">Annecy</text>
      <circle cx="115" cy="312" r="4"/><text x="122" y="330">Aix-les-Bains</text>
      <circle cx="135" cy="138" r="4"/><text x="146" y="150">Rumilly</text>
    </g>
    <g class="etiquettes">
      <text class="etiquette-zone" x="150" y="190" text-anchor="middle">${c.t('accueil.zone.albanais')}</text>
      <text class="etiquette-zone" x="300" y="276" text-anchor="middle">${c.t('accueil.zone.annecien')}</text>
      <text class="etiquette-zone" x="138" y="392" text-anchor="middle">${c.t('accueil.zone.aixois')}</text>
      <text class="etiquette-lac" x="300" y="244" text-anchor="middle">${c.t('accueil.zone.lacAnnecy')}</text>
      <text class="etiquette-lac" x="62" y="184" text-anchor="middle">${c.t('accueil.zone.lacBourget')}</text>
    </g>
    <g class="siege">
      <g class="siege-epingle"><path d="M131 95 c-9 0 -15 7 -15 15 c0 11 15 25 15 25 s15 -14 15 -25 c0 -8 -6 -15 -15 -15 z"/><circle cx="131" cy="110" r="5.5" class="siege-trou"/></g>
      <text class="etiquette-siege" x="131" y="84" text-anchor="middle">${c.t('accueil.zone.siege')}</text>
    </g>
  </svg>
  <figcaption>${c.t('accueil.zone.legende')}</figcaption>
</figure>`;

/* Un mouton dessiné (laine, tête, deux pattes qui bougent quand il marche). */
export const mouton = (i) => html`<svg class="mouton mouton-${i}" viewBox="0 0 64 46"><g class="mouton-corps"><g fill="currentColor"><ellipse cx="30" cy="22" rx="20" ry="13"/><circle cx="16" cy="16" r="8"/><circle cx="27" cy="11" r="8"/><circle cx="39" cy="12" r="8"/><circle cx="46" cy="20" r="7"/><circle cx="20" cy="28" r="7"/><circle cx="38" cy="30" r="7"/></g><ellipse class="mouton-tete" cx="54" cy="25" rx="7" ry="9"/></g><rect class="mouton-patte mouton-patte-a" x="18" y="32" width="3.5" height="12" rx="1.5"/><rect class="mouton-patte mouton-patte-b" x="38" y="32" width="3.5" height="12" rx="1.5"/></svg>`;

/* Bande d'herbe haute que le troupeau rase au défilement (effet « broutage »). Les brins sont dessinés par site.js. */
export const broutage = () => html`<div class="broutage" data-broutage data-effet="broutage" data-souris data-visuel aria-hidden="true">
  <svg class="broutage-herbe" viewBox="0 0 1000 120" preserveAspectRatio="none" data-broutage-herbe></svg>
  <div class="broutage-troupeau" data-broutage-troupeau>
    ${[0, 1, 2].map((i) => html`${mouton(i)}`)}
  </div>
</div>`;

/* Appel final, commun à toutes les pages. */
export const fin = (c, { params = '' } = {}) => html`<section class="section section--sapin fin" id="fin">
  <div class="fin-paysage" data-transhumance data-effet="transhumance" data-visuel aria-hidden="true">
    <svg class="fin-crete" viewBox="0 0 1440 90" preserveAspectRatio="none" data-fx="trace"><path d="${CRETE_LONGUE}" fill="none" stroke="currentColor" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"/></svg>
    <div class="fin-troupeau" data-transhumance-troupeau>${[0, 1, 2].map((i) => html`${mouton(i)}`)}</div>
  </div>
  <div class="conteneur fin-grille">
    <h2 data-anime="lignes">${c.tb('accueil.fin.titre')}</h2>
    <div>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="actions" data-anime>
        ${c.lien('contact', { ancre: 'devis', params, classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--clair" href="tel:${c.site.contact.telephoneLien}" data-survol="magnetique">${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>`;

export { CRETE, CRETE_LONGUE };
