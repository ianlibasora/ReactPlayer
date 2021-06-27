
import './App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { useState } from 'react';

import TrackBar from './components/TrackBar';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
   const theme = useTheme()
   const [value, setValue] = useState(200)
   const [trackTime, setTrackTime] = useState(0)
   let [trackList, setTrackList] = useState([])
   let [currentTrack, setCurrentTrack] = useState({"id": 0, "file": ""})

   console.log(currentTrack, "current")

   // let src;
   // if (currentTrack.file === "") {
   //    src = <source src="" type="audio/mpeg"></source>
   //    console.log("no src")
   // } else {
   //    src = <source src={URL.createObjectURL(currentTrack.file)} type="audio/mpeg"></source>
   //    console.log(`src is ${currentTrack.file.name}`)
   // }

   return (
      <div className="App">
         <Header/>

         <div className="menuContainer" style={{color: `${theme.palette.primary.contrastText}`}}>
            <Grid container justify="center" alignItems="stretch">
               <Grid item md={7}>
                  <Menu trackList={trackList} setTrackList={setTrackList} setCurrentTrack={setCurrentTrack}/>
               </Grid>
            </Grid>
         </div>

         <TrackBar value={value} setValue={setValue} trackTime={trackTime} setTrackTime={setTrackTime}/>
         {/* <audio controls>
            {currentTrack.file === "" ? <source src="" type="audio/mpeg"></source> : <source src={URL.createObjectURL(currentTrack.file)} type="audio/mpeg"></source>}
         </audio> */}
      </div>
   );
}

export default App;
