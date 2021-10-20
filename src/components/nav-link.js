import { LitElement, html } from 'lit';

class NavLink extends LitElement {
  render() {
    return html`<li><slot></slot></li>`;
  }
}
customElements.define('nav-link', NavLink);
