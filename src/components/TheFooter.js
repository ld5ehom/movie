import { Component } from '../core/core'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { portfolio } = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${portfolio}">
          TaeWook Park - UCLA Linguistics & Computer Science
        </a>
      </div>
    `
  }
}
