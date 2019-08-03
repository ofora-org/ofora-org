import React from 'react'
import { Consumer } from './base/Context'
import MenuLink from './MenuLink'

const MenuLang = () =>
  <Consumer>
    {context => {
      const lang = context ? context.lang : 'br'
      
      return <div className='menu-lang'>
        <MenuLink
          onClick={context && context.setLangBr}
          href={{ pathname: '' }}
          style={{ ...lang === 'br' && langActive }}
        >
          PT
        </MenuLink>{' / '}
        <MenuLink
          onClick={context && context.setLangEn}
          href={{ pathname: '' }}
          style={{ ...lang === 'en' && langActive }}
        >
          EN
        </MenuLink>
        <style jsx>{`
          .menu-lang {
            position: relative;
            right: 20px;
            font-weight: 600;
            font-size: 29px;
          }
          @media only screen and (min-width: 752px) {
            .menu.lang {
              top: 21px; right: 40px;
            }
          }
        `}</style>
      </div>
    }}
  </Consumer>

const langActive = {
  color: 'rgb(0,17,254)'
}

export default MenuLang
