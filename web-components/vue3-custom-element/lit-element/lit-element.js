import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
    };
  }
  constructor() {
    super();
    this.msg = 'Hello World';
  }
  render() {
    return html`
      <p>${this.msg}</p>
    `;
  }
}

customElements.define('my-element', MyElement);