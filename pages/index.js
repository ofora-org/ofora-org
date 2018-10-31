import React from 'react'
import Prismic from 'prismic-javascript'
import Head from '~/components/struct/Head'
import LogoWithMenu from '~/components/LogoWithMenu'
import SliderTunnel from '~/components/SliderTunnel'

export default class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const api = await Prismic.api('https://fora.prismic.io/api/v2')
    const homeDocument = await api.getSingle('home')
    const title = homeDocument.data.title[0].text
    const query = await api.query(Prismic.Predicates.any('document.type', ['article', 'pictures_and_video', 'story', 'post']))
    const documents = query.results
    return { title, documents }
  }

  componentDidMount() {
    document.getElementById('index-loader').style.opacity = '1';
  }

  render () {
    const { title, documents } = this.props
    return (
      <div id='index-loader' style={{opacity: 0}}>
        <LogoWithMenu animation='pulse' slogan={title} />
        <Head title="Fora" description="O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações na paisagem urbana." cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg'/>
        <SliderTunnel documents={documents} />
        <div className="banner-pesquisa">
          <h2>Como você vive o lado de Fora?</h2>
          <h3>Clique aqui para<br />participar.</h3>
          <h4>Pesquisa até dia 15/06</h4>
          <a href="cu" className='close'>X</a>
        </div>
        <style jsx>{`
          .banner-pesquisa {
            padding: 40px;
            background: white;
            box-shadow: -10px 10px 17px 0px rgba(0,0,255, 0.75);
            position: fixed;
            top: 50px;
            right: 50px;
            color: blue;
            font-family: 'Source Sans Pro', sans-serif;
            width: 280px;
          }
          .banner-pesquisa h2 {
            font-size: 38px;
            font-weight: 900;
            margin-top: 0;
          }
          .banner-pesquisa h3 {
            font-size: 28px;
            font-weight: 600;
            font-style: italic;
          }
          .banner-pesquisa h4 {
            margin-bottom: 0;
            font-weight: 300;
            font-size: 22px;
          }
          .banner-pesquisa .close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 10px;
            text-decoration: none;
            background: blue;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}
