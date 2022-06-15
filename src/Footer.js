import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
          <img className='footer__albumLogo' src="https://www.behindwoods.com/kannada-movies/kgf/stills-photos-pictures/kgf-stills-photos-pictures-10.jpg" alt="song img" />
          <div className='footer_left'>
                         <h4>KGF 2 song</h4>
                         <p>Ravi basrur</p>
          </div>
  </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize="large" className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />


      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid  item>
            <PlaylistPlayIcon className='mt-1' />
          </Grid>
          <Grid  item>
            <VolumeDownIcon className='mt-1' />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer