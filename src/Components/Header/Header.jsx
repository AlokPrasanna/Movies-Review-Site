import React from 'react'
import MenuLink from '../MenuLink/MenuLink';
import '../../Style/Header.scss';
import CategoryList from '../CategoryList/CategoryList';
import LanguageList from '../LanguageList/LanguageList';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <header className='nav-bar'>{/*/ nav means navigation */}
            <Link to="/" className='app-name'>MRV</Link>
            <MenuLink LinkName='Home' url='/'/>
            {/*<MenuLink LinkName='Category' url='/category'/>*/}
            <CategoryList>
              <MenuLink LinkName='Category'/>
            </CategoryList>
            <LanguageList>
              <MenuLink LinkName='Language'/>
            </LanguageList>
            <MenuLink LinkName='Request' url='/request'/>
            <MenuLink LinkName='About' url='/about'/>
        </header>
      <br />
    </div>
  )
}

export default Header
