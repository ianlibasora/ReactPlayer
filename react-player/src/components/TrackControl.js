
import React from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { IconButton } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function TrackControl({trackTime, setTrackTime, playing, setPlaying}) {
   const theme = useTheme()

   return (
      <div style={{color: theme.palette.secondary}} fontSize="large">
         <Grid container spacing={0}>
            <Grid item xs={4}>
               <p>&nbsp;</p>
            </Grid>
            <Grid item xs={1}>
               <IconButton aria-label="Previous track" color="inherit">
                  <SkipPreviousIcon fontSize="large"/>
               </IconButton>
            </Grid>
            <Grid item xs={2}>
               <IconButton
                  aria-label="Play/Pause track"
                  color="inherit"
                  onClick={() => setPlaying(!playing)}
               >
                  {playing ? <PauseCircleFilledIcon fontSize="large"/> : <PlayCircleFilledWhiteIcon fontSize="large"/>}
               </IconButton>
            </Grid>
            <Grid item xs={1}>
               <IconButton aria-label="Next track" color="inherit">
                  <SkipNextIcon fontSize="large"/>
               </IconButton>
            </Grid>
            <Grid item xs={4}>
               <p>&nbsp;</p>
            </Grid>
            <Grid item xs={1}>
               <Typography variant="caption">00:00</Typography>
            </Grid>
            <Grid item md={10}>
               <Slider color="secondary" value={trackTime} onChange={(event, newTrackTime) => setTrackTime(newTrackTime)} aria-label="Track control"/>
            </Grid>
            <Grid item xs={1}>
            <Typography variant="caption">99:99</Typography>
            </Grid>
         </Grid>
      </div>
   )
}
