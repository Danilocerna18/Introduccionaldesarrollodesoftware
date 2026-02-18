// Código simple y claro: saludo, toggle tema, filtrar, ocultar tablas, mostrar contacto, animar skills, nav activo

// SALUDO
document.getElementById('btnSaludo').addEventListener('click', function () {
  var nombre = document.getElementById('nombre').value.trim();
  var resultado = document.getElementById('resultado');
  var hora = new Date().getHours();
  var saludo = '';
  if (hora >= 5 && hora <= 11) saludo = 'Buenos días';
  else if (hora >= 12 && hora <= 18) saludo = 'Buenas tardes';
  else saludo = 'Buenas noches';

  if (!nombre) {
    resultado.textContent = 'Por favor ingresa tu nombre.';
    resultado.style.color = '#ff6b6b';
  } else {
    resultado.textContent = saludo + ', ' + nombre + '. ¡Mucho éxito!';
    resultado.style.color = '';
  }
});

// TOGGLE TEMA (simple y legible)
var btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', function () {
  var isLight = document.body.classList.toggle('light');
  // texto del botón claro y legible
  btnTema.textContent = isLight ? 'Dark mode' : 'Light mode';
  btnTema.setAttribute('aria-pressed', String(isLight));
});

// FILTRAR conocimientos (básico)
var buscador = document.getElementById('buscador');
var lista = document.getElementById('conocimiento');
var clearSearch = document.getElementById('clearSearch');

if (buscador && lista) {
  var items = Array.prototype.slice.call(lista.getElementsByTagName('li'));
  buscador.addEventListener('input', function () {
    var q = buscador.value.trim().toLowerCase();
    items.forEach(function (li) {
      var text = li.textContent.toLowerCase();
      li.style.display = text.indexOf(q) !== -1 ? 'list-item' : 'none';
    });
  });
  if (clearSearch) {
    clearSearch.addEventListener('click', function () {
      buscador.value = '';
      items.forEach(function (li) { li.style.display = 'list-item'; });
      buscador.focus();
    });
  }
}

// OCULTAR / MOSTRAR tabla de experiencia
var btnTabla = document.getElementById('btnTabla');
btnTabla.addEventListener('click', function () {
  var tabla = document.getElementById('miTabla');
  if (!tabla) return;
  if (tabla.style.display === 'none') {
    tabla.style.display = 'table';
    btnTabla.textContent = 'Ocultar tabla';
  } else {
    tabla.style.display = 'none';
    btnTabla.textContent = 'Mostrar tabla';
  }
});

// MOSTRAR / OCULTAR contacto (botón fuera del bloque)
var btnContacto = document.getElementById('btnContacto');
btnContacto.addEventListener('click', function () {
  var bloque = document.getElementById('bloqueContacto');
  if (!bloque) return;
  var hidden = window.getComputedStyle(bloque).display === 'none';
  if (hidden) {
    bloque.style.display = 'block';
    btnContacto.textContent = 'Ocultar contacto';
  } else {
    bloque.style.display = 'none';
    btnContacto.textContent = 'Mostrar contacto';
  }
});

// NAV: marcar link activo según scroll (básico)
var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });

function onScroll() {
  var pos = window.scrollY + window.innerHeight * 0.25;
  for (var i = sections.length - 1; i >= 0; i--) {
    var sec = sections[i];
    if (!sec) continue;
    if (pos >= sec.offsetTop) {
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      var target = document.querySelector('a[href="#' + sec.id + '"]');
      if (target) target.classList.add('active');
      break;
    }
  }
}
window.addEventListener('scroll', onScroll);
onScroll();

// ANIMAR barras de skills cuando entran en viewport (simple)
function animateSkills() {
  var fills = document.querySelectorAll('.skill-fill');
  for (var i = 0; i < fills.length; i++) {
    var f = fills[i];
    var rect = f.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 60) {
      var w = f.getAttribute('data-width') || '0%';
      f.style.width = w;
    }
  }
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
animateSkills();

// REVEAL simple: añadir clase visible a secciones al entrar
function revealSections() {
  var secs = document.querySelectorAll('.section');
  for (var i = 0; i < secs.length; i++) {
    var s = secs[i];
    var r = s.getBoundingClientRect();
    if (r.top <= window.innerHeight - 80) {
      s.classList.add('visible');
    }
  }
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
revealSections();