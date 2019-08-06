import React from 'react'
import { Consumer } from './base/Context'
import MenuLink from './MenuLink'

const MenuLang = () =>
  <Consumer>
    {context => {
      return <div className='menu-lang'>
        <MenuLink
          onClick={context && context.setLangBr}
          href={{ pathname: '' }}
        >
          Pt
        </MenuLink>{' - '}
        <MenuLink
          onClick={context && context.setLangEn}
          href={{ pathname: '' }}
        >
          En
        </MenuLink>
        <style jsx>{`
          .menu-lang {
            position: relative;
            font-weight: 600;
            font-size: 29px;
          }
        `}</style>
      </div>
    }}
  </Consumer>

const langActive = {
  color: 'rgb(0,17,254)'
}

export default MenuLang
