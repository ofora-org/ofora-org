import React from 'react'
import ContentWrapper from '~/components/struct/ContentWrapper'
import P from '~/components/base/Paragraph'
import MenuLink from '~/components/MenuLink'
import CC from './CC'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <ContentWrapper>
          <P>
            <div className='contactText'>
              <div>Antes de dar o Fora, se quiser tirar dúvidas, dar sugestões ou colaborar, escreva para:</div>
              <div><MenuLink href={{ pathname: '/o-que-e' }}>info@ofora.org</MenuLink></div>
            </div>
          </P>
        </ContentWrapper>
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR' target='_blank'>
          <CC style={ccText} /><span style={ccText}>Todo o conteúdo produzido pelo Fora pode ser copiado, redistribuído e transformado para fins não comerciais, desde que atribuam o devido crédito e que licenciem as novas criações sob termos idênticos. (CC BY-NC-SA 4.0)</span>
        </a>
        <style jsx>{`
          .contactText {
            font-size: 24px;
            font-family: 'Source Serif Pro', serif;
            font-weight: 600;
            margin: 40px 0 50px 0;
          }
          a:hover {
            color: blue;
            fill: blue;
          }
          @media only screen and (min-width: 752px) {
            .contactText {
              font-size: 29px;
              margin: 80px 0 50px 0;
            }
          }
        `}</style>
      </div>
    )
  }
}
const ccText = {
  fontSize: 12,
  fontFamily: "'Source Sans Pro', sans-serif",
  maxWidth: 300,
  display: 'inline-block',
  verticalAlign: 'top',
  marginLeft: 10,
  marginTop: 4,
  lineHeight: '1.3em'
}
