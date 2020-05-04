import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdArrowBack } from 'react-icons/md'

import * as CharacterActions from '../../../store/modules/character/actions'

import Form from './Form'
import Loading from '../../../components/Loading'
import NoResult from '../../../components/NoResult'
import { fotmatUrl } from '../../../util/format'

import { Container, BackLink } from './styles'

class CharacterEdit extends Component {
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
    console.log(selectedCharacter)
    return (
      <Container>
        <BackLink to={`/characters/${selectedCharacter.id}`}>
          <MdArrowBack size={26} color='#191919' />
        </BackLink>
        <img src={selectedCharacter.urlFormated} alt={selectedCharacter.name} />
        <Form selectedCharacter={selectedCharacter} />
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
export default connect(mapStateToProps, mapDispatchToProps)(CharacterEdit)
