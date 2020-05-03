import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdSearch } from 'react-icons/md'

import { listCharacterRequest } from '../../store/modules/character/actions'
import { changeSearchText } from '../../store/modules/search/actions'

import { Search } from './styles'

class SearchForm extends Component {
  keyHandler = e => {
    const { changeSearchText } = this.props
    if (e.key === 'Enter') {
      this.handleSearch()
    } else if (e.key === 'Escape') {
      changeSearchText('')
    }
  }

  handleSearch () {
    const { listCharacterRequest, search } = this.props
    const { limit } = this.props.characters
    listCharacterRequest(search, limit)
  }

  render () {
    const { search, changeSearchText } = this.props
    return (
      <Search>
        <input
          type='text'
          value={search}
          onChange={e => changeSearchText(e.target.value)}
          onKeyUp={e => this.keyHandler(e)}
        />
        <button type='button' onClick={() => this.handleSearch()}>
          <MdSearch size={26} color='#FFF' />
        </button>
      </Search>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
  characters: state.characters
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ listCharacterRequest, changeSearchText }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
