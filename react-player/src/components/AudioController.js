
import React from 'react';
import { useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import VolumeControl from './VolumeControl';
import TrackControl from './TrackControl';

export default function AudioController({value, setValue, trackTime, setTrackTime}) {
   const theme = useTheme()

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
      </div>
   )
}
