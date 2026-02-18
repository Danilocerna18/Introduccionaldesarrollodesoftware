
class AppFooter extends HTMLElement {
  async connectedCallback() {
    const htmlUrl = new URL('./footer.html', import.meta.url).href;
    const cssUrl = new URL('./footer.css', import.meta.url).href;
    const [htmlResp, cssResp] = await Promise.all([fetch(htmlUrl), fetch(cssUrl)]);
    const html = await htmlResp.text();
    const css = await cssResp.text();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${css}</style>${html}`;
  }
}
customElements.define('app-footer', AppFooter);
export default AppFooter;