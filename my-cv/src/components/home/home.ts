
class AppHome extends HTMLElement {
  async connectedCallback() {
    const htmlUrl = new URL('./home.html', import.meta.url).href;
    const cssUrl = new URL('./home.css', import.meta.url).href;
    const [htmlResp, cssResp] = await Promise.all([fetch(htmlUrl), fetch(cssUrl)]);
    const html = await htmlResp.text();
    const css = await cssResp.text();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${css}</style>${html}`;
    
    const btn = shadow.querySelector('#btnSaludo');
    const input = shadow.querySelector('#nombre') as HTMLInputElement | null;
    const resultado = shadow.querySelector('#resultado');
    if (btn && input && resultado) {
      btn.addEventListener('click', () => {
        const nombre = input.value.trim();
        const hora = new Date().getHours();
        let saludo = '';
        if (hora >= 5 && hora <= 11) saludo = 'Buenos días';
        else if (hora >= 12 && hora <= 18) saludo = 'Buenas tardes';
        else saludo = 'Buenas noches';
        if (!nombre) {
          resultado.textContent = 'Por favor ingresa tu nombre.';
          (resultado as HTMLElement).style.color = '#ff6b6b';
        } else {
          resultado.textContent = saludo + ', ' + nombre + '. ¡Mucho éxito!';
          (resultado as HTMLElement).style.color = '';
        }
      });
    }
  }
}
customElements.define('app-home', AppHome);
export default AppHome;