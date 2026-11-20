/* Contact : ouverture courte (coordonnées), demande de devis en quatre étapes avec récapitulatif, carte de la zone. */
import { html } from '../../outils/gabarit.mjs';
import { tete, carte } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'real-escalier-traverses-960.webp' };

const besoins = [['entretien', 'Entretien'], ['creation', 'Création'], ['elagage', 'Élagage et abattage'], ['eco-paturage', 'Éco-pâturage']];
const profils = ['particulier', 'copropriete', 'entreprise', 'collectivite'];
const surfaces = ['surfacePetit', 'surfaceMoyen', 'surfaceGrand', 'surfaceInconnu'];
const radio = (c, nom, valeur, libelle, requis) => html`<label class="choix"><input type="radio" name="${nom}" value="${valeur}"${requis ? html` required` : ''}><span>${libelle}</span></label>`;

export default (c) => html`
<section class="ouverture-contact" id="debut">
  <div class="conteneur ouverture-contact-grille">
    <div class="ouverture-texte">
      <p class="surtitre"><svg viewBox="0 0 40 14" aria-hidden="true"><path d="M1 12 L9 7 L13 9 L20 2 L26 8 L30 6 L39 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>${c.t('contact.ouverture.surtitre')}</p>
      <h1 data-anime="lignes">${c.tb('contact.ouverture.titre')}</h1>
      <p class="masque-ecran-tres-bas masque-petit" data-anime>${c.t('contact.ouverture.texte')}</p>
      <p class="actions" data-anime><a class="bouton" href="#devis" data-action-principale data-sans-transition data-survol="magnetique">${c.t('contact.ouverture.action')}</a></p>
      <p class="info-cle" data-info-cle>${c.t('contact.ouverture.info')}</p>
      <dl class="coordonnees" data-anime="cascade">
        <div><dt>${c.t('contact.ouverture.tel')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('contact.ouverture.email')}</dt><dd><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>${c.t('contact.ouverture.adresse')}</dt><dd>${c.site.contact.adresse}</dd></div>
      </dl>
    </div>
    ${c.media({ nom: 'real-escalier-traverses', alt: 'Escalier en traverses de bois dans un talus, vue sur la vallée', cadrage: '45% 55%', priorite: true, classe: 'ouverture-contact-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  </div>
</section>

<section class="section devis" id="devis">
  <div class="conteneur">
    ${tete(c, 'contact.devis')}
    <p class="devis-etapes-texte">${c.t('contact.devis.etapes')}</p>
    <div class="devis-grille">
      <form class="formulaire devis-form" data-formulaire data-etapes action="#" novalidate data-requis="${c.s('contact.devis.requis')}" data-choix="${c.s('contact.devis.choix')}">
        <ol class="devis-progres" aria-hidden="true">
          ${['e1', 'e2', 'e3', 'e4'].map((e, i) => html`<li data-etape-repere="${i}"><span>${i + 1}</span><b class="devis-progres-texte">${c.t('contact.devis.' + e)}</b></li>`)}
        </ol>
        <div class="devis-cadre" data-etapes-cadre>
          <fieldset class="etape" data-etape="0">
            <legend>${c.t('contact.devis.besoin')}</legend>
            <div class="choix-grille">${besoins.map(([v, l], i) => radio(c, 'sujet', v, l, i === 0))}</div>
          </fieldset>
          <fieldset class="etape" data-etape="1">
            <legend>${c.t('contact.devis.profil')}</legend>
            <div class="choix-grille">${profils.map((p, i) => radio(c, 'profil', p, c.s('contact.devis.' + p), i === 0))}</div>
          </fieldset>
          <fieldset class="etape" data-etape="2">
            <legend>${c.t('contact.devis.e3')}</legend>
            <div class="champ"><label for="f-commune">${c.t('contact.devis.commune')}</label><input id="f-commune" name="commune" autocomplete="address-level2" required></div>
            <div class="champ"><label for="f-surface">${c.t('contact.devis.surface')}</label>
              <select id="f-surface" name="surface"><option value="">—</option>${surfaces.map((s) => html`<option value="${c.s('contact.devis.' + s)}">${c.t('contact.devis.' + s)}</option>`)}</select></div>
            <div class="champ"><label for="f-message">${c.t('contact.devis.message')}</label><textarea id="f-message" name="message" rows="4"></textarea></div>
          </fieldset>
          <fieldset class="etape" data-etape="3">
            <legend>${c.t('contact.devis.e4')}</legend>
            <div class="champ"><label for="f-nom">${c.t('contact.devis.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
            <div class="champ"><label for="f-email">${c.t('contact.devis.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
            <div class="champ"><label for="f-tel">${c.t('contact.devis.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
            <p class="mention-donnees">${c.t('contact.devis.donnees')}</p>
          </fieldset>
        </div>
        <p class="devis-boutons">
          <button type="button" class="bouton bouton--contour" data-etape-retour>${c.t('contact.devis.retour')}</button>
          <button type="button" class="bouton" data-etape-suivant>${c.t('contact.devis.suivant')}</button>
          <button type="submit" class="bouton" data-etape-envoyer>${c.t('contact.devis.envoyer')}</button>
        </p>
        <p class="devis-message" data-message-envoi data-texte="${c.s('contact.devis.envoye')}" role="status" tabindex="-1" hidden></p>
      </form>
      <aside class="recap" data-recap aria-label="${c.s('contact.devis.recap')}">
        <p class="recap-titre">${c.t('contact.devis.recap')}</p>
        <dl>
          <div><dt>${c.t('contact.devis.e1')}</dt><dd data-recap-champ="sujet" data-vide="${c.s('contact.devis.recapVide')}">${c.t('contact.devis.recapVide')}</dd></div>
          <div><dt>${c.t('contact.devis.e2')}</dt><dd data-recap-champ="profil" data-vide="${c.s('contact.devis.recapVide')}">${c.t('contact.devis.recapVide')}</dd></div>
          <div><dt>${c.t('contact.devis.commune')}</dt><dd data-recap-champ="commune" data-vide="${c.s('contact.devis.recapVide')}">${c.t('contact.devis.recapVide')}</dd></div>
          <div><dt>${c.t('contact.devis.nom')}</dt><dd data-recap-champ="nom" data-vide="${c.s('contact.devis.recapVide')}">${c.t('contact.devis.recapVide')}</dd></div>
        </dl>
        ${c.media({ nom: 'equipe-benoit', alt: 'Benoit, gérant d’Annecy Montagne et Jardins', cadrage: '50% 35%', classe: 'recap-photo', sizes: '120px' })}
        <p class="recap-tel">${c.t('commun.appeler')} : <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      </aside>
    </div>
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
`;
