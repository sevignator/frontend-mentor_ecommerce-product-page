import { LitElement, html } from 'lit';

class UserProfile extends LitElement {
  render() {
    return html`
      <slot name="link">
        <slot name="avatar"></slot>
      </slot>
    `;
  }
}
customElements.define('user-profile', UserProfile);
