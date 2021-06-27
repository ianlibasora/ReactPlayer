
import React from 'react';
import { useTheme } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function TrackForm({setTrackList}) {
   const theme = useTheme()

   return (
      <div className="formContainer" style={{backgroundColor: theme.palette.primary.light}}>
         <div className="formIcon">
            <CloudUploadIcon fontSize="inherit"/>
         </div>
         <form 
            onSubmit={(event) => {
               event.preventDefault()
               let filesIn = event["target"][0]["files"]
               let trackList = []
               let i = 0

               for (let key in filesIn) {
                  if (filesIn[key] instanceof File) {
                     trackList.push({"id": i++, "file": filesIn[key]})
                  }
               }
               setTrackList(trackList)
            }} 
            encType='multipart/form-data'
         >
            <div className="formControl">
               <input 
                  type="file"
                  id="fileIn"
                  placeholder="Add Tracks"
                  multiple>
               </input>
            </div>
            <div className="formControl">
               <input type="submit" value="Submit"></input>
            </div>
         </form>
      </div>
   )
}
