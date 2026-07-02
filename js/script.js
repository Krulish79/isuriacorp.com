/* ISURIA — interactions + EN/ES i18n */
(function () {
  'use strict';

  /* ---------- header scroll state ---------- */
  var header = document.getElementById('siteHeader');
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    '.group-copy, .group-aside, .section-head, .vertical, .showcase, .tenet, .contact-copy, .contact-form'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Moronga trailer ---------- */
  var trailer = document.getElementById('morongaTrailer');
  if (trailer) {
    var trailerBtn = trailer.querySelector('.trailer-play');
    var trailerVid = trailer.querySelector('.trailer-video');
    if (trailerBtn && trailerVid) {
      trailerBtn.addEventListener('click', function () {
        trailer.classList.add('is-playing');
        trailerVid.setAttribute('controls', '');
        var p = trailerVid.play();
        if (p && p.catch) p.catch(function () {});
      });
    }
  }

  /* ---------- year ---------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- i18n ---------- */
  var I18N = {
    en: {
      'brand.caption': 'Group · Mexico City',
      'nav.group': 'About', 'nav.portfolio': 'Portfolio', 'nav.approach': 'Approach', 'nav.contact': 'Contact',
      'hero.eyebrow': 'A private holding company · Mexico City',
      'hero.title': 'Capitalizing investment<br/><span class="italic">opportunities.</span>',
      'hero.lede': 'A private company incorporated in Mexico City — a portfolio spanning offshore technology, energy trading, distilled spirits, agriculture and film.',
      'sector.offshore': 'Ocean Raised Technology', 'sector.energy': 'Oil & Gas Trading', 'sector.tequila': 'Tequila', 'sector.mezcal': 'Mezcal', 'sector.agri': 'Agriculture', 'sector.film': 'Film Production',
      'scroll.group': 'About', 'scroll.portfolio': 'The Portfolio', 'scroll.approach': 'Our Approach', 'scroll.contact': 'Contact', 'scroll.top': 'Back to top',
      'group.eyebrow': 'About',
      'group.title': 'A wide array of investments, <em>one house.</em>',
      'group.p1': 'ISURIA is a private company incorporated in Mexico City. Our corporate portfolio spans oil and gas trading, distilled spirits, film production, agriculture and offshore technology — a wide array of investments held under one roof.',
      'group.p2': 'We believe in a lean managerial system across our day-to-day trading activities. Our high-profile management team brings a solid international network and broad experience across every industry we operate in.',
      'group.sign': '— ISURIA',
      'facts.hq.k': 'Headquarters', 'facts.hq.v': 'Mexico City, México',
      'facts.struct.k': 'Structure', 'facts.struct.v': 'Privately held',
      'facts.sectors.k': 'Sectors', 'facts.sectors.v': 'Six verticals',
      'facts.network.k': 'Reach', 'facts.network.v': 'International network',
      'portfolio.eyebrow': 'The Portfolio',
      'portfolio.title': 'Six sectors. <em>One standard.</em>',
      'portfolio.intro': 'Distinct companies, held under one roof — each with its own brand, market and craft.',
      'offshore.tag': 'Nº 01 — Ocean Raised Technology', 'offshore.title': 'SigriCo <em>Aquaculture</em>',
      'offshore.body': 'Through SigriCo — a Mexican company built by a multidisciplinary, internationally experienced team — we invest in offshore aquaculture on a global scale, farming Seriola in open water. The aim is a true bioeconomy: sustainability and productivity held together, never traded against each other.',
      'offshore.a1.k': 'Operator',
      'offshore.a2.k': 'Focus', 'offshore.a2.v': 'Ocean Raised Technology',
      'offshore.a3.k': 'Principle', 'offshore.a3.v': 'Sustainable bioeconomy',
      'energy.tag': 'Nº 02 — Oil & Gas Trading', 'energy.title': 'ROZOIL <em>Energy</em>',
      'energy.body': 'ROZOIL is our registered energy and lubricants brand, with offices in Houston, Texas and Mexico City. A management team with more than thirty years in the sector pairs top-tier technology with a proprietary formula engineered for low friction and long-lasting performance.',
      'energy.a1.k': 'Brand',
      'energy.a2.k': 'Offices', 'energy.a2.v': 'Houston · Mexico City',
      'energy.a3.k': 'Experience', 'energy.a3.v': '30+ years',
      'tequila.tag': 'Nº 03 — Tequila', 'tequila.title': 'Tequila <em>Tres Ese</em>',
      'tequila.body': 'Organic blue agave from the red highlands of Los Altos de Jalisco — slow-cooked in masonry ovens, copper-distilled and bottled by hand. Three expressions across the cellar.',
      'tequila.cta': 'Tequila Tres Ese ↗',
      'mezcal.tag': 'Nº 04 — Mezcal', 'mezcal.title': 'Artisanal <em>Mezcal</em>',
      'mezcal.body': 'Two artisanal mezcal houses. Machetazo brings wild Cupreata from Guerrero and wild Salmiana from San Luis Potosí, alongside Espadín from Oaxaca; Mayalen is 100% wild agave from Guerrero and Oaxaca, rooted in a palenque active since 1949.',
      'mezcal.m1.note': 'Wild Cupreata (Guerrero) & Salmiana (SLP) · Espadín (Oaxaca)',
      'mezcal.m2.note': '100% wild agave · Guerrero & Oaxaca · palenque since 1949',
      'agri.tag': 'Nº 05 — Agriculture', 'agri.title': 'Coconut &amp; <em>Land</em>',
      'agri.body': 'Our core agricultural project is coconut water — with room to grow into virgin coconut oil — produced in Papanoa, Guerrero. Through large family-owned plantations in the Zihuatanejo area, we have access to a minimum of 100,000 coconuts every month.',
      'agri.a1.k': 'Crop', 'agri.a1.v': 'Coconut water & oil',
      'agri.a2.k': 'Region', 'agri.a2.v': 'Papanoa · Zihuatanejo',
      'agri.a3.k': 'Capacity', 'agri.a3.v': '100,000+ / month',
      'film.tag': 'Nº 06 — Film', 'film.title': 'Moronga <em>Films</em>',
      'film.body': 'Moronga Films produced <em>Moronga</em> (Black Pudding) — a surreal western and black comedy with Matt O’Leary and Kristyan Ferrer, directed by John Dickie, a Scottish-born, Mexico-bred, award-winning film-maker living in the mountains of Oaxaca.',
      'film.a1.k': 'Studio', 'film.a2.k': 'Feature', 'film.a3.k': 'Director', 'film.trailer': 'Watch trailer',
      'approach.eyebrow': 'Our Approach', 'approach.title': 'How we <em>operate.</em>',
      'tenet1.k': 'Lean management', 'tenet1.v': 'A lean managerial system runs through every trading day — less structure, faster decisions.',
      'tenet2.k': 'International network', 'tenet2.v': 'A high-profile team with a solid global network and broad experience across industries.',
      'tenet3.k': 'Operators inside', 'tenet3.v': 'We sit in the businesses we back — close to the craft and close to the risk.',
      'tenet4.k': 'Long horizons', 'tenet4.v': 'We hold for the long term and measure returns in decades, not quarters.',
      'contact.eyebrow': 'Contact', 'contact.title': 'For partnership <em>&amp; inquiry.</em>',
      'contact.p': 'For investment, partnership or press, write to the group office. Serious inquiries are read by the people who can answer them.',
      'contact.addr': 'Mexico City, México',
      'form.first': 'First name', 'form.last': 'Last name', 'form.email': 'Email',
      'form.company': 'Company', 'form.opt': '(optional)', 'form.message': 'Message', 'form.send': 'Send message',
      'footer.sub': 'Capitalizing investment opportunities', 'footer.place': 'Mexico City, México',
      'footer.rights': 'All rights reserved.', 'footer.made': 'Hecho en México',
      'status.sending': 'Sending…', 'status.ok': 'Opening your email app — thank you.', 'status.err': 'Please complete the required fields.'
    },
    es: {
      'brand.caption': 'Grupo · Ciudad de México',
      'nav.group': 'Acerca', 'nav.portfolio': 'Portafolio', 'nav.approach': 'Filosofía', 'nav.contact': 'Contacto',
      'hero.eyebrow': 'Sociedad privada de cartera · Ciudad de México',
      'hero.title': 'Capitalizando oportunidades de<br/><span class="italic">inversión.</span>',
      'hero.lede': 'Una empresa privada constituida en la Ciudad de México — un portafolio que abarca tecnología marina, comercio de energía, destilados, agricultura y cine.',
      'sector.offshore': 'Tecnología de Cultivo Oceánico', 'sector.energy': 'Petróleo y Gas', 'sector.tequila': 'Tequila', 'sector.mezcal': 'Mezcal', 'sector.agri': 'Agricultura', 'sector.film': 'Producción de Cine',
      'scroll.group': 'Acerca', 'scroll.portfolio': 'El Portafolio', 'scroll.approach': 'Filosofía', 'scroll.contact': 'Contacto', 'scroll.top': 'Volver arriba',
      'group.eyebrow': 'Acerca',
      'group.title': 'Un amplio abanico de inversiones, <em>una sola casa.</em>',
      'group.p1': 'ISURIA es una empresa privada constituida en la Ciudad de México. Nuestro portafolio corporativo abarca el comercio de petróleo y gas, destilados, producción de cine, agricultura y tecnología marina — un amplio abanico de inversiones bajo un mismo techo.',
      'group.p2': 'Creemos en un sistema de gestión esbelto en nuestra operación diaria. Nuestro equipo directivo de alto perfil aporta una sólida red internacional y amplia experiencia en cada industria en la que operamos.',
      'group.sign': '— ISURIA',
      'facts.hq.k': 'Sede', 'facts.hq.v': 'Ciudad de México, México',
      'facts.struct.k': 'Estructura', 'facts.struct.v': 'Capital privado',
      'facts.sectors.k': 'Sectores', 'facts.sectors.v': 'Seis verticales',
      'facts.network.k': 'Alcance', 'facts.network.v': 'Red internacional',
      'portfolio.eyebrow': 'El Portafolio',
      'portfolio.title': 'Seis sectores. <em>Un estándar.</em>',
      'portfolio.intro': 'Empresas distintas, bajo un mismo techo — cada una con su propia marca, mercado y oficio.',
      'offshore.tag': 'Nº 01 — Tecnología de Cultivo Oceánico', 'offshore.title': 'SigriCo <em>Acuacultura</em>',
      'offshore.body': 'A través de SigriCo — una empresa mexicana formada por un equipo multidisciplinario con experiencia internacional — invertimos en acuacultura marina a escala global, cultivando Seriola en mar abierto. La meta es una verdadera bioeconomía: sostenibilidad y productividad de la mano, nunca una a costa de la otra.',
      'offshore.a1.k': 'Operador',
      'offshore.a2.k': 'Enfoque', 'offshore.a2.v': 'Tecnología de Cultivo Oceánico',
      'offshore.a3.k': 'Principio', 'offshore.a3.v': 'Bioeconomía sostenible',
      'energy.tag': 'Nº 02 — Petróleo y Gas', 'energy.title': 'ROZOIL <em>Energía</em>',
      'energy.body': 'ROZOIL es nuestra marca registrada de energía y lubricantes, con oficinas en Houston, Texas y la Ciudad de México. Un equipo directivo con más de treinta años en el sector combina tecnología de primer nivel con una fórmula propia diseñada para baja fricción y un rendimiento duradero.',
      'energy.a1.k': 'Marca',
      'energy.a2.k': 'Oficinas', 'energy.a2.v': 'Houston · Ciudad de México',
      'energy.a3.k': 'Experiencia', 'energy.a3.v': 'Más de 30 años',
      'tequila.tag': 'Nº 03 — Tequila', 'tequila.title': 'Tequila <em>Tres Ese</em>',
      'tequila.body': 'Agave azul orgánico de los altos rojos de Los Altos de Jalisco — cocido lento en hornos de mampostería, destilado en cobre y embotellado a mano. Tres expresiones de la cava.',
      'tequila.cta': 'Tequila Tres Ese ↗',
      'mezcal.tag': 'Nº 04 — Mezcal', 'mezcal.title': 'Mezcal <em>Artesanal</em>',
      'mezcal.body': 'Dos casas de mezcal artesanal. Machetazo trae Cupreata silvestre de Guerrero y Salmiana silvestre de San Luis Potosí, junto con Espadín de Oaxaca; Mayalen es 100% agave silvestre de Guerrero y Oaxaca, con raíces en un palenque activo desde 1949.',
      'mezcal.m1.note': 'Cupreata (Guerrero) y Salmiana (SLP) silvestres · Espadín (Oaxaca)',
      'mezcal.m2.note': '100% agave silvestre · Guerrero y Oaxaca · palenque desde 1949',
      'agri.tag': 'Nº 05 — Agricultura', 'agri.title': 'Coco y <em>Tierra</em>',
      'agri.body': 'Nuestro proyecto agrícola principal es el agua de coco — con margen para crecer hacia el aceite de coco virgen — producida en Papanoa, Guerrero. A través de grandes plantaciones de propiedad familiar en la zona de Zihuatanejo, tenemos acceso a un mínimo de 100,000 cocos cada mes.',
      'agri.a1.k': 'Cultivo', 'agri.a1.v': 'Agua y aceite de coco',
      'agri.a2.k': 'Región', 'agri.a2.v': 'Papanoa · Zihuatanejo',
      'agri.a3.k': 'Capacidad', 'agri.a3.v': '100,000+ / mes',
      'film.tag': 'Nº 06 — Cine', 'film.title': 'Moronga <em>Films</em>',
      'film.body': 'Moronga Films produjo <em>Moronga</em> (Black Pudding) — un western surrealista y comedia negra con Matt O’Leary y Kristyan Ferrer, dirigida por John Dickie, un cineasta nacido en Escocia, criado en México y premiado, que vive en las montañas de Oaxaca.',
      'film.a1.k': 'Estudio', 'film.a2.k': 'Largometraje', 'film.a3.k': 'Director', 'film.trailer': 'Ver tráiler',
      'approach.eyebrow': 'Filosofía', 'approach.title': 'Cómo <em>operamos.</em>',
      'tenet1.k': 'Gestión esbelta', 'tenet1.v': 'Un sistema de gestión esbelto recorre cada día de operación — menos estructura, decisiones más rápidas.',
      'tenet2.k': 'Red internacional', 'tenet2.v': 'Un equipo de alto perfil con una sólida red global y amplia experiencia en distintas industrias.',
      'tenet3.k': 'Operadores adentro', 'tenet3.v': 'Estamos dentro de los negocios que respaldamos — cerca del oficio y cerca del riesgo.',
      'tenet4.k': 'Horizontes largos', 'tenet4.v': 'Sostenemos a largo plazo y medimos el retorno en décadas, no en trimestres.',
      'contact.eyebrow': 'Contacto', 'contact.title': 'Para alianzas <em>y consultas.</em>',
      'contact.p': 'Para inversión, alianzas o prensa, escriba a la oficina del grupo. Las consultas serias las leen quienes pueden responderlas.',
      'contact.addr': 'Ciudad de México, México',
      'form.first': 'Nombre', 'form.last': 'Apellido', 'form.email': 'Correo',
      'form.company': 'Empresa', 'form.opt': '(opcional)', 'form.message': 'Mensaje', 'form.send': 'Enviar mensaje',
      'footer.sub': 'Capitalizando oportunidades de inversión', 'footer.place': 'Ciudad de México, México',
      'footer.rights': 'Todos los derechos reservados.', 'footer.made': 'Hecho en México',
      'status.sending': 'Enviando…', 'status.ok': 'Abriendo tu correo — gracias.', 'status.err': 'Por favor complete los campos requeridos.'
    }
  };

  var current = 'en';
  var dict = function (key) { return (I18N[current] && I18N[current][key]) || (I18N.en[key] || ''); };

  function applyLang(lang) {
    if (!I18N[lang]) return;
    current = lang;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = dict(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v;
    });

    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('isuria-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = 'en';
  try { saved = localStorage.getItem('isuria-lang') || 'en'; } catch (e) {}
  applyLang(saved);

  /* ---------- contact form → mailto (no backend needed) ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = form.querySelector('.form-status');
    var CONTACT_EMAIL = 'contact@isuriacorp.com';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var ok = true;
      required.forEach(function (f) { if (!f.value.trim()) ok = false; });
      if (!ok) {
        status.textContent = dict('status.err');
        status.classList.remove('is-ok');
        return;
      }
      var v = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      var subject = 'Isuria — inquiry from ' + v('first') + ' ' + v('last');
      var lines = [
        'Name: ' + v('first') + ' ' + v('last'),
        'Email: ' + v('email'),
        'Company: ' + (v('company') || '—'),
        '',
        v('message')
      ];
      var href = 'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      status.textContent = dict('status.ok');
      status.classList.add('is-ok');
    });
  }
})();
