import {html, css, LitElement} from 'lit';

export class MyElement extends LitElement {
  static get styles() {
    return css`p { color: blue }`;
  }

  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = 'World 🌎';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('my-element', MyElement);