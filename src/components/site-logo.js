import { LitElement, html } from 'lit';

class SiteLogo extends LitElement {
  static properties = {
    url: {},
  };

  constructor() {
    super();
    this.url = '#';
  }

  render() {
    return html`<a href="${this.url}"><slot></slot></a> `;
  }
}
customElements.define('site-logo', SiteLogo);
