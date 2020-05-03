import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CharacterActions from '../../../store/modules/character/actions'
import SeriesList from '../../Series/List'
import Loading from '../../../components/Loading'
import NoResult from '../../../components/NoResult'
import { fotmatUrl } from '../../../util/format'
import CharacterAnalytics from './CharacterAnalytics'
import CharacterHeaderDetails from './CharacterHeaderDetails'

import { Container } from './styles'

class CharacterDetail extends Component {
  componentDidMount () {
    const { match, findCharacterRequest } = this.props
    const { results } = this.props.characters

    if (!results || results.length === 0) {
      findCharacterRequest(match.params.id)
      return
    }

    const selectedCharacter = results.find(
      c => c.id === Number(match.params.id)
    )
    if (!selectedCharacter) {
      findCharacterRequest(match.params.id)
    }
  }

  render () {
    const { match } = this.props
    const { results, loading } = this.props.characters

    if (loading) return <Loading />

    if (!results || results.length === 0) return <NoResult />

    const selectedCharacter = results.find(
      c => c.id === Number(match.params.id)
    )

    return (
      <Container>
        <CharacterHeaderDetails selectedCharacter={selectedCharacter} />
        <CharacterAnalytics selectedCharacter={selectedCharacter} />
        {selectedCharacter.series.available > 0 && (
          <SeriesList id={selectedCharacter.id} />
        )}
      </Container>
    )
  }
}
const mapStateToProps = state => ({
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
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail)
