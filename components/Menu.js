import React from 'react'
import { Consumer } from './base/Context'
import Modal from './struct/Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'

const locale = {
  br: {
    about: "O que é;",
    actions: "Ações & imaginações;"
  },
  en: {
    about: "What it is;",
    actions: "Actions & imaginations;"
  }
}

export default class Menu extends React.Component {
  state = {
    showSignup: false
  }

  render () {
    const {
      props, state, toggleSignup
    } = this
    const { showSignup, background } = state
    const { visible, onBgClick } = props
    return <Consumer>
      {context => {
        const lang = context ? context.lang : 'br'
        const data = locale[lang]

        const { about, actions } = data

        return <Modal visible={visible} style={{ ...menuModalStyle, backgroundImage: background }} onBgClick={onBgClick}>
          <div className='menu mainMenu'>
            <MenuLink href={{ pathname: '/o-que-e' }}>{about}</MenuLink>{' '}
            <MenuLink href={{ pathname: '/acoes' }}>{actions}</MenuLink>
          </div>
          <div className='menu lang'>
            <MenuLink
              onClick={context && context.setLangBr}
              href={{ pathname: '' }}
              style={{ ...lang === 'br' && langActive }}
            >
              br
            </MenuLink>{' / '}
            <MenuLink
              onClick={context && context.setLangEn}
              href={{ pathname: '' }}
              style={{ ...lang === 'en' && langActive }}
            >
              en
            </MenuLink>
          </div>
          <div className='menu secondaryMenu'>
            <MenuLink href={{ pathname: 'https://www.facebook.com/foraofora' }} >Facebook;</MenuLink>{' '}
            <MenuLink href={{ pathname: 'https://www.instagram.com/foraofora/' }} >Instagram;</MenuLink>{' '}
            <MenuLink href={{ pathname: 'https://www.youtube.com/channel/UCWbR2Koag3uPfuaWUktngEg' }}>YouTube;</MenuLink>
          </div>
          <Modal visible={showSignup} onBgClick={this.toggleSignup}>
            <SignupForm />
          </Modal>
          <style jsx>{`
            .menu {
              font-weight: 600;
              position: fixed;
              font-size: 29px;
            }
            .mainMenu {
              top: 55px; left: 20px;
            }
            .menu.lang {
              right: 20px;
            }
            .secondaryMenu {
              bottom: 20px;
              right: 20px;
              text-align: right;
            }
            @media only screen and (min-width: 752px) {
              .menu { font-size: 41px }
              .mainMenu { top: 21px; left: 175px; }
              .menu.lang { top: 21px; right: 40px; }
            }
          `}</style>
        </Modal>
      }}
    </Consumer>
  }

  toggleSignup = (event) => this.setState({ showSignup: !this.state.showSignup })
}

const langActive = {
  color: 'rgb(0,17,254)'
}
const menuModalStyle = {
  background: 'rgba(255,255,255,0.85)',
  color: 'black',
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 40,
  zIndex: 10
}
