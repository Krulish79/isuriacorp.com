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
    '.group-copy, .group-aside, .section-head, .vertical, .tenet, .contact-copy, .contact-form'
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

  /* ---------- year ---------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- i18n ---------- */
  var I18N = {
    en: {
      'brand.caption': 'Group · Mexico City',
      'nav.group': 'The Group', 'nav.portfolio': 'Portfolio', 'nav.approach': 'Approach', 'nav.contact': 'Contact',
      'hero.eyebrow': 'A private holding company · Mexico City',
      'hero.title': 'A house of<br/><span class="italic">enterprises.</span>',
      'hero.lede': 'Isuria is a privately held investment house. We build, own and back companies across four sectors — patient capital, long horizons, and a hand on the operation.',
      'sector.energy': 'Energy Trading', 'sector.spirits': 'Distilled Spirits', 'sector.film': 'Film Production', 'sector.agri': 'Agriculture',
      'scroll.group': 'The Group', 'scroll.portfolio': 'The Portfolio', 'scroll.approach': 'Our Approach', 'scroll.contact': 'Contact', 'scroll.top': 'Back to top',
      'group.eyebrow': 'The Group',
      'group.title': 'Quietly building, <em>across sectors.</em>',
      'group.p1': 'Headquartered in Mexico City, Isuria is a family-held investment house that owns and operates companies across energy, spirits, film and land. We are not a fund chasing a cycle — we are owners, present in the businesses we back, measuring returns in decades rather than quarters.',
      'group.p2': 'Each company in the group keeps its own name, its own craft and its own market. What they share is a standard: real assets, real operators, and a refusal to dilute quality for speed. We hold what we are proud to hold.',
      'group.sign': '— Grupo Isuria',
      'facts.hq.k': 'Headquarters', 'facts.hq.v': 'Mexico City, México',
      'facts.struct.k': 'Structure', 'facts.struct.v': 'Privately held',
      'facts.sectors.k': 'Sectors', 'facts.sectors.v': 'Four verticals',
      'facts.horizon.k': 'Horizon', 'facts.horizon.v': 'Long-term ownership',
      'portfolio.eyebrow': 'The Portfolio',
      'portfolio.title': 'Four sectors. <em>One standard.</em>',
      'portfolio.intro': 'Distinct businesses, held under one roof. Independent in craft, aligned in conviction.',
      'energy.tag': 'Nº 01 — Energy', 'energy.title': 'Oil &amp; Gas <em>Trading</em>',
      'energy.body': 'A physical and contractual trading desk moving hydrocarbons across borders — sourcing, logistics and risk, run by people who have done it through every kind of market. Discipline over volume; every position understood before it is taken.',
      'energy.a1.k': 'Activity', 'energy.a1.v': 'Physical & paper trading',
      'energy.a2.k': 'Reach', 'energy.a2.v': 'Cross-border',
      'energy.a3.k': 'Mandate', 'energy.a3.v': 'Risk-managed supply',
      'spirits.tag': 'Nº 02 — Spirits', 'spirits.title': 'Distilled <em>Spirits</em>',
      'spirits.body': 'A portfolio of agave houses made the slow way — organic estates, masonry ovens, copper stills and bottles finished by hand. We own the craft end to end, from the red soil of the highlands to the label, and we do not cut it for scale.',
      'spirits.a1.k': 'Houses', 'spirits.a2.k': 'Category', 'spirits.a2.v': 'Tequila & mezcal',
      'spirits.a3.k': 'Origin', 'spirits.a3.v': 'Jalisco · Oaxaca', 'spirits.cta': 'Tequila Tres Ese ↗',
      'film.tag': 'Nº 03 — Film', 'film.title': 'Film <em>Production</em>',
      'film.body': 'We finance and produce cinema — backing directors with a point of view and stories worth the patience they demand. From development to delivery, we sit on the side of the work, not the spreadsheet, and we stay until the last frame.',
      'film.a1.k': 'Role', 'film.a1.v': 'Finance & production',
      'film.a2.k': 'Formats', 'film.a2.v': 'Feature & documentary',
      'film.a3.k': 'Stance', 'film.a3.v': 'Director-led',
      'agri.tag': 'Nº 04 — Agriculture', 'agri.title': 'Land &amp; <em>Agriculture</em>',
      'agri.body': 'We own and work productive land — agave estates, orchards and field crops managed for the long health of the soil. Real ground, real harvests; the most patient capital we hold, and the foundation the rest is built on.',
      'agri.a1.k': 'Holdings', 'agri.a1.v': 'Estates & cropland',
      'agri.a2.k': 'Practice', 'agri.a2.v': 'Organic-first',
      'agri.a3.k': 'Horizon', 'agri.a3.v': 'Generational',
      'approach.eyebrow': 'Our Approach', 'approach.title': 'How we hold <em>what we hold.</em>',
      'tenet1.k': "Own, don't rent", 'tenet1.v': 'We take real positions in real assets and stay. Ownership, not exposure.',
      'tenet2.k': 'Long horizons', 'tenet2.v': 'We measure in decades. Time is the advantage few are willing to spend.',
      'tenet3.k': 'Operators inside', 'tenet3.v': 'We sit in the business, not above it — close to the craft and the risk.',
      'tenet4.k': 'Quality first', 'tenet4.v': 'We will not dilute what we make to grow faster. Standard before scale.',
      'contact.eyebrow': 'Contact', 'contact.title': 'For partnership <em>&amp; inquiry.</em>',
      'contact.p': 'For investment, partnership or press, write to the group office. Serious inquiries are read by the people who can answer them.',
      'contact.addr': 'Mexico City, México',
      'form.first': 'First name', 'form.last': 'Last name', 'form.email': 'Email',
      'form.company': 'Company', 'form.opt': '(optional)', 'form.message': 'Message', 'form.send': 'Send message',
      'footer.sub': 'A private holding company', 'footer.place': 'Mexico City, México',
      'footer.rights': 'All rights reserved.', 'footer.made': 'Hecho en México',
      'status.sending': 'Sending…', 'status.ok': 'Thank you — we will be in touch.', 'status.err': 'Please complete the required fields.'
    },
    es: {
      'brand.caption': 'Grupo · Ciudad de México',
      'nav.group': 'El Grupo', 'nav.portfolio': 'Portafolio', 'nav.approach': 'Filosofía', 'nav.contact': 'Contacto',
      'hero.eyebrow': 'Sociedad privada de cartera · Ciudad de México',
      'hero.title': 'Una casa de<br/><span class="italic">empresas.</span>',
      'hero.lede': 'Isuria es una casa de inversión privada. Construimos, poseemos y respaldamos empresas en cuatro sectores — capital paciente, horizontes largos y la mano puesta en la operación.',
      'sector.energy': 'Comercio de Energía', 'sector.spirits': 'Destilados', 'sector.film': 'Producción de Cine', 'sector.agri': 'Agricultura',
      'scroll.group': 'El Grupo', 'scroll.portfolio': 'El Portafolio', 'scroll.approach': 'Filosofía', 'scroll.contact': 'Contacto', 'scroll.top': 'Volver arriba',
      'group.eyebrow': 'El Grupo',
      'group.title': 'Construyendo en silencio, <em>en varios sectores.</em>',
      'group.p1': 'Con sede en la Ciudad de México, Isuria es una casa de inversión de propiedad familiar que posee y opera empresas en energía, destilados, cine y tierra. No somos un fondo persiguiendo un ciclo — somos dueños, presentes en los negocios que respaldamos, midiendo el retorno en décadas y no en trimestres.',
      'group.p2': 'Cada empresa del grupo conserva su propio nombre, su propio oficio y su propio mercado. Lo que comparten es un estándar: activos reales, operadores reales y la negativa a diluir la calidad por velocidad. Sostenemos aquello de lo que estamos orgullosos.',
      'group.sign': '— Grupo Isuria',
      'facts.hq.k': 'Sede', 'facts.hq.v': 'Ciudad de México, México',
      'facts.struct.k': 'Estructura', 'facts.struct.v': 'Capital privado',
      'facts.sectors.k': 'Sectores', 'facts.sectors.v': 'Cuatro verticales',
      'facts.horizon.k': 'Horizonte', 'facts.horizon.v': 'Propiedad de largo plazo',
      'portfolio.eyebrow': 'El Portafolio',
      'portfolio.title': 'Cuatro sectores. <em>Un estándar.</em>',
      'portfolio.intro': 'Negocios distintos, bajo un mismo techo. Independientes en el oficio, alineados en la convicción.',
      'energy.tag': 'Nº 01 — Energía', 'energy.title': 'Comercio de <em>Petróleo y Gas</em>',
      'energy.body': 'Una mesa de comercio físico y contractual que mueve hidrocarburos a través de fronteras — abasto, logística y riesgo, operada por gente que lo ha hecho en todo tipo de mercado. Disciplina sobre volumen; cada posición se entiende antes de tomarse.',
      'energy.a1.k': 'Actividad', 'energy.a1.v': 'Comercio físico y papel',
      'energy.a2.k': 'Alcance', 'energy.a2.v': 'Transfronterizo',
      'energy.a3.k': 'Mandato', 'energy.a3.v': 'Abasto con riesgo gestionado',
      'spirits.tag': 'Nº 02 — Destilados', 'spirits.title': '<em>Destilados</em>',
      'spirits.body': 'Un portafolio de casas de agave hechas a la manera lenta — fincas orgánicas, hornos de mampostería, alambiques de cobre y botellas terminadas a mano. Somos dueños del oficio de principio a fin, desde la tierra roja de los altos hasta la etiqueta, y no lo recortamos por escala.',
      'spirits.a1.k': 'Casas', 'spirits.a2.k': 'Categoría', 'spirits.a2.v': 'Tequila y mezcal',
      'spirits.a3.k': 'Origen', 'spirits.a3.v': 'Jalisco · Oaxaca', 'spirits.cta': 'Tequila Tres Ese ↗',
      'film.tag': 'Nº 03 — Cine', 'film.title': 'Producción de <em>Cine</em>',
      'film.body': 'Financiamos y producimos cine — respaldando a directores con un punto de vista y a historias que merecen la paciencia que exigen. Del desarrollo a la entrega, estamos del lado de la obra, no de la hoja de cálculo, y nos quedamos hasta el último cuadro.',
      'film.a1.k': 'Rol', 'film.a1.v': 'Financiamiento y producción',
      'film.a2.k': 'Formatos', 'film.a2.v': 'Largometraje y documental',
      'film.a3.k': 'Postura', 'film.a3.v': 'Dirigido por el director',
      'agri.tag': 'Nº 04 — Agricultura', 'agri.title': 'Tierra y <em>Agricultura</em>',
      'agri.body': 'Poseemos y trabajamos tierra productiva — fincas de agave, huertos y cultivos de campo manejados por la salud del suelo a largo plazo. Tierra real, cosechas reales; el capital más paciente que sostenemos, y el cimiento sobre el que se construye lo demás.',
      'agri.a1.k': 'Activos', 'agri.a1.v': 'Fincas y campos de cultivo',
      'agri.a2.k': 'Práctica', 'agri.a2.v': 'Orgánico primero',
      'agri.a3.k': 'Horizonte', 'agri.a3.v': 'Generacional',
      'approach.eyebrow': 'Filosofía', 'approach.title': 'Cómo sostenemos <em>lo que sostenemos.</em>',
      'tenet1.k': 'Poseer, no rentar', 'tenet1.v': 'Tomamos posiciones reales en activos reales y nos quedamos. Propiedad, no exposición.',
      'tenet2.k': 'Horizontes largos', 'tenet2.v': 'Medimos en décadas. El tiempo es la ventaja que pocos están dispuestos a gastar.',
      'tenet3.k': 'Operadores adentro', 'tenet3.v': 'Estamos dentro del negocio, no por encima — cerca del oficio y del riesgo.',
      'tenet4.k': 'Calidad primero', 'tenet4.v': 'No diluiremos lo que hacemos por crecer más rápido. El estándar antes que la escala.',
      'contact.eyebrow': 'Contacto', 'contact.title': 'Para alianzas <em>y consultas.</em>',
      'contact.p': 'Para inversión, alianzas o prensa, escriba a la oficina del grupo. Las consultas serias las leen quienes pueden responderlas.',
      'contact.addr': 'Ciudad de México, México',
      'form.first': 'Nombre', 'form.last': 'Apellido', 'form.email': 'Correo',
      'form.company': 'Empresa', 'form.opt': '(opcional)', 'form.message': 'Mensaje', 'form.send': 'Enviar mensaje',
      'footer.sub': 'Sociedad privada de cartera', 'footer.place': 'Ciudad de México, México',
      'footer.rights': 'Todos los derechos reservados.', 'footer.made': 'Hecho en México',
      'status.sending': 'Enviando…', 'status.ok': 'Gracias — nos pondremos en contacto.', 'status.err': 'Por favor complete los campos requeridos.'
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

  /* ---------- contact form (front-end only) ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = form.querySelector('.form-status');
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
      status.textContent = dict('status.sending');
      status.classList.remove('is-ok');
      setTimeout(function () {
        status.textContent = dict('status.ok');
        status.classList.add('is-ok');
        form.reset();
      }, 700);
    });
  }
})();
