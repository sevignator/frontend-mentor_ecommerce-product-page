import { LitElement, html, css } from 'lit';

class ImageGallery extends LitElement {
  static styles = css`
    section {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }

    .main-image {
      grid-column: 1 / span 4;
    }

    ::slotted(img) {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  `;

  static properties = {
    images: {},
  };

  constructor() {
    super();
    this.images = [];
    this.activeImage;
  }

  render() {
    this._getImages();
    this._setMainImage();

    return html`
      <section>
        <div class="main-image">
          <slot name="large"></slot>
        </div>
        <slot
          name="small"
          class="thumbnail"
          @click="${this._clickHandler}"
        ></slot>
      </section>
    `;
  }

  _getImages() {
    const largeImages = [...this.querySelectorAll('img[slot="large"]')];
    const smallImages = [...this.querySelectorAll('img[slot="small"]')];

    for (let i = 0; i < largeImages.length; i++) {
      this.images.push({
        large: largeImages[i],
        small: smallImages[i],
      });
    }
  }

  _setMainImage(index = 0) {
    this.activeImage?.classList.remove('active');
    this.activeImage = this.images[index].large;
    this.activeImage.classList.add('active');
  }

  _clickHandler(e) {
    this._setMainImage(e.target.dataset.index);
  }
}
customElements.define('image-gallery', ImageGallery);
