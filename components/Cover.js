import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Title from '~/components/Title'
import MenuLink from '~/components/MenuLink'
import ImageGalery from '~/components/base/ImageGalery'
import moment from 'moment'
import { Date } from 'prismic-reactjs'

export default class PhotosAndVideosCover extends React.Component {
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
        <div style={coverMidStyle}>
          <h1 style={h1Style}>{ doc.data.title[0].text }</h1>
          <ImageGalery media={{videos, photos}} style={{flex: 1, textAlign: 'right', position: 'relative'}}/>
        </div>
        <div style={coverBotStyle}>
          <p style={dateStyle} />
          <p style={authorStyle}>{ authorName && <span>por {authorName}</span> }</p>
          <p style={dateStyle}>{moment(Date(date)).format('DD.MM.YY')}</p>
        </div>
      </ContentWrapper>
    )
  }
}

const invertStyle = {
  fontFamily: "'Source Serif Pro', serif"
}
const coverWrapperStyle = {
  ...invertStyle,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
const coverMidStyle = {
  display: 'flex',
  maxHeight: 'calc(90% - 130px)'
}
const coverBotStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 10
}

const h1Style = {
  paddingRight: 50,
  fontSize: 41,
  fontWeight: 600,
  margin: 0,
  flex: 0.56,
  marginBottom: '-0.30em'
}

const authorStyle = {
  fontSize: 41,
  textAlign: 'center',
  margin: 0,
  maxWidth: '30%',
  zIndex: 1
}

const dateStyle = {
  width: 200,
  textAlign: 'right',
  fontSize: 41,
  margin: 0
}
