
import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import AudioController from './AudioController';

export default function TrackBar({
      trackTime, setTrackTime, trackList, 
      currentTrack, setCurrentTrack
   }) {
   const theme = useTheme()

   return (
      <div className="controlBar" style={{backgroundColor: theme.palette.primary.main}}>
         <Grid container spacing={2}>
            <Grid item sm={3}>
               <Typography
                  style={{color: theme.palette.primary.contrastText}}
                  variant="body1"
                  className="trackInfo"
               >
                  {trackList.length === 0 ? "" : trackList[currentTrack].file.name.replace(".mp3", "")}
               </Typography>
            </Grid>
            <Grid item xs={9}>
               <AudioController
                  trackTime={trackTime}
                  setTrackTime={setTrackTime}
                  trackList={trackList}
                  currentTrack={currentTrack}
                  setCurrentTrack={setCurrentTrack}
               />
            </Grid>
         </Grid>
      </div>
   )
}
