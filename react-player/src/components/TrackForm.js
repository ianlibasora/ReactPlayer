
import React from 'react';
import { useTheme } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function TrackForm({trackList, trackListHook}) {
   const theme = useTheme()

   return (
      <div className="formContainer" style={{backgroundColor: theme.palette.primary.light}}>
         <div className="formIcon">
            <CloudUploadIcon fontSize="inherit"/>
         </div>
         <form>
            <div className="formControl">
               <input type="file" id="fileIn" placeholder="Add Tracks" multiple></input>
            </div>
            <div className="formControl">
               <input type="submit" value="Submit"></input>
            </div>
         </form>
      </div>
   )
}
