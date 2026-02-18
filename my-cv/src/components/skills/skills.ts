
class AppSkills extends HTMLElement {
  async connectedCallback() {
    const htmlUrl = new URL('./skills.html', import.meta.url).href;
    const cssUrl = new URL('./skills.css', import.meta.url).href;
    const [htmlResp, cssResp] = await Promise.all([fetch(htmlUrl), fetch(cssUrl)]);
    const html = await htmlResp.text();
    const css = await cssResp.text();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<style>${css}</style>${html}`;


    const fills = Array.from(shadow.querySelectorAll('.skill-fill')) as HTMLElement[];
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const w = el.getAttribute('data-width') || '0%';
            el.style.width = w;
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.2 });
      fills.forEach(f => obs.observe(f));
    } else {
      fills.forEach(f => { const w = f.getAttribute('data-width') || '0%'; f.style.width = w; });
    }
  }
}
customElements.define('app-skills', AppSkills);
export default AppSkills;