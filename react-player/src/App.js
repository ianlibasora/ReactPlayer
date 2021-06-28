
import './App.css';
import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';

import TrackBar from './components/TrackBar';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
   const theme = useTheme()
   const [value, setValue] = useState(200)
   const [trackTime, setTrackTime] = useState(0)
   const [trackList, setTrackList] = useState([])
   let [currentTrack, setCurrentTrack] = useState(0)

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

         <TrackBar
            value={value}
            setValue={setValue}
            trackTime={trackTime}
            setTrackTime={setTrackTime}
            trackList={trackList}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
         />
      </div>
   );
}

export default App;
