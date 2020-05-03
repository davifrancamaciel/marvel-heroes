import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import * as CharacterActions from '../../../store/modules/character/actions'
import { fotmatUrl } from '../../../util/format'
import Loading from '../../../components/Loading'
import NoResult from '../../../components/NoResult'
import { List } from './styles'

class CharacterList extends Component {
  componentDidMount () {
    const { listCharacterRequest, search } = this.props
    const { limit } = this.props.characters

    listCharacterRequest(search, limit)
  }

  render () {
    const { results, loading } = this.props.characters

    if (loading) return <Loading />

    if (!results || results.length === 0) return <NoResult />

   return (
      <List>
        {results.map(item => (
          <li key={item.id}>
            <Link to={`/characters/${item.id}`}>
              <img src={item.urlFormated} alt={item.name} />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </List>
    )    
  }
}
const mapStateToProps = state => ({
  search: state.search,
  characters: {
    ...state.characters,
    results: state.characters.results.map(item => ({
      ...item,
      urlFormated: fotmatUrl(item.thumbnail.path, item.thumbnail.extension)
    }))
  }
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(CharacterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
