
import React from 'react';
import { useTheme } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

import TrackForm from './TrackForm';

export default function Menu({trackList, setTrackList, setCurrentTrack}) {
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
            <TableContainer className="menu">
               <Table aria-label="Tracks table">
                  <TableHead>
                     <TableRow>
                        <TableCell>&nbsp;</TableCell>
                        <TableCell align="right" style={{color: "inherit"}}>Track</TableCell>
                     </TableRow>
                  </TableHead>

                  <TableBody>
                     {trackList.map(track => (
                        <TableRow key={track.id}>
                           <TableCell component="th" scope="row" style={{color: "inherit"}}>
                              <IconButton
                                 aria-label="Play track"
                                 color="inherit"
                                 onClick={() => setCurrentTrack(track.id)}
                              >
                                 <PlayCircleFilledWhiteIcon fontSize="small"/>
                              </IconButton>
                           </TableCell>
                           <TableCell align="right" style={{color: "inherit"}}>{track.file.name.replace(".mp3", "")}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      )
   }
}
