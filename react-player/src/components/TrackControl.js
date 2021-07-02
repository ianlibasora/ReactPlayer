
import React from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { IconButton } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
// import { useEffect } from 'react';
// import { useState } from 'react';

function mod(a, b) {
   return ((a % b) + b) % b
}

// function trackLength(playerTag) {
//    console.log(playerTag.duration)
//    console.log(playerTag)
//    try {
//       if (!isNaN(playerTag.duration)) {
//          let mins = Math.floor(playerTag.duration / 60)
//          let secs = Math.floor(playerTag.duration % 60)
//          return `${mins}:${secs}`
//       } else {
//          return "nan fail"
//       }
//    } catch(stderr) {
//       return "catch fail"
//    }
// }

export default function TrackControl({
      trackTime, setTrackTime, playing, setPlaying, 
      trackList, currentTrack, setCurrentTrack, playerTag
   }) {
   const theme = useTheme()

   // let [trackLgt, setTrackLgt] = useState("")

   // useEffect(() => {
   //    console.log("use effect called")
   //    setTrackLgt(trackLength(playerTag.current))
   // }, [playerTag?.current?.loadmetadata, playerTag?.current?.readyState, playerTag])

   return (
      <div style={{color: theme.palette.secondary}} fontSize="large">
         <Grid container spacing={0}>
            <Grid item xs={4}>
               <p>&nbsp;</p>
            </Grid>
            <Grid item xs={1}>
               <IconButton
                  aria-label="Skip previous track"
                  color="inherit"
                  onClick={() => setCurrentTrack(mod(currentTrack - 1, trackList.length))}
               >
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
               <IconButton
                  aria-label="Skip next track"
                  color="inherit"
                  onClick={() => setCurrentTrack((currentTrack + 1) % trackList.length)}
               >
                  <SkipNextIcon fontSize="large"/>
               </IconButton>
            </Grid>
            <Grid item xs={4}>
               <p>&nbsp;</p>
            </Grid>
            <Grid item xs={1}>
               {/* <Typography variant="caption">00:00</Typography> */}
            </Grid>
            <Grid item md={10}>
               <Slider color="secondary" value={trackTime} onChange={(event, newTrackTime) => setTrackTime(newTrackTime)} aria-label="Track control"/>
            </Grid>
            <Grid item xs={1}>
               {/* <Typography variant="caption" id="trackLgtHTML">{trackLgt}</Typography> */}
            </Grid>
         </Grid>
      </div>
   )
}
