
import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useRef } from 'react';
import { useEffect } from 'react';

import VolumeControl from './VolumeControl';
import TrackControl from './TrackControl';

export default function AudioController({
      trackTime, setTrackTime, trackList, 
      currentTrack, setCurrentTrack
   }) {
   const theme = useTheme()
   const playerTag = useRef(null)
   let [playing, setPlaying] = useState(false)
   let [nextTrack, setNextTrack] = useState(currentTrack + 1)
   const [value, setValue] = useState(100)

   useEffect(() => {
      setNextTrack((currentTrack + 1) % trackList.length)
   }, [currentTrack, trackList])

   useEffect(() => {
      playing ? playerTag.current.play() : playerTag.current.pause()
   })

   useEffect(() => {
      playerTag.current.volume = value / 100
   }, [value])

   return (
      <div style={{color: theme.palette.primary.contrastText}}>
         <Grid container spacing={2}>
            <Grid item sm={9}>
               <TrackControl
                  trackTime={trackTime}
                  setTrackTime={setTrackTime}
                  playing={playing}
                  setPlaying={setPlaying}
                  trackList={trackList}
                  currentTrack={currentTrack}
                  setCurrentTrack={setCurrentTrack}
                  playerTag={playerTag}
               />
            </Grid>
            <Grid item xs={3}>
               <VolumeControl value={value} setValue={setValue}/>
            </Grid>
         </Grid>

         <audio
            src={trackList.length === 0 ? "" : trackList[currentTrack].url}
            ref={playerTag}
            onEnded={() => setCurrentTrack(nextTrack)}
         >
         </audio>
      </div>
   )
}
