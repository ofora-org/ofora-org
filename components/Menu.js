import React from 'react'
import Modal from '~/components/struct/Modal'
import MenuLink from './MenuLink'
import SignupForm from './SignupForm'

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
    return (
      <Modal visible={visible} style={{ ...menuModalStyle, backgroundImage: background }} onBgClick={onBgClick}>
        <div className='menu mainMenu'>
          <MenuLink href={{ pathname: '/o-que-e' }}>O que é;</MenuLink>{' '}
          <MenuLink href={{ pathname: '/acoes' }}>Ações & imaginações;</MenuLink>
        </div>
        <div className='menu secondaryMenu'>
          <MenuLink href={{ pathname: 'https://www.facebook.com/foraofora' }} >Facebook;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.instagram.com/foraofora/' }} >Instagram;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.youtube.com/channel/UCWbR2Koag3uPfuaWUktngEg' }}>YouTube;</MenuLink>
          <MenuLink href={{ pathname: 'https://twitter.com/foraofora' }}>Twitter;</MenuLink>{' '}
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
          .secondaryMenu {
            bottom: 20px;
            right: 20px;
            text-align: right;
          }
          @media only screen and (min-width: 752px) {
            .menu { font-size: 41px }
            .mainMenu { top: 21px; left: 175px; }
          }
        `}</style>
      </Modal>
    )
  }

  toggleSignup = (event) => this.setState({ showSignup: !this.state.showSignup })
}

const menuModalStyle = {
  background: 'rgba(255,255,255,0.95)',
  color: 'black',
  fontFamily: "'Source Serif Pro', serif",
  fontSize: 40,
  zIndex: 10
}
