/* Effets propres à AMJ (chacun porte data-effet="nom-du-plan") :
   calques (ouverture de l'accueil), secateur (calculateur du crédit d'impôt), broutage (herbe rasée par le troupeau),
   lacs (carte de la zone), croquis (ouverture de la page Création). Le reste vient de la bibliothèque du socle. */
import { demarrer, versObjet } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const petit = () => window.matchMedia('(max-width: 760px)').matches;

/* Hasard stable d'un chargement à l'autre (l'herbe est dessinée à l'identique après un rechargement). */
function hasard(graine) { let s = graine; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

/* --- calques : la pelouse avance, le lac et la montagne restent, le titre monte plus vite. --- */
function calques() {
  const hero = document.querySelector('.hero[data-effet="calques"]');
  if (!hero || !ST()) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  tl.to({}, { duration: 0.03 })
    .fromTo(hero.querySelector('[data-hero-pelouse]'), { scale: 1 }, { scale: 1.22, ease: 'none', duration: 0.97 }, 0.03)
    .fromTo(hero.querySelector('.hero-fond'), { scale: 1, yPercent: 0 }, { scale: 1.05, yPercent: 3, ease: 'none', duration: 0.97 }, 0.03);
}
/* Après l'intro, la scène respire : un lent rapprochement des deux calques ensemble (ils restent alignés). */
function respiration() {
  const scene = document.querySelector('[data-hero-scene]');
  if (scene && gsap) gsap.fromTo(scene, { scale: 1 }, { scale: 1.04, duration: 16, ease: 'sine.out', transformOrigin: '50% 60%' });
}

/* Tampons ronds : le texte circulaire tourne au défilement (jamais pendant l'intro). */
function tampons() {
  if (!ST()) return;
  document.querySelectorAll('[data-tampon] .tampon-texte').forEach((t) => {
    gsap.fromTo(t, { rotation: 0 }, { rotation: 200, ease: 'none', transformOrigin: '50% 50%', scrollTrigger: { trigger: t.closest('section'), start: 'top top', end: 'bottom top', scrub: 0.5 } });
  });
}

/* --- secateur : calculateur du crédit d'impôt. --- */
const euros = (n) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(Math.round(n)).replace(/[  ]/g, ' ') + ' €';
function calculateurs() {
  document.querySelectorAll('[data-calcul]').forEach((root) => {
    const $ = (s) => root.querySelector(s);
    const curseur = $('[data-calcul-curseur]');
    const majs = () => {
      const m = +curseur.value, credit = Math.min(m, 5000) / 2, reste = m - credit, part = (credit / m) * 100;
      $('[data-calcul-montant]').textContent = euros(m);
      $('[data-calcul-facture]').textContent = euros(m);
      $('[data-calcul-credit]').textContent = euros(credit);
      $('[data-calcul-reste]').textContent = euros(reste);
      $('[data-calcul-reste-barre]').style.flexBasis = `${100 - part}%`;
      $('[data-calcul-credit-barre]').style.flexBasis = `${part}%`;
      root.style.setProperty('--coupe', `${100 - part}%`);
      /* Libellé masqué (jamais coupé) quand sa part de la barre est trop étroite. */
      [$('[data-calcul-reste-barre]'), $('[data-calcul-credit-barre]')].forEach((b) => { const sp = b.querySelector('span'); b.classList.remove('etroit'); if (sp.scrollWidth > b.clientWidth - 16) b.classList.add('etroit'); });
      $('[data-calcul-plafond]').classList.toggle('visible', m > 5000);
      curseur.setAttribute('aria-valuetext', euros(m));
      curseur.style.setProperty('--pct', `${((m - curseur.min) / (curseur.max - curseur.min)) * 100}%`);
    };
    let attente;
    curseur.addEventListener('input', () => {
      majs();
      clearTimeout(attente);
      attente = setTimeout(() => { $('[data-calcul-annonce]').textContent = `${$('[data-calcul-credit]').textContent} de crédit d'impôt, ${$('[data-calcul-reste]').textContent} à votre charge.`; }, 400);
    });
    majs();
    if (!ST()) return;
    /* Le coup de sécateur, piloté par le défilement : le pointillé se trace, la lame passe, la moitié se détache. */
    const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: 'top 85%', end: 'top 35%', scrub: 0.6 } });
    const gauche = $('[data-secateur-gauche]'), droite = $('[data-secateur-droite]');
    tl.fromTo($('[data-calcul-coupe]'), { scaleY: 0 }, { scaleY: 1, ease: 'none', duration: 0.35 }, 0)
      .fromTo($('[data-calcul-lame]'), { y: -24 }, { y: 34, ease: 'power2.in', duration: 0.3 }, 0.1)
      .fromTo(gauche, { rotation: -18 }, { rotation: 0, ease: 'back.in(2)', duration: 0.1 }, 0.36)
      .fromTo(droite, { rotation: 18 }, { rotation: 0, ease: 'back.in(2)', duration: 0.1 }, 0.36)
      .to($('[data-calcul-lame]'), { y: 0, ease: 'power2.out', duration: 0.25 }, 0.5)
      .fromTo($('[data-calcul-credit-barre]'), { y: 0, rotation: 0 }, { y: 10, rotation: 2, transformOrigin: '0% 50%', ease: 'power2.out', duration: 0.35 }, 0.55);
  });
}

