class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
    <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">店んち'Misenchi</h1>
            <p class="hero__subtitle">Find Restaurants easily</p>
        </div>
    </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
