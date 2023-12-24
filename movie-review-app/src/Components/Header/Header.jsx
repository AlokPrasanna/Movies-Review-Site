import React from 'react'
import MenuLink from '../MenuLink/MenuLink'

function Header() {
  return (
    <div>
      <a href='#'>MRV</a>
      <div>
        <header>
            <MenuLink LinkName='Home' url='#Home'/>
            <MenuLink LinkName='Category' url='#Category'/>
            <MenuLink LinkName='Request' url='#Request'/>
            <MenuLink LinkName='About' url='#About'/>
        </header>
      </div>
      <br />
    </div>
  )
}

export default Header