/* Les pattes bougent tant que le troupeau avance, puis s'arrêtent. */
const arrets = new WeakMap();
function marche(el) {
  el.classList.add('marche');
  clearTimeout(arrets.get(el));
  arrets.set(el, setTimeout(() => el.classList.remove('marche'), 220));
}

/* --- broutage : bande d'herbe haute rasée de gauche à droite derrière le troupeau, et sous la souris. --- */
function broutages() {
  const ns = 'http://www.w3.org/2000/svg';
  document.querySelectorAll('[data-broutage]').forEach((zone, z) => {
    const svg = zone.querySelector('[data-broutage-herbe]');
    const troupeau = zone.querySelector('[data-broutage-troupeau]');
    const n = petit() ? 80 : 170, r = hasard(97 + z);
    const brins = [];
    for (let i = 0; i < n; i++) {
      const x = ((i + r() * 0.8) / n) * 1000, h = 58 + r() * 58, pente = (r() - 0.5) * 18, w = 2.6 + r() * 3.4;
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', `M${(x - w).toFixed(1)} 121 Q${(x + pente * 0.3).toFixed(1)} ${(120 - h * 0.55).toFixed(1)} ${(x + pente).toFixed(1)} ${(120 - h).toFixed(1)} Q${(x + pente * 0.25 + w * 0.4).toFixed(1)} ${(120 - h * 0.5).toFixed(1)} ${(x + w).toFixed(1)} 121 Z`);
      p.setAttribute('fill', 'currentColor');
      p.setAttribute('fill-opacity', (0.6 + r() * 0.4).toFixed(2));
      svg.appendChild(p);
      brins.push({ p, x: x / 1000, ras: false, souris: false });
    }
    if (!gsap) return;
    gsap.set(brins.map((b) => b.p), { transformOrigin: '50% 100%' });
    const couper = (b, ras) => {
      if (b.ras === ras) return;
      b.ras = ras;
      gsap.to(b.p, { scaleY: ras ? 0.26 : 1, duration: ras ? 0.35 : 0.6, ease: ras ? 'power2.out' : 'back.out(2)', overwrite: true });
    };
    if (ST()) {
      ST().create({
        trigger: zone.closest('section'), start: 'top 70%', end: 'bottom 75%', scrub: true,
        onUpdate(self) {
          const p = self.progress, larg = zone.clientWidth, tw = troupeau.offsetWidth || 160;
          gsap.set(troupeau, { x: -tw + p * (larg + tw * 1.1) });
          marche(troupeau);
          const front = (p * (larg + tw * 1.1) - tw * 0.4) / larg;
          brins.forEach((b) => couper(b, b.souris || b.x < front));
        },
      });
    }
    /* Sous la souris, les brins se rasent et le restent : rien ne bouge plus quand elle s'arrête. */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      zone.style.pointerEvents = 'auto';
      zone.addEventListener('pointermove', (e) => {
        const box = zone.getBoundingClientRect(), px = (e.clientX - box.left) / box.width;
        brins.forEach((b) => { if (Math.abs(b.x - px) < 0.025) { b.souris = true; couper(b, true); } });
      });
    }
  });
}

/* --- lacs : les deux lacs se remplissent, les zones s'allument, l'épingle tombe sur Vallières-sur-Fier. --- */
function lacs() {
  if (!ST()) return;
  document.querySelectorAll('[data-effet="lacs"]').forEach((fig) => {
    const niveaux = fig.querySelectorAll('.eau-niveau');
    const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 85%', end: 'center 50%', scrub: 0.6 } });
    tl.fromTo(niveaux[0], { attr: { y: 230 } }, { attr: { y: 90 }, ease: 'power1.inOut', duration: 0.5 }, 0)
      .fromTo(niveaux[1], { attr: { y: 370 } }, { attr: { y: 190 }, ease: 'power1.inOut', duration: 0.5 }, 0.05)
      .fromTo(fig.querySelectorAll('.zone'), { opacity: 0.15, scale: 0.88, transformOrigin: '50% 50%' }, { opacity: 1, scale: 1, stagger: 0.12, duration: 0.35, ease: 'power2.out' }, 0.2)
      .fromTo(fig.querySelector('.siege-epingle'), { scale: 0.2, transformOrigin: '50% 100%' }, { scale: 1, ease: 'back.out(2.5)', duration: 0.3 }, 0.55);
  });
}

