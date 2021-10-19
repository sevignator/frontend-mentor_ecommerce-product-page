import { LitElement, html } from 'lit';

import './main-navigation';

class SiteNavbar extends LitElement {
  static properties = {
    siteName: { attribute: 'site-name' },
  };

  constructor() {
    super();
    this.siteName = '';
  }

  render() {
    return html`
      <header>
        <p><a href="#">${this.siteName}</a></p>
        <slot name="navigation"></slot>
      </header>
    `;
  }
}
customElements.define('site-navbar', SiteNavbar);
