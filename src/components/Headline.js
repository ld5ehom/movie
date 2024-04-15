import { Component } from '../core/core'

// Main 페이지 중간 부분

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        <span>Welcome !</span><br />
        Movie Search Website
      </h1>
      <p>
        Search movies with the OMDb API.<br />
      </p>
    `
  }
}
