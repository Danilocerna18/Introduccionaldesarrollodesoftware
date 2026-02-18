

import '../components/header/header.ts';
import '../components/home/home.ts';
import '../components/about/about.ts';
import '../components/skills/skills.ts';
import '../components/cursos/cursos.ts';
import '../components/experiencia/experiencia.ts';
import '../components/educacion/educacion.ts';
import '../components/contact/contact.ts';
import '../components/footer/footer.ts';

async function mountApp() {
  try {
    const htmlUrl = new URL('./app.html', import.meta.url).href;
    const resp = await fetch(htmlUrl);
    const html = await resp.text();


    document.body.innerHTML = html;


    await customElements.whenDefined('app-footer');
    const footer = document.querySelector('app-footer') as HTMLElement | null;
    if (footer && footer.shadowRoot) {
      const yearEl = footer.shadowRoot.querySelector('#year');
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    }


  } catch (err) {

    console.error('Error mounting app:', err);
  }
}


export const App = {
  mount: mountApp
};


mountApp().catch((e) => {

  console.error('mountApp failed:', e);
});