/* --- croquis : la feuille du croquis glisse et pivote pour découvrir le jardin réalisé. --- */
function croquis() {
  const scene = document.querySelector('[data-effet="croquis"]');
  if (!scene || !ST()) return;
  const feuille = scene.querySelector('[data-croquis-feuille]');
  const tl = gsap.timeline({ scrollTrigger: { trigger: scene.closest('section'), start: 'top top', end: 'bottom 20%', scrub: 0.5 } });
  tl.to({}, { duration: 0.03 })
    .fromTo(feuille, { xPercent: 0, yPercent: 0, rotation: -4 }, { xPercent: () => (petit() ? -18 : -34), yPercent: 34, rotation: -11, ease: 'none', duration: 0.97 }, 0.03)
    .fromTo(scene.querySelector('.croquis-photo img'), { scale: 1.08 }, { scale: 1, ease: 'none', duration: 0.97 }, 0.03);
}

/* --- transhumance : le petit troupeau marche sur la ligne de crête de l'appel final. --- */
function transhumance() {
  if (!ST()) return;
  document.querySelectorAll('[data-transhumance]').forEach((paysage) => {
    const troupeau = paysage.querySelector('[data-transhumance-troupeau]');
    const d = paysage.querySelector('path').getAttribute('d');
    const pts = [...d.matchAll(/(-?[\d.]+)\s+(-?[\d.]+)/g)].map((m) => [+m[1], +m[2]]);
    const hauteur = (x) => { for (let i = 1; i < pts.length; i++) { if (x <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0); } } return pts[pts.length - 1][1]; };
    let W = 0, H = 0, tw = 0, th = 0;
    const mesurer = () => { W = paysage.clientWidth; H = paysage.clientHeight; tw = troupeau.offsetWidth; th = troupeau.offsetHeight; };
    mesurer();
    const placer = (p) => {
      const x = -tw + p * (W + tw);
      const milieu = Math.min(Math.max(x + tw * 0.5, 0), W);
      const y = (hauteur((milieu / W) * 1440) / 90) * H;
      gsap.set(troupeau, { x, y: y - th + 3 });
    };
    ST().create({
      trigger: paysage.closest('section'), start: 'top 95%', end: 'bottom 50%', scrub: true,
      onRefresh: (self) => { mesurer(); placer(self.progress); },
      onUpdate: (self) => { placer(self.progress); marche(troupeau); },
    });
  });
}

/* --- apercu : la grande photo de la page Création suit la prestation lue ou survolée. --- */
function apercus() {
  const liste = document.querySelector('[data-apercu-liste]');
  if (!liste) return;
  const items = [...liste.querySelectorAll('[data-apercu-item]')];
  const images = [...document.querySelectorAll('[data-apercu]')];
  const activer = (i) => {
    items.forEach((li, k) => li.classList.toggle('actif', k === i));
    images.forEach((im, k) => im.classList.toggle('actif', k === i));
  };
  items.forEach((li, i) => {
    li.addEventListener('pointerenter', () => activer(i));
    li.addEventListener('focusin', () => activer(i));
    if (ST()) ST().create({ trigger: li, start: 'top 62%', end: 'bottom 62%', onToggle: (self) => { if (self.isActive) activer(i); } });
  });
}

