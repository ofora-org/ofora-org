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
          <div><MenuLink onClick={toggleSignup}>Informativo;</MenuLink></div>
          <MenuLink href={{ pathname: 'https://www.facebook.com/Fora-330807067434593/' }} >Facebook;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://twitter.com/foraofora' }}>Twitter;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.instagram.com/foraofora/' }} >Instagram;</MenuLink>{' '}
          <MenuLink href={{ pathname: 'https://www.youtube.com/channel/UCWbR2Koag3uPfuaWUktngEg?view_as=subscriber ' }}>YouTube;</MenuLink>
        </div>
        <Modal visible={showSignup} onBgClick={this.toggleSignup}>
          <SignupForm />
        </Modal>
        <style jsx>{`
          .menu {
            font-weight: 600;
            position: fixed;
          }
          .mainMenu {
            top: 120px; left: 7px;
          }
          .secondaryMenu {
            bottom: 20px;
            right: 7px;
            text-align: right;
          }
          @media only screen and (min-width: 752px) {
            .mainMenu {
              top: 21px; left: 175px;
            }
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
