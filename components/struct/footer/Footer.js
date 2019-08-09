import React from 'react'
import ContentWrapper from '../ContentWrapper'
import P from '../../base/Paragraph'
import MenuLink from '../../MenuLink'
import CC from './CC'
import { Consumer } from '../../base/Context'

const locale = {
  br: {
    contactText: "Antes de dar o Fora, se quiser tirar dúvidas, dar sugestões ou colaborar, escreva para:",
    ccText: "Todo o conteúdo produzido pelo Fora pode ser copiado, redistribuído e transformado para fins não comerciais, desde que atribuam o devido crédito e que licenciem as novas criações sob termos idênticos.",
    ccCode: "(CC BY-NC-SA 4.0)"
  },
  en: {
    contactText: "Before you go, if you have any doubts, suggestions or collaboration ideas, write to:",
    ccText: "All the content produced by Fora can be copied, redistributed and transformed for non-commercial ends, as long as credits are given and that licencing of new creations be under these same terms. (CC BY-NC-SA 4.0)",
    ccCode: "(CC BY-NC-SA 4.0)"
  }
}

export default class Footer extends React.Component {
  render () {
    return <Consumer>
      {context => {
        const lang = context ? context.lang : 'br'
        const data = locale[lang]

        const { contactText, ccText, ccCode } = data

        return <div>
          <div style={{background: 'white', overflow: 'hidden'}}>
            <P>
              <div className='contactText'>
                <div>{contactText}</div>
                <div><MenuLink href={{ pathname: '/o-que-e' }}>info@ofora.org</MenuLink></div>
              </div>
            </P>
          </div>
          <ContentWrapper  style={{background: 'white'}}>
            <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR' target='_blank'>
              <CC /><span className='ccText'>
                {ccText} <span>{ccCode}</span>
              </span>
            </a>
          </ContentWrapper>
          <ContentWrapper  style={{background: 'white', paddingTop: 0 }}>
            <img src='/static/cnpj.png' width='30px' />
            <span className='ccText'>
              CNPJ nº 14.113.581/0001-82, São Paulo (SP), Brasil
            </span>
          </ContentWrapper>
          <style jsx>{`
            .contactText {
              font-size: 24px;
              font-family: 'Source Serif Pro', serif;
              font-weight: 600;
              margin: 40px 20px 40px 20px;
            }
            .ccText {
              font-size: 12px;
              font-family: 'Source Sans Pro', sans-serif;
              lineHeight: 1.3em;
              display: inline-block;
              margin-right: 30%;
            }
            .ccText > span {
              white-space: nowrap;
            }
            a:hover {
              color: blue;
              fill: blue;
            }
            @media only screen and (min-width: 752px) {
              .contactText {
                font-size: 29px;
                margin: 50px 0 50px 0;
              }
              .ccText {
                margin: 4px 0 0 10px;
                max-width: 400px;
                vertical-align: top;
              }
            }
          `}</style>
        </div>
      }}
    </Consumer>
  }
}
