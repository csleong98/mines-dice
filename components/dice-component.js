class Dice extends HTMLElement {
    constructor() {
        this.innerHTML = `
        <ol class="die-list even-roll" data-roll="1" id="die-1">
                <li class="die-item" data-side="1">
                    <span class="dot"></span>
                </li>
                <li class="die-item" data-side="2">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </li>
                <li class="die-item" data-side="3">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </li>
                <li class="die-item" data-side="4">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </li>
                <li class="die-item" data-side="5">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </li>
                <li class="die-item" data-side="6">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </li>
            </ol>
        `
    }
  }

customElements.define('dice-component', Dice)