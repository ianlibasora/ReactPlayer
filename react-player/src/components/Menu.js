
import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import TrackForm from './TrackForm';

export default function Menu({trackList, setTrackList}) {
   const theme = useTheme()

   if (trackList.length === 0) {
      return (
         <div>
            <TrackForm setTrackList={setTrackList}/>
         </div>
      )
   } else {
      return (
         <div>
            <Typography>TRACKLIST CONTAINS ITEMS</Typography>
            {trackList.map((track) => (
               <p key={track.name}>{track.name}</p>
            ))}
         </div>
      )
   }
}
