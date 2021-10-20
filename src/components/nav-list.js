import { LitElement, html, css } from 'lit';

class MainNav extends LitElement {
  static styles = css`
    ul {
      display: flex;
      gap: 1em;
      padding: 0;
      list-style: none;
    }
  `;

  render() {
    return html`
      <ul>
        <slot></slot>
      </ul>
    `;
  }
}
customElements.define('main-nav', MainNav);
