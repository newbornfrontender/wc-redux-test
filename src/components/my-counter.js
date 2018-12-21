import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../store';
import { increment, decrement } from '../actions/counter';

class MyCounter extends connect(store)(LitElement) {
  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  render() {
    const { counter } = this;

    return html`
      <p>Counter: ${counter}</p>

      <button @click="${() => store.dispatch(increment())}">Increment</button>
      <button @click="${() => store.dispatch(decrement())}">Decrement</button>
    `;
  }

  stateChanged(state) {
    this.counter = state.counter.counter;
  }
}

customElements.define('my-counter', MyCounter);
