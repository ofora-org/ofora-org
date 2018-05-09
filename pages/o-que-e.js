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
            <span>O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações na paisagem urbana.</span>
          </ContentWrapper>
        </div>
        <ContentWrapper style={pageStyle}>
          <P><div className='title'>/Sobre</div></P>
          <P>Para levantar histórias, urgências e possíveis futuros dos grandes centros urbanos, o Fora parte da escuta da população e da análise de dados para trazer à tona pontos de vista, impressões e demandas ligadas ao espaço público em São Paulo.</P>
          <P>A partir dessas pesquisas, o Fora impulsiona uma programação de práticas artísticas, atividades educativas e ações que repensam as paisagens de diferentes áreas da cidade.</P>
          <P>Atuando também como canal de cultura e comunicação nas ruas e na internet, o Fora estimula uma diversidade de práticas, narrativas e encontros para refletir e imaginar sobre o que nos é comum.</P>
          <P>Diante dos atuais esgotamentos históricos e políticos, é no Fora que nos encontramos para conhecer e exercer diferentes formas de vida.</P>
          <div style={{textAlign: 'center'}}><Img src='/static/oquee.gif' /></div>
          <P><div className='title'>/Pesquisas</div></P>
          <P>Para propor reflexões públicas e nortear as ações do Fora, a área de pesquisa social atua por meios digitais e trabalhos de campo, colhendo dados e realizando escutas de diferentes vivências, visões e vozes na cidade de São Paulo. Investiga possibilidades de vida no espaço público e o que se perde na ausência desses locais, refletindo sobre formas viáveis de criar, manter e viver a rua.</P>
          <P><div className='title'>/Culturas</div></P>
          <P>Como canal de comunicação e cultura o Fora reúne um grupo diverso e multidisciplinar para promover encontros e disparar imaginações sobre nossos corpos, a cidade e a vida comum. Por meio da produção e difusão de conteúdo na esfera digital e de um programa de arte e pedagogia nas ruas, aborda assuntos de interesse global a partir de perspectivas locais, fazendo circular afetos e maneiras de viver espaços públicos.</P>
          <P><div className='title'>/Paisagens</div></P>
          <P>Para atuar na paisagem urbana o Fora investiga o que se pode ver, ouvir, cheirar, provar e tocar na cidade. Promove práticas paisagísticas com pequenas infraestruturas, mobiliários, vestuários e composições botânicas. A partir da pesquisa social e das experiências artísticas e pedagógicas, buscará também desenvolver projetos para atuar na criação de espaços comuns. </P>
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
          .title {
            margin-left: 30px;
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
  fontSize: 24
}
