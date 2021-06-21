
import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import TrackForm from './TrackForm';

export default function Menu({trackList, trackListHook}) {
   const theme = useTheme()

   if (trackList.length === 0) {
      return (
         <div>
            <TrackForm trackList={trackList} trackListHook={trackListHook}/>
         </div>
      )
   } else {
      return (
         <div>
            <Typography>TRACKLIST CONTAINS ITEMS</Typography>
         </div>
      )
   }
}
