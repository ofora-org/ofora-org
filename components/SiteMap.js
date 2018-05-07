import React from 'react'
import MenuLink from '~/components/MenuLink'

const SiteMap = ({style}) => (
  <div className='wrapper'>
    <div><span style={{margin: '0 60px 60px'}}>/Mapa do Site</span><br /><br /><br /></div>
    <div className='content' style={style}>
      <div>
        <div>
          <MenuLink href={{ pathname: '/o-que-e' }} >O que é</MenuLink>
        </div><br /><br />
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Sobre;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Equipe;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Parceiros;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Escutando a Cidade;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Formularios;</MenuLink></div>
      </div>
      <div>
        <div>
          <MenuLink href={{ pathname: '/acoes' }} >Ações & imaginações</MenuLink>
        </div><br /><br />
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Arte;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Ensaios;</MenuLink></div>
        <div><MenuLink href={{ pathname: '/acoes/tags' }}>Jornalismo;</MenuLink></div>
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

export default SiteMap
