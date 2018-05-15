import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
import CC from './CC'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <div style={{background: 'white', overflow: 'hidden'}}>
          <P>
            <div className='contactText'>
              <div>Antes de dar o Fora, se quiser tirar dúvidas, dar sugestões ou colaborar, escreva para:</div>
              <div><MenuLink href={{ pathname: '/o-que-e' }}>info@ofora.org</MenuLink></div>
            </div>
          </P>
        </div>
        <ContentWrapper  style={{background: 'white'}}>
          <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR' target='_blank'>
            <CC style={ccText} /><span className='ccText'>Todo o conteúdo produzido pelo Fora pode ser copiado, redistribuído e transformado para fins não comerciais, desde que atribuam o devido crédito e que licenciem as novas criações sob termos idênticos. (CC BY-NC-SA 4.0)</span>
          </a>
        </ContentWrapper>
        <style jsx>{`
          .contactText {
            font-size: 24px;
            font-family: 'Source Serif Pro', serif;
            font-weight: 600;
            margin: 40px 10px 50px 10px;
          }
          .ccText {
            font-size: 12px;
            font-family: 'Source Sans Pro', sans-serif;
            lineHeight: '1.3em';
            display: inline-block;
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
    )
  }
}
const ccText = {
  maxWidth: 300,
  display: 'inline-block',
  verticalAlign: 'top',

}
