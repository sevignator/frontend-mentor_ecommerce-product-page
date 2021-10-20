import { LitElement, html } from 'lit';

class UserActions extends LitElement {
  render() {
    return html`
      <slot name="cart"></slot>
      <slot name="profile"></slot>
    `;
  }
}
customElements.define('user-actions', UserActions);
