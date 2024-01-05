import React from 'react';
import { useApiContext } from '../../Components/ApiContex/ApiContext';
import { useApiContextTitle } from '../../Components/ApiConetexTitle/ApiContexTitle';
import MenuLink from '../MenuLink/MenuLink';
import '../../Style/Header.scss';
import LanguageList from '../LanguageList/LanguageList';
import { Link } from 'react-router-dom';

function Header() {

  const Key = localStorage.getItem('TMDBKey');

  const {setContextData} = useApiContext();
  const {setContextTitleData} = useApiContextTitle();

  const SendData = (SendId) =>{
    console.log("props dataID: ", SendId);
     if(SendId === 1){
       setContextData();
       setContextTitleData("Top Rated");
     }else if(SendId === 2){
       setContextData(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}`);
       setContextTitleData("Popular");
     }else if(SendId === 3){
       setContextData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}`);
       setContextTitleData("Now Playing");
     }else if(SendId === 4){
       setContextData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}`);
       setContextTitleData("Up Comming");
     }else{
       setContextData("Non");
       setContextTitleData("Request Error");
     }
   }

  return (
    <div className='header'>
        <header className='nav-bar'>
              <Link to="/" className='app-name'>MRV</Link>
              <Link to='/'>Hpme</Link>
              <Link   to='/filtered-movies' onClick={() => {SendData(1)}}>Top Rated</Link>
              <Link   to='/filtered-movies' onClick={() => {SendData(2)}} >Popular</Link>
              <Link   to='/filtered-movies' onClick={() => {SendData(3)}}>Now Playing</Link>
              <Link   to='/filtered-movies' onClick={() => {SendData(4)}}>Up Comming</Link>
              <LanguageList>
                <MenuLink LinkName='Language'/>
              </LanguageList>
              <Link  to='/about'>About</Link>
        </header>
      <br />
    </div>
  )
}

export default Header
