import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SeriesActions from '../../../store/modules/series/actions'
import Loading from '../../../components/Loading'
import { fotmatUrl } from '../../../util/format'

import SerieItem from './SerieItem'

import { LoadingDetails } from './styles'

class SeriesList extends Component {
  componentDidMount () {
    const { id } = this.props
    const { listSeriesRequest } = this.props
    listSeriesRequest(id)
  }

  displayCharacterSeries = results => {
    return results.length > 0 ? (
      <section>
        {results.map(c => (
          <SerieItem serie={c} key={c.id} />
        ))}
      </section>
    ) : (
      <LoadingDetails>
        Loading series ...
        <Loading color={'#191919'} />
      </LoadingDetails>
    )
  }

  render () {
    const { results, loading } = this.props.series

    if (loading) return <Loading color='#191919' />

    return this.displayCharacterSeries(results)
  }
}
const mapStateToProps = state => ({
  series: {
    ...state.series,
    results: state.series.results.map(item => ({
      ...item,
      urlFormated: fotmatUrl(
        item.thumbnail.path,
        item.thumbnail.extension,
        'landscape_medium'
      )
    }))
  }
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(SeriesActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SeriesList)
