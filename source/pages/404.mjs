/* Page 404 aux couleurs du client : les agneaux qui broutent. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouverture-contact introuvable" id="debut">
  <div class="conteneur ouverture-contact-grille">
    <div class="ouverture-texte">
      <p class="surtitre">404</p>
      <h1 data-anime="lignes">${c.tb('introuvable.titre')}</h1>
      <p class="info-cle" data-info-cle>${c.site.contact.telephone}</p>
      <p class="masque-ecran-tres-bas masque-petit" data-anime>${c.t('introuvable.texte')}</p>
      <p class="actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('introuvable.contact') })}</p>
    </div>
    ${c.media({ nom: 'metier-eco', alt: 'Deux agneaux à laine longue qui broutent l’herbe', cadrage: '50% 55%', priorite: true, classe: 'ouverture-contact-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="zoom" data-iris-centre' })}
  </div>
</section>
`;
