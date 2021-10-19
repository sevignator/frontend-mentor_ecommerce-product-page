import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

class MainNavigation extends LitElement {
  static properties = {
    links: {},
  };

  constructor() {
    super();
    this.links = [
      { text: 'Collections', url: '#' },
      { text: 'Men', url: '#' },
      { text: 'Women', url: '#' },
      { text: 'About', url: '#' },
      { text: 'Contact', url: '#' },
    ];
  }

  render() {
    return html`
      <ul>
        ${repeat(
          this.links,
          link => html`<li><a href="${link.url}">${link.text}</a></li>`
        )}
      </ul>
    `;
  }
}
customElements.define('main-navigation', MainNavigation);
