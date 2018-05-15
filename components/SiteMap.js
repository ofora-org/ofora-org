import React from 'react'
import MenuLink from '~/components/MenuLink'
import { withState, withHandlers, lifecycle, compose } from 'recompose'
import { getCategories } from '~/lib/backend'

const enhance = compose(
  lifecycle({
    componentDidMount() {
      const self = this
      getCategories().then(categories => this.setState(categories))
    }
  })
)

const SiteMap = ({ style, categories }) => (
  <div className='wrapper'>
    <div><span style={{margin: '0 60px 60px'}}>/Mapa do site</span><br /><br /><br /></div>
    <div className='content' style={style}>
      <div>
        <div>
          <MenuLink href='/o-que-e' >O que é</MenuLink>
        </div><br /><br />
        <div><MenuLink href='/o-que-e#about'>Sobre;</MenuLink></div>
        <div><MenuLink href='/o-que-e#research'>Pesquisas;</MenuLink></div>
        <div><MenuLink href='/o-que-e#cultures'>Culturas;</MenuLink></div>
        <div><MenuLink href='/o-que-e#landscapes'>Paisagens;</MenuLink></div>
        <div><MenuLink href='/o-que-e#info'>Informações gerais;</MenuLink></div>
      </div>
      <div>
        <div>
          <MenuLink href={{ pathname: '/acoes' }} >Ações & imaginações</MenuLink>
        </div><br /><br />
        {categories && categories.map(p =>
          <div><MenuLink href={{ pathname: '/acoes', query: { initialCategory: p.data.name[0].text } }}>
            {p.data.name[0].text};
          </MenuLink></div>
        )}
        <div><MenuLink href={{ pathname: '/acoes/tags' }} >Palavras-Chave;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/athors' }} >Participantes;</MenuLink></div>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        font-family: IntervalBook, monospace;
        font-size: 16px;
        line-height: 1.25;
        margin-bottom: 20px;
      }
      .content {
        display: flex;
      }
      .content > div {
        width: 50%;
      }
      @media only screen and (min-width: 752px) {
        .content { width: 600px; margin: 0 auto; }
      }
    `}</style>
  </div>
)

export default enhance(SiteMap)