/* --- dessin : les pictos des avantages se dessinent au défilement. --- */
function dessins() {
  if (!ST()) return;
  document.querySelectorAll('[data-effet="dessin"]').forEach((li) => {
    const traits = li.querySelectorAll('[pathLength]');
    gsap.fromTo(traits, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', stagger: 0.08, scrollTrigger: { trigger: li, start: 'top 90%', end: 'top 50%', scrub: 0.5 } });
  });
}

/* --- Demande de devis en quatre étapes, avec récapitulatif en direct. --- */
function devis() {
  const f = document.querySelector('[data-etapes]');
  if (!f) return;
  const etapes = [...f.querySelectorAll('[data-etape]')];
  const reperes = [...f.querySelectorAll('[data-etape-repere]')];
  let courant = 0;
  const erreur = (champ, message) => {
    const cible = champ.type === 'radio' ? champ.closest('fieldset') : (champ.closest('.champ') || champ.parentElement);
    const id = 'erreur-' + (champ.type === 'radio' ? champ.name : (champ.id || champ.name));
    let p = document.getElementById(id);
    if (!message) { if (p) p.textContent = ''; champ.removeAttribute('aria-invalid'); return; }
    if (!p) { p = document.createElement('p'); p.id = id; p.className = 'champ-erreur'; p.setAttribute('aria-live', 'polite'); cible.appendChild(p); }
    p.textContent = message;
    champ.setAttribute('aria-invalid', 'true');
    champ.setAttribute('aria-describedby', id);
  };
  const valide = (n) => {
    let premier = null;
    etapes[n].querySelectorAll('[required]').forEach((ch) => {
      let message = '';
      if (ch.type === 'radio') message = f.querySelector(`[name="${ch.name}"]:checked`) ? '' : f.dataset.choix;
      else if (!ch.value.trim()) message = f.dataset.requis;
      else if (ch.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(ch.value.trim())) message = 'Adresse e-mail à vérifier (exemple : nom@domaine.fr).';
      erreur(ch, message);
      if (message && !premier) premier = ch;
    });
    if (premier) premier.focus();
    return !premier;
  };
  const montrer = (n, focus) => {
    courant = n;
    etapes.forEach((e, k) => e.classList.toggle('active', k === n));
    reperes.forEach((r, k) => { r.classList.toggle('courant', k === n); r.classList.toggle('fait', k < n); });
    f.classList.toggle('premiere-etape', n === 0);
    f.classList.toggle('derniere-etape', n === etapes.length - 1);
    if (gsap && focus) gsap.fromTo(etapes[n], { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' });
    if (focus) { const champ = etapes[n].querySelector('input:checked, input, select, textarea'); if (champ) champ.focus({ preventScroll: true }); }
  };
  const recap = () => {
    document.querySelectorAll('[data-recap-champ]').forEach((dd) => {
      const nom = dd.dataset.recapChamp;
      const coche = f.querySelector(`[name="${nom}"]:checked`);
      const champ = f.querySelector(`[name="${nom}"]`);
      const valeur = coche ? coche.closest('label').textContent.trim() : (champ && champ.type !== 'radio' ? champ.value.trim() : '');
      dd.textContent = valeur || dd.dataset.vide;
    });
  };
  f.querySelector('[data-etape-suivant]').addEventListener('click', () => { if (valide(courant)) montrer(Math.min(courant + 1, etapes.length - 1), true); });
  f.querySelector('[data-etape-retour]').addEventListener('click', () => montrer(Math.max(courant - 1, 0), true));
  f.addEventListener('input', recap);
  f.addEventListener('change', (e) => { recap(); if (e.target.type === 'radio') erreur(e.target, ''); });
  /* Entrée dans un champ : passe à l'étape suivante au lieu d'envoyer. */
  f.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && courant < etapes.length - 1) { e.preventDefault(); f.querySelector('[data-etape-suivant]').click(); }
  });
  montrer(0, false);
  recap();
  setTimeout(recap, 0);
}

demarrer({
  preparer() {
    calques();
    tampons();
    calculateurs();
    broutages();
    lacs();
    croquis();
    transhumance();
    apercus();
    dessins();
    devis();
  },
  /* Intro (2,3 s) : la crête du logo se trace, le logo monte, puis glisse jusqu'à l'objet d'ouverture de la page
     (le tampon, le croquis, la photo) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-crete .crete-ligne', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.75, ease: 'power2.inOut' }, 0)
      .fromTo('.ouverture-crete .crete-hachures', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.5)
      .fromTo('.ouverture-logo', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.3)
      .fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.45)
      .to('.ouverture-crete, .ouverture-ligne', { opacity: 0, duration: 0.3 }, 0.95);
    versObjet(tl, { a: 1.0 });
    tl.call(respiration, null, 1.5);
    if (document.querySelector('.hero-titre')) {
      tl.set('.hero-titre', { opacity: 1 }, 1.4)
        .fromTo('.hero-titre .ligne-in', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1 }, 1.42)
        .fromTo('.hero-surtitre, .hero-intro, .hero-actions, .hero-info', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, 1.55);
    }
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-titre, .hero-surtitre, .hero-intro, .hero-actions, .hero-info', { opacity: 1, y: 0 });
    gsap.set('.hero-titre .ligne-in', { yPercent: 0, y: 0 });
  },
  arrivee() {
    respiration();
    if (!gsap || !document.querySelector('.hero-titre')) return;
    gsap.set('.hero-titre', { opacity: 1 });
    gsap.fromTo('.hero-titre .ligne-in', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
    gsap.fromTo('.hero-surtitre, .hero-intro, .hero-actions, .hero-info', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, delay: 0.25 });
  },
});
