import React from 'react'
import Prismic from 'prismic-javascript'
import LogoWithMenu from '../components/LogoWithMenu'
import ContentWrapper from '../components/struct/ContentWrapper'
import PageWrapper from '../components/struct/PageWrapper'
import Title from '../components/Title'
import Paragraph from '../components/base/Paragraph'
import Img from '../components/base/Image'
import { Consumer } from '../components/base/Context'
import { getAbout } from '../lib/backend'
import { RichText } from 'prismic-reactjs'
import MenuLang from '../components/MenuLang'

const P = ({children}) => <Paragraph style={{maxWidth: 710}}>{children}</Paragraph>

export default class Oquee extends React.Component {
  static async getInitialProps ({ req }) {
    const locale = await getAbout()
    return { locale }
  }

  render () {
    const { locale }= this.props
    return <Consumer>
      {context => {
        const lang = context ? context.lang : 'br'
        const data = locale[lang]

        const {
          title_page, content, description, team_title, body, funding_title, funding_content
        } = data

        return <PageWrapper invert title="O que é" description="O Fora é sobre possibilidades de viver a cidade e acontece por meio de pesquisas sociais, manifestações culturais e ações no espaço público." cover='https://fora.cdn.prismic.io/fora/21c85cdcacb048a984d1150c855296cbda4b1095_fora-dobra-do-corpo-1-.jpg'>
          <div className='about-banner'>
            <video playsInline loop muted autoPlay>
              <source src="static/oquee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='about-title'>
            <ContentWrapper style={pageStyle}>
              <Title>{title_page[0].text}</Title>
            </ContentWrapper>
          </div>


          <div className='about' style={{background: '#dfdfdf'}}>
            <ContentWrapper style={pageStyle}>
              <div className='menu-lang-about'>
                <MenuLang />
              </div>
              <div className='rich-text content'>
                {RichText.render(content)}
              </div>
              <div className='rich-text description'>
                {RichText.render(description)}
              </div>
            </ContentWrapper>
          </div>

          <div className='info' id='info'>
            <ContentWrapper style={{ ...pageStyle, background: '#cfcfcf', position: 'relative'}}>
              <P><div className='title'>{team_title[0].text}</div></P>

              <P><div className='grid'>
                {body.map(bodyContent => {
                  if (bodyContent.slice_type !== 'membro') return

                  return bodyContent.items.map(member =>
                    <div className='member'><b>{member.name[0].text}</b><br />{member.bio[0].text}</div>
                  )
                })}
              </div></P>

              <P><div className='title'>{funding_title[0].text}</div></P>
              <div className='rich-text funding'>
                {RichText.render(funding_content)}
              </div>
            </ContentWrapper>
          </div>
          <style jsx>{`
            .cover {
              height: 60vh;
              background: url('/static/oqueebg.jpg');
              background-size: cover;
              background-position: center bottom;
              color: white;
              font-family: 'Source Serif Pro', serif;
              position: relative;
            }
            .menu-lang-about {
              max-width: 710px;
              margin: 0 auto;
              text-align: right;
            }
            .about-banner {
              background-color: #dfdfdf;
            }
            .about-banner video {
              width: 100%;
            }
            .about-title {
              position: absolute;
              top: 0;
              color: white;
              font-family: 'Source Serif Pro', serif;
            }
            .title {
              font-size: 24px;
              margin: 1.5em 0 1em 30px;
              font-family: 'Source Serif Pro', serif;
            }
            .subtitle {
              margin-left: 30px;
              margin-top: 1.5em
            }
            .about {
              font-family: 'Source Serif Pro', serif;
            }
            .rich-text {
              margin: 0 auto;
              max-width: 710px;
            }
            .about .content {
              font-size: 24px;
            }
            .about .description {
              font-size: 24px;
            }
            .info .funding {
              font-size: 18px;
            }
            .info {
              font-family: 'Source Sans Pro', sans-serif;
            }
            .info .member {
              margin-bottom: 1em;
            }
            .info .float-title {
              font-size: 24px;
              margin-bottom: -10px;
              display: block;
              font-family: IntervalBook, monospace;
              font-size: 16px;
            }
            @media only screen and (min-width: 752px) {
              .cover {
                height: 100vh;
              }
              .info .float-title {
                margin-left: 60px;
              }
              .info .grid {
                max-width: 750px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 2rem;
                grid-row-gap: 1rem;
              }
              .info .grid > div {
                margin-bottom: 0;
              }
            }
            @media only screen and (min-width: 1050px) {
              .info .grid {
                grid-template-columns: 1fr 1fr 1fr;
              }
            }
            @media only screen and (min-width: 1170px) {
              .info .grid {
                grid-template-columns: 1fr 1fr 1fr 1fr;
              }
            }
          `}</style>
        </PageWrapper>
      }}
    </Consumer>
  }
}

const pageStyle = {
  paddingBottom: 40
}
