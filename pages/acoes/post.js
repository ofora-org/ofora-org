import React from 'react'
import Prismic from 'prismic-javascript'
import PageWrapper from '~/components/struct/PageWrapper'
import ContentWrapper from '~/components/struct/ContentWrapper'
import Cover from '~/components/Cover'
import CoverMobile from '~/components/CoverMobile'
import AuthorTeaser from '~/components/AuthorTeaser'
import Sidebars from '~/components/Sidebars'
import P from '~/components/base/Paragraph'
import RelatedContentWrapper from '~/components/RelatedContentWrapper'
import SiteMap from '~/components/SiteMap'
import Quote from '~/components/base/Quote'
import NotedParagraph from '~/components/base/NotedParagraph'
import ImageGalery from '~/components/base/ImageGalery'
import Video from '~/components/base/Video'

export default class Index extends React.Component {
  static async getInitialProps ({ query }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const doc = await api.getByID(query.id, { fetchLinks: ['author.name', 'author.bio', 'author.photo', 'category.name', 'category.description'] })
    const related = await api.getByIDs(doc.data.related.map(item => item.related_item.id), { fetchLinks: ['author.name', 'category.name'] })
    return { doc, related: related.results }
  }

  render () {
    const { doc, related } = this.props
    const { author, photos, category, videos, body, theme } = doc.data
    const coverPhoto = photos.length ? photos[0].photo.url : videos[0].video.thumbnail_url
    console.log(theme)
    const bgcolor = theme === 'Escuro' ? 'black' : '#dfdfdf'
    const textColor = theme === 'Escuro' ? 'white' : 'black'
    return (
      <PageWrapper invert={theme === 'Escuro'} title={doc.data.title[0].text} cover={coverPhoto} style={{background: '#dfdfdf'}}>
        <div style={{background: bgcolor, color: textColor}}>
          <div className='desktop-only'><Cover {...this.props} /></div>
          <div className='mobile-only'><CoverMobile {...this.props} /></div>

          <ContentWrapper style={{ paddingBottom: '70px', paddingTop: '50px', position: 'relative', ...invertStyle }}>
            <Sidebars doc={doc} />
              {renderBody(body)}
            <AuthorTeaser author={author} style={{ marginTop: 80, paddingLeft: 0 }} />
          </ContentWrapper>
        </div>
        <RelatedContentWrapper related={related} />
        <ContentWrapper style={{background: 'rgb(207,207,207)'}}>
          <SiteMap />
        </ContentWrapper>
        <style jsx>{`
          @media only screen and (max-width: 752px) {
            div.desktop-only { display: none; }
          }
          @media only screen and (min-width: 752px) {
            div.mobile-only { display: none; }
          }
        `}</style>
      </PageWrapper>
    )
  }
}

const invertStyle = {
  fontFamily: "'Source Serif Pro', serif"
}

const bodyStyle = {
  fontFamily: "'Source Sans Pro', sans-serif",
  marginTop: '-1em'
}


const renderBody = (body) => {
  return body.map((slice) => {
    if (slice.slice_type === 'text') {
      return <P style={bodyStyle}>{slice.primary.text}</P>
    }
    if (slice.slice_type === 'quote') {
      return <Quote {...slice.primary} />
    }
    if (slice.slice_type === 'texto_e_nota') {
      return <NotedParagraph {...slice.primary} />
    }
    if (slice.slice_type === 'galeria') {
      console.log(slice.items)
      return <P style={{margin: '60px auto'}}><ImageGalery media={{photos: slice.items, videos: []}} /></P>
    }
    if (slice.slice_type === 'video') {
      return <P style={{margin: '60px auto 77px'}}><Video {...slice.primary.video} /></P>
    }
  })
}
