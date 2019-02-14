const template = document.createElement('template');
template.innerHTML = `
    <style>
      :host {
        display: inline-block;
        border: black solid;
        width: 24px;
        height: 24px;
      }
    </style>
  `;

class Card extends HTMLElement {
    constructor() {
        super();
        console.log('its a me, a card');

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export default Card;