import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import ImageGalery from '~/components/base/ImageGalery'
import moment from 'moment'
import { Date } from 'prismic-reactjs'

export default class CoverMobile extends React.Component {
  render () {
    const doc = this.props.doc
    const { author, photos, category, videos, date } = doc.data
    const authorName = author.data && author.data.name[0].text
    const categoryName = category.data && category.data.name[0].text

    return (
      <ContentWrapper style={coverWrapperStyle}>
        <Title>
          <MenuLink href={{ pathname: '/acoes' }}>/Ações & imaginações</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes', query: {initialCategory: categoryName} }}>{`/${categoryName}`}</MenuLink>
        </Title>
        <div>
          <ImageGalery media={{videos, photos}} style={{flex: 1, textAlign: 'right', position: 'relative'}}/>
          <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
        </div>
        <div style={coverBotStyle}>
          <p style={dateStyle} />
          <p style={authorStyle}>{ authorName && <span><span style={{fontSize: 24, fontWeight: 600}}>Por</span> {authorName}</span> }</p>
          <p style={dateStyle}>{moment(Date(date)).format('DD.MM.YY')}</p>
        </div>
      </ContentWrapper>
    )
  }
}

const invertStyle = {
  background: '#000',
  color: 'white',
  fontFamily: "'Source Serif Pro', serif"
}

const coverWrapperStyle = {
  ...invertStyle,
  //height: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const coverBotStyle = {
  justifyContent: 'space-between',
  paddingTop: 10,
  maxHeight: 52
}

const h1Style = {
  paddingRight: 50,
  fontSize: 41,
  fontWeight: 600,
  margin: 0,
  flex: 0.56,
  alignSelf: 'flex-end',
  marginBottom: '-0.30em'
}

const authorStyle = {
  fontSize: 41,
  margin: 0,
  maxHeight: 85,
  zIndex: 1
}

const dateStyle = {
  fontSize: 41,
  margin: 0
}
