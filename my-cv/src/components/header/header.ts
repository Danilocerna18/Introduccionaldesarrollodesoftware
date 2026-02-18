
class AppHeader extends HTMLElement {
  async connectedCallback() {
    const htmlUrl = new URL('./header.html', import.meta.url).href;
    const cssUrl = new URL('./header.css', import.meta.url).href;
    const [htmlResp, cssResp] = await Promise.all([fetch(htmlUrl), fetch(cssUrl)]);
    const html = await htmlResp.text();
    const css = await cssResp.text();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${css}</style>${html}`;


    const btn = shadow.querySelector('#btnTema');
    if (btn) {
      btn.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light');
        btn.textContent = isLight ? 'Dark mode' : 'Light mode';
        btn.setAttribute('aria-pressed', String(isLight));
        try { localStorage.setItem('themeLight', String(isLight)); } catch (e) {}
      });

      try {
        const saved = localStorage.getItem('themeLight');
        if (saved === 'true') {
          document.body.classList.add('light');
          btn.textContent = 'Dark mode';
          btn.setAttribute('aria-pressed', 'true');
        }
      } catch (e) {}
    }
  }
}
customElements.define('app-header', AppHeader);
export default AppHeader;