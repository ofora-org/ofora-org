import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '~/components/LogoWithMenu'
import ContentWrapper from '~/components/struct/ContentWrapper'
import PageWrapper from '~/components/struct/PageWrapper'
import Title from '~/components/Title'
import P from '~/components/base/Paragraph'
import Img from '~/components/base/Image'

export default class Oquee extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    return { title }
  }

  render () {
    return (
      <PageWrapper invert>
        <div className='cover'>
          <ContentWrapper style={pageStyle}>
            <Title>/O que é</Title>
            <span>texto</span>
          </ContentWrapper>
        </div>
        <ContentWrapper style={pageStyle}>
          <p className='summary'>O Fora é sobre outras maneiras de viver na cidade e acontece por meio de pesquisas sociais, ações de cultura e transformação da paisagem urbana.</p>
          <Img src='http://zonewallpaper.net/wp-content/uploads/2017/10/Best-4K-Wallpaper-2017.jpg' />
          <P>Para pensar histórias, urgências e possíveis futuros dos grandes centros urbanos, toma como ponto de partida a escuta da população — na internet e nas ruas — e a análise de dados para levantar percepções, desejos e demandas ligadas ao espaço público. Em paralelo, com um canal de comunicação cujo objetivo é estimular a imaginação sobre a cidade e engajar nos processos de pesquisa, aborda questões de interesse global a partir de perspectivas locais, abrindo espaço para uma diversidade de manifestações culturais que refletem sobre a vida comum e estimulam práticas transformadoras.</P>
          <P>Para pensar histórias, urgências e possíveis futuros dos grandes centros urbanos, toma como ponto de partida a escuta da população — na internet e nas ruas — e a análise de dados para levantar percepções, desejos e demandas ligadas ao espaço público. Em paralelo, com um canal de comunicação cujo objetivo é estimular a imaginação sobre a cidade e engajar nos processos de pesquisa, aborda questões de interesse global a partir de perspectivas locais, abrindo espaço para uma diversidade de manifestações culturais que refletem sobre a vida comum e estimulam práticas transformadoras.</P>
          <P>Para pensar histórias, urgências e possíveis futuros dos grandes centros urbanos, toma como ponto de partida a escuta da população — na internet e nas ruas — e a análise de dados para levantar percepções, desejos e demandas ligadas ao espaço público. Em paralelo, com um canal de comunicação cujo objetivo é estimular a imaginação sobre a cidade e engajar nos processos de pesquisa, aborda questões de interesse global a partir de perspectivas locais, abrindo espaço para uma diversidade de manifestações culturais que refletem sobre a vida comum e estimulam práticas transformadoras.</P>
          <Img src='http://zonewallpaper.net/wp-content/uploads/2017/10/Best-4K-Wallpaper-2017.jpg' />
          <P>Para pensar histórias, urgências e possíveis futuros dos grandes centros urbanos, toma como ponto de partida a escuta da população — na internet e nas ruas — e a análise de dados para levantar percepções, desejos e demandas ligadas ao espaço público. Em paralelo, com um canal de comunicação cujo objetivo é estimular a imaginação sobre a cidade e engajar nos processos de pesquisa, aborda questões de interesse global a partir de perspectivas locais, abrindo espaço para uma diversidade de manifestações culturais que refletem sobre a vida comum e estimulam práticas transformadoras.</P>
        </ContentWrapper>
        <style jsx>{`
          .cover {
            height: 100vh;
            background: url('/static/oqueebg.jpg');
            background-size: cover;
            background-position: center bottom;
            color: white;
            font-family: 'Source Serif Pro', serif;
            position: relative;
          }
          .cover span {
            position: absolute;
            font-size: 29px;
            top: 49%;
          }
        `}</style>
      </PageWrapper>
    )
  }
}

const pageStyle = {
  fontFamily: "'Source Serif Pro', serif"
}

const summaryStyle = {
  maxWidth: 400,
  marginLeft: 100,
  marginTop: 48,
  marginBottom: 48,
  fontSize: 20
}
