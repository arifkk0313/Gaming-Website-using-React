import React from 'react'
import './Footer.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
function Footer() {
  return (
    <footer>
        <div className="container">
            <center> <h1 className='see'>See my <span style={{color:'#7501ff'}}> Matches </span></h1></center>

            <div className="game_section">
                <img className='image1' src="https://wallpaperaccess.com/full/346450.jpg" alt="" />
                <div className="contents">
                <p className='complete'>Complteted</p>
                <p className='death'>Valorant Deathmatch</p>
                <p className='date'>10th March 2022</p>
                </div>
                <LiveTvIcon style={{fontSize:'40'}}  className='livetv' />
            </div>
            <div className="game_section gam">
                <img className='image1' src="https://cdn.mwallpapers.com/photos/celebrities/games/hd-game-android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4khd-wallpapers-desktop-background-android-iphone-1080p-4k-z1kbm.jpg" alt="" />
                <div className="contents">
                <p className='complete'>Complteted</p>
                <p className='death'>Valorant Deathmatch</p>
                <p className='date'>10th March 2022</p>
                </div>
                <LiveTvIcon style={{fontSize:'40'}} className='livetv'/>
            </div>
            <div className="game_section gam">
                <img className='image1' src="https://c4.wallpaperflare.com/wallpaper/881/800/912/machine-bear-mercenaries-pmc-battlestate-games-hd-wallpaper-preview.jpg" alt="" />
                <div className="contents">
                <p className='complete'>Complteted</p>
                <p className='death'>Valorant Deathmatch</p>
                <p className='date'>10th March 2022</p>
                </div>
                <LiveTvIcon  style={{fontSize:'40'}} className='livetv'/>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer