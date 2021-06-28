
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useRef } from 'react';
import { useEffect } from 'react';

import VolumeControl from './VolumeControl';
import TrackControl from './TrackControl';

export default function AudioController({
      value, setValue, trackTime, setTrackTime, 
      trackList, currentTrack, setCurrentTrack, nextTrack, 
      setNextTrack, prevTrack, setPrevTrack
   }) {
   const theme = useTheme()
   const playerTag = useRef(null)
   let [playing, setPlaying] = useState(false)

   useEffect(() => {
      playing ? playerTag.current.play() : playerTag.current.pause()
   })

   return (
      <div style={{color: theme.palette.primary.contrastText}}>
         <Grid container spacing={2}>
            <Grid item sm={9}>
               <TrackControl trackTime={trackTime} setTrackTime={setTrackTime}/>
            </Grid>
            <Grid item xs={3}>
               <VolumeControl value={value} setValue={setValue}/>
            </Grid>
         </Grid>

         <audio ref={playerTag} src={trackList.length === 0 ? "" : URL.createObjectURL(trackList[currentTrack].file)} controls></audio>
      </div>
   )
}
