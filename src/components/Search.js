import { Component } from '../core/core'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    // 뒤로가기 버튼을 눌렀을 때 검색어를 유지
    // input 요소의 value 속성에 기존 검색어를 할당
    this.el.innerHTML = /* html */ `
      <input 
        value="${movieStore.state.searchText}"
        placeholder="Enter the movie title" /> 
      <button class="btn btn-primary">
        Search
      </button>
    `

    // this.element 안에서 input 요소를 찾아서 inputEl에 할당
    const inputEl = this.el.querySelector('input')

    // input value event
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    //this element안의 쿼리 셀렉터를 통해 버튼을 찾음 
    const btnEl = this.el.querySelector('.btn')

    //click event
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}